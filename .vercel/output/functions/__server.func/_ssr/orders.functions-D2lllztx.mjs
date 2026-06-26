import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BMtCaC7n.mjs";
import { a as numberType, n as anyType, o as objectType, s as stringType } from "../_libs/@mendable/firecrawl-js+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { n as signImagePaths, t as getPublicSupabase } from "./supabase-server-DlqlKEbX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-D2lllztx.js
var createOrder_createServerFn_handler = createServerRpc({
	id: "7f92d135aa3763ddd5bf6d4d9f84832b6b591cbaa35dcc4048b4b1beed8e7bf3",
	name: "createOrder",
	filename: "src/lib/orders.functions.ts"
}, (opts) => createOrder.__executeServer(opts));
var createOrder = createServerFn({ method: "POST" }).validator((input) => objectType({
	productId: stringType().uuid(),
	quantity: numberType().int().min(1).max(50).default(1),
	guestName: stringType().trim().min(1).max(120).optional(),
	guestPhone: stringType().trim().min(7).max(30).optional(),
	guestEmail: stringType().trim().email().max(255).optional(),
	userId: stringType().uuid().optional(),
	variants: anyType().optional()
}).parse(input)).handler(createOrder_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-BfAFJbEd.mjs");
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
		status: "pending",
		variants: data.variants ?? null
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
var setOrderSenderName = createServerFn({ method: "POST" }).validator((input) => objectType({
	id: stringType().uuid(),
	senderName: stringType().max(120).transform((s) => normalizeSenderName(s)).refine((s) => s.length >= 3, "Sender name is too short").refine((s) => s.split(" ").length >= 2, "Enter your full name (first and last)")
}).parse(input)).handler(setOrderSenderName_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-BfAFJbEd.mjs");
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
var initializePaystack_createServerFn_handler = createServerRpc({
	id: "2b5d05650cc4aef64941384bbfa8724834516326054b5babfaae857a8c3cb9c5",
	name: "initializePaystack",
	filename: "src/lib/orders.functions.ts"
}, (opts) => initializePaystack.__executeServer(opts));
var initializePaystack = createServerFn({ method: "POST" }).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(initializePaystack_createServerFn_handler, async ({ data }) => {
	const { supabaseAdmin } = await import("./client.server-BfAFJbEd.mjs");
	const { data: row } = await supabaseAdmin.rpc("get_order_public", { _id: data.id });
	const order = Array.isArray(row) ? row[0] : row;
	if (!order) throw new Error("Order not found");
	const secretKey = process.env.PAYSTACK_SECRET_KEY;
	if (!secretKey) throw new Error("PAYSTACK_SECRET_KEY environment variable is missing");
	let email = "guest@trendrush.ng";
	const { data: orderDetails } = await supabaseAdmin.from("orders").select("guest_email, user_id").eq("id", data.id).single();
	if (orderDetails) {
		if (orderDetails.guest_email) email = orderDetails.guest_email;
		else if (orderDetails.user_id) {
			const { data: user } = await supabaseAdmin.auth.admin.getUserById(orderDetails.user_id);
			if (user?.user?.email) email = user.user.email;
		}
	}
	const host = process.env.VITE_APP_URL || process.env.URL || "https://ais-dev-vijj3wd7php3qnvhwwzrw5-119678600897.europe-west1.run.app";
	const response = await fetch("https://api.paystack.co/transaction/initialize", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${secretKey}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email,
			amount: order.unique_amount * 100,
			reference: `${data.id}_${Date.now()}`,
			callback_url: `${host}/checkout/${data.id}`,
			metadata: { order_id: data.id }
		})
	});
	const result = await response.json();
	if (!response.ok || !result.status) {
		console.error("[Paystack error]", result);
		throw new Error(result.message || "Failed to initialize Paystack checkout");
	}
	return { authorizationUrl: result.data.authorization_url };
});
var getOrderById_createServerFn_handler = createServerRpc({
	id: "a5ee9bad6d6dfcd1a5c1f0a85084988327f42fcacbc4a074a617434a490158db",
	name: "getOrderById",
	filename: "src/lib/orders.functions.ts"
}, (opts) => getOrderById.__executeServer(opts));
var getOrderById = createServerFn({ method: "GET" }).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(getOrderById_createServerFn_handler, async ({ data }) => {
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
export { createOrder_createServerFn_handler, getMyOrders_createServerFn_handler, getOrderById_createServerFn_handler, initializePaystack_createServerFn_handler, setOrderSenderName_createServerFn_handler };
