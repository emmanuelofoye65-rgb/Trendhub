import { l as createServerFn } from "./esm-vQsjfqSA.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CFJP7JkI.mjs";
import { t as createSsrRpc } from "./createSsrRpc-D2kMAD8G.mjs";
import { a as stringType, i as objectType, n as booleanType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-SBQi0VJ_.js
var isAdmin = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("f56374ba3aaffab4ed8ab7e2a3691b799933caea50cc55628ceb0dfe711b588b"));
var adminDashboardStats = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("f1ac34ffddf4137b17dc66c23973d8895be9aa6aad44c9e0970036aa00840151"));
var adminListProducts = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("9932f7d91182148199cbc8b49e99aa83ab2855e0f2166e0d0e38e6c091b587df"));
var productInput = objectType({
	id: stringType().uuid().optional(),
	title: stringType().trim().min(1).max(200),
	slug: stringType().trim().min(1).max(200).regex(/^[a-z0-9-]+$/, "lowercase, digits, hyphens only"),
	description: stringType().trim().max(5e3).optional().nullable(),
	price_naira: numberType().int().min(0).max(1e8),
	category_id: stringType().uuid().nullable().optional(),
	image_urls: arrayType(stringType()).default([]),
	is_trending: booleanType().default(false),
	is_active: booleanType().default(true),
	stock: numberType().int().min(0).default(0)
});
var upsertProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => productInput.parse(input)).handler(createSsrRpc("87057b699c92d5e9cc4f021e767a44009606525481c8a27886c5fc0375dc6625"));
var deleteProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("d58e9647e4364d7098cb0d840b98a827719a64c5b316ad80080e28b97fb3f1cb"));
var adminListOrders = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("573be2cdf3c95bfa88f6bb3d2080ff0b0c620db545ac53f2f5a039a50348d737"));
var markOrderPaid = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("8ad2b16f17ba58b435e9fe5f2a2446ad1bcf5abece494589cb22056cd07c00bd"));
var updateSettings = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	bank_name: stringType().trim().max(120).nullable().optional(),
	account_number: stringType().trim().max(40).nullable().optional(),
	account_name: stringType().trim().max(120).nullable().optional(),
	whatsapp_link: stringType().trim().url().max(500).nullable().optional(),
	logo_url: stringType().trim().max(500).nullable().optional(),
	banner_url: stringType().trim().max(500).nullable().optional(),
	hero_slogan: stringType().trim().max(200).nullable().optional()
}).parse(input)).handler(createSsrRpc("329d3bb7df31c5a20d7c4c9c44973943844ef4e3e8fbf02e27293c4ba36c91f1"));
//#endregion
export { isAdmin as a, upsertProduct as c, deleteProduct as i, adminListOrders as n, markOrderPaid as o, adminListProducts as r, updateSettings as s, adminDashboardStats as t };
