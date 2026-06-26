import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BMtCaC7n.mjs";
import { t as createSsrRpc } from "./createSsrRpc-Ditdwy2O.mjs";
import { a as numberType, n as anyType, o as objectType, s as stringType } from "../_libs/@mendable/firecrawl-js+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-Ber0T4lB.js
var createOrder = createServerFn({ method: "POST" }).validator((input) => objectType({
	productId: stringType().uuid(),
	quantity: numberType().int().min(1).max(50).default(1),
	guestName: stringType().trim().min(1).max(120).optional(),
	guestPhone: stringType().trim().min(7).max(30).optional(),
	guestEmail: stringType().trim().email().max(255).optional(),
	userId: stringType().uuid().optional(),
	variants: anyType().optional()
}).parse(input)).handler(createSsrRpc("7f92d135aa3763ddd5bf6d4d9f84832b6b591cbaa35dcc4048b4b1beed8e7bf3"));
var getMyOrders = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("6c8a93162baf5f19a0104a3fbb4ef5b118f9a0e1e73268385aa11ec42041ca24"));
function normalizeSenderName(raw) {
	return raw.normalize("NFKC").replace(/[^\p{L}\s'.\-]/gu, "").replace(/\s+/g, " ").trim();
}
var setOrderSenderName = createServerFn({ method: "POST" }).validator((input) => objectType({
	id: stringType().uuid(),
	senderName: stringType().max(120).transform((s) => normalizeSenderName(s)).refine((s) => s.length >= 3, "Sender name is too short").refine((s) => s.split(" ").length >= 2, "Enter your full name (first and last)")
}).parse(input)).handler(createSsrRpc("d419971da04b6a06a0f45a6ef79c7dff1cb7e57e543b4bfb9dbc51ac4f036906"));
var initializePaystack = createServerFn({ method: "POST" }).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("2b5d05650cc4aef64941384bbfa8724834516326054b5babfaae857a8c3cb9c5"));
var getOrderById = createServerFn({ method: "GET" }).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("a5ee9bad6d6dfcd1a5c1f0a85084988327f42fcacbc4a074a617434a490158db"));
//#endregion
export { normalizeSenderName as a, initializePaystack as i, getMyOrders as n, setOrderSenderName as o, getOrderById as r, createOrder as t };
