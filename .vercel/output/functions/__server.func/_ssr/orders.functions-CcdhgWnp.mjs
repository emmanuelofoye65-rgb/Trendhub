import { l as createServerFn } from "./esm-vQsjfqSA.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CFJP7JkI.mjs";
import { t as createSsrRpc } from "./createSsrRpc-D2kMAD8G.mjs";
import { a as stringType, i as objectType, r as numberType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-CcdhgWnp.js
var createOrder = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	productId: stringType().uuid(),
	quantity: numberType().int().min(1).max(50).default(1),
	guestName: stringType().trim().min(1).max(120).optional(),
	guestPhone: stringType().trim().min(7).max(30).optional(),
	guestEmail: stringType().trim().email().max(255).optional(),
	userId: stringType().uuid().optional()
}).parse(input)).handler(createSsrRpc("7f92d135aa3763ddd5bf6d4d9f84832b6b591cbaa35dcc4048b4b1beed8e7bf3"));
var getMyOrders = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("6c8a93162baf5f19a0104a3fbb4ef5b118f9a0e1e73268385aa11ec42041ca24"));
function normalizeSenderName(raw) {
	return raw.normalize("NFKC").replace(/[^\p{L}\s'.\-]/gu, "").replace(/\s+/g, " ").trim();
}
var setOrderSenderName = createServerFn({ method: "POST" }).inputValidator((input) => objectType({
	id: stringType().uuid(),
	senderName: stringType().max(120).transform((s) => normalizeSenderName(s)).refine((s) => s.length >= 3, "Sender name is too short").refine((s) => s.split(" ").length >= 2, "Enter your full name (first and last)")
}).parse(input)).handler(createSsrRpc("d419971da04b6a06a0f45a6ef79c7dff1cb7e57e543b4bfb9dbc51ac4f036906"));
var getOrderById = createServerFn({ method: "GET" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("a5ee9bad6d6dfcd1a5c1f0a85084988327f42fcacbc4a074a617434a490158db"));
//#endregion
export { setOrderSenderName as a, normalizeSenderName as i, getMyOrders as n, getOrderById as r, createOrder as t };
