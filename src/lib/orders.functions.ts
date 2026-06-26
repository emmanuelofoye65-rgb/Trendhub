import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { getPublicSupabase, signImagePaths } from "./supabase-server";

export const createOrder = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        productId: z.string().uuid(),
        quantity: z.number().int().min(1).max(50).default(1),
        guestName: z.string().trim().min(1).max(120).optional(),
        guestPhone: z.string().trim().min(7).max(30).optional(),
        guestEmail: z.string().trim().email().max(255).optional(),
        userId: z.string().uuid().optional(),
        variants: z.any().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: product, error: pErr } = await supabaseAdmin
      .from("products")
      .select("id, price_naira, is_active, stock")
      .eq("id", data.productId)
      .maybeSingle();
    if (pErr || !product || !product.is_active) throw new Error("Product not available");

    const base = product.price_naira * data.quantity;
    // Append a unique 2-digit suffix in naira (1-99) to differentiate payments by amount.
    const unique = base + Math.floor(Math.random() * 99) + 1;

    const { data: order, error } = await supabaseAdmin
      .from("orders")
      .insert({
        user_id: data.userId ?? null,
        product_id: data.productId,
        quantity: data.quantity,
        base_amount: base,
        unique_amount: unique,
        guest_name: data.guestName ?? null,
        guest_phone: data.guestPhone ?? null,
        guest_email: data.guestEmail ?? null,
        status: "pending",
        variants: data.variants ?? null,
      } as any)
      .select("id")
      .single();
    if (error) throw error;
    return { id: order.id };
  });

export const getMyOrders = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { data } = await context.supabase
      .from("orders")
      .select("*, products(title, image_urls)")
      .eq("user_id", context.userId)
      .order("created_at", { ascending: false });
    const pub = getPublicSupabase();
    return Promise.all(
      (data ?? []).map(async (o: any) => ({
        ...o,
        product_image: (await signImagePaths(pub, "product-images", o.products?.image_urls))[0] ?? "",
      })),
    );
  });

// Keep in sync with the webhook's `norm()` so saved names match incoming
// Moniepoint payloads after both sides apply the same transform.
export function normalizeSenderName(raw: string): string {
  return raw
    .normalize("NFKC")
    .replace(/[^\p{L}\s'.\-]/gu, "") // letters, spaces, apostrophe, period, hyphen only
    .replace(/\s+/g, " ")
    .trim();
}

export const setOrderSenderName = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        id: z.string().uuid(),
        senderName: z
          .string()
          .max(120)
          .transform((s) => normalizeSenderName(s))
          .refine((s) => s.length >= 3, "Sender name is too short")
          .refine((s) => s.split(" ").length >= 2, "Enter your full name (first and last)"),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.rpc("set_order_sender_name", {
      _id: data.id,
      _sender_name: data.senderName,
    });
    if (error) throw error;
    return { ok: true, senderName: data.senderName };
  });

export const initializePaystack = createServerFn({ method: "POST" })
  .validator((input: { id: string }) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row } = await supabaseAdmin.rpc("get_order_public", { _id: data.id });
    const order = Array.isArray(row) ? row[0] : row;
    if (!order) throw new Error("Order not found");

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) throw new Error("PAYSTACK_SECRET_KEY environment variable is missing");

    // Fetch user or guest email. If we don't have one, use a fallback
    let email = "guest@trendrush.ng";
    // First, check if order has guest_email in the db (we might need to get it directly if rpc doesn't return it)
    const { data: orderDetails } = await supabaseAdmin
      .from("orders")
      .select("guest_email, user_id")
      .eq("id", data.id)
      .single();
    
    if (orderDetails) {
      if (orderDetails.guest_email) {
        email = orderDetails.guest_email;
      } else if (orderDetails.user_id) {
        const { data: user } = await supabaseAdmin.auth.admin.getUserById(orderDetails.user_id);
        if (user?.user?.email) {
          email = user.user.email;
        }
      }
    }

    const host = process.env.VITE_APP_URL || process.env.URL || "https://ais-dev-vijj3wd7php3qnvhwwzrw5-119678600897.europe-west1.run.app";
    
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: order.unique_amount * 100, // Paystack amount is in kobo
        reference: `${data.id}_${Date.now()}`,
        callback_url: `${host}/checkout/${data.id}`,
        metadata: {
          order_id: data.id,
        },
      }),
    });

    const result = await response.json();
    if (!response.ok || !result.status) {
      console.error("[Paystack error]", result);
      throw new Error(result.message || "Failed to initialize Paystack checkout");
    }

    return { authorizationUrl: result.data.authorization_url };
  });

export const getOrderById = createServerFn({ method: "GET" })
  .validator((input: { id: string }) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ data }) => {
    const supabase = getPublicSupabase();
    const { data: row } = await supabase.rpc("get_order_public", { _id: data.id });
    const order = Array.isArray(row) ? row[0] : row;
    if (!order) return null;
    const { data: product } = await supabase
      .from("products")
      .select("title, image_urls, price_naira")
      .eq("id", order.product_id)
      .maybeSingle();
    const signed = await signImagePaths(supabase, "product-images", product?.image_urls);
    return { ...order, product: product ? { ...product, signed_image_urls: signed } : null };
  });
