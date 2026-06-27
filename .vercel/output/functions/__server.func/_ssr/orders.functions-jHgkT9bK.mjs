import { l as createServerFn } from "./esm-vQsjfqSA.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CFJP7JkI.mjs";
import { a as stringType, i as objectType, r as numberType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-DNv3cMx8.mjs";
import { n as signImagePaths, t as getPublicSupabase } from "./supabase-server-CxU3Uvyy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-jHgkT9bK.js
var createOrder_createServerFn_handler = createServerRpc({
	id: "7f92d135aa3763ddd5bf6d4d9f84832b6b591cbaa35dcc4048b4b1beed8e7bf3",
	name: "createOrder",
	filename: "src/lib/orders.functions.ts"
}, (opts) => createOrder.__executeServer(opts));
var createOrder = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	productId: stringType().uuid(),
	quantity: numberType().int().min(1).max(50).default(1),
	guestName: stringType().trim().min(1).max(120).optional(),
	guestPhone: stringType().trim().min(7).max(30).optional(),
	guestEmail: stringType().trim().email().max(255).optional(),
	userId: stringType().uuid().optional()
}).parse(input)).handler(createOrder_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-BysPdmPN.mjs");
	const { data: product, error: pErr } = await supabaseAdmin.from("products").select("id, price_naira, is_active, stock").eq("id", data.productId).maybeSingle();
	if (pErr || !product || !product.is_active) throw new Error("Product not available");
	const base = product.price_naira * data.quantity;
	const unique = base + Math.floor(Math.random() * 99) + 1;
	const { data: order, error } = await supabaseAdmin.from("orders").insert({
		user_id: data.userId ?? null,
		product_id: data.productId,
		quantity: data.quantity,
		base_amount: base,
		unique_amount: unique,
		guest_name: data.guestName ?? null,
		guest_phone: data.guestPhone ?? null,
		guest_email: data.guestEmail ?? null,
		status: "pending"
	}).select("id").single();
	if (error) throw error;
	return { id: order.id };
});
var getMyOrders_createServerFn_handler = createServerRpc({
	id: "6c8a93162baf5f19a0104a3fbb4ef5b118f9a0e1e73268385aa11ec42041ca24",
	name: "getMyOrders",
	filename: "src/lib/orders.functions.ts"
}, (opts) => getMyOrders.__executeServer(opts));
var getMyOrders = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(getMyOrders_createServerFn_handler, async ({ context }) => {
	const { data } = await context.supabase.from("orders").select("*, products(title, image_urls)").eq("user_id", context.userId).order("created_at", { ascending: false });
	const pub = getPublicSupabase();
	return Promise.all((data ?? []).map(async (o) => ({
		...o,
		product_image: (await signImagePaths(pub, "product-images", o.products?.image_urls))[0] ?? ""
	})));
});
function normalizeSenderName(raw) {
	return raw.normalize("NFKC").replace(/[^\p{L}\s'.\-]/gu, "").replace(/\s+/g, " ").trim();
}
var setOrderSenderName_createServerFn_handler = createServerRpc({
	id: "d419971da04b6a06a0f45a6ef79c7dff1cb7e57e543b4bfb9dbc51ac4f036906",
	name: "setOrderSenderName",
	filename: "src/lib/orders.functions.ts"
}, (opts) => setOrderSenderName.__executeServer(opts));
var setOrderSenderName = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	id: stringType().uuid(),
	senderName: stringType().max(120).transform((s) => normalizeSenderName(s)).refine((s) => s.length >= 3, "Sender name is too short").refine((s) => s.split(" ").length >= 2, "Enter your full name (first and last)")
}).parse(input)).handler(setOrderSenderName_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-BysPdmPN.mjs");
	const { error } = await supabaseAdmin.rpc("set_order_sender_name", {
		_id: data.id,
		_sender_name: data.senderName
	});
	if (error) throw error;
	return {
		ok: true,
		senderName: data.senderName
	};
});
var getOrderById_createServerFn_handler = createServerRpc({
	id: "a5ee9bad6d6dfcd1a5c1f0a85084988327f42fcacbc4a074a617434a490158db",
	name: "getOrderById",
	filename: "src/lib/orders.functions.ts"
}, (opts) => getOrderById.__executeServer(opts));
var getOrderById = createServerFn({ method: "GET" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(getOrderById_createServerFn_handler, async ({ data }) => {
	const supabase = getPublicSupabase();
	const { data: row } = await supabase.rpc("get_order_public", { _id: data.id });
	const order = Array.isArray(row) ? row[0] : row;
	if (!order) return null;
	const { data: product } = await supabase.from("products").select("title, image_urls, price_naira").eq("id", order.product_id).maybeSingle();
	const signed = await signImagePaths(supabase, "product-images", product?.image_urls);
	return {
		...order,
		product: product ? {
			...product,
			signed_image_urls: signed
		} : null
	};
});
//#endregion
export { createOrder_createServerFn_handler, getMyOrders_createServerFn_handler, getOrderById_createServerFn_handler, setOrderSenderName_createServerFn_handler };
