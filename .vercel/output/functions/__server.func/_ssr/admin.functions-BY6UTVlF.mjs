import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BMtCaC7n.mjs";
import { a as numberType, i as booleanType, n as anyType, o as objectType, r as arrayType, s as stringType } from "../_libs/@mendable/firecrawl-js+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { n as signImagePaths, t as getPublicSupabase } from "./supabase-server-DlqlKEbX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin.functions-BY6UTVlF.js
async function assertAdmin(context) {
	const { data, error } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (error || !data) throw new Error("Forbidden");
}
var isAdmin_createServerFn_handler = createServerRpc({
	id: "f56374ba3aaffab4ed8ab7e2a3691b799933caea50cc55628ceb0dfe711b588b",
	name: "isAdmin",
	filename: "src/lib/admin.functions.ts"
}, (opts) => isAdmin.__executeServer(opts));
var isAdmin = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(isAdmin_createServerFn_handler, async ({ context }) => {
	const { data } = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	return Boolean(data);
});
var adminDashboardStats_createServerFn_handler = createServerRpc({
	id: "f1ac34ffddf4137b17dc66c23973d8895be9aa6aad44c9e0970036aa00840151",
	name: "adminDashboardStats",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminDashboardStats.__executeServer(opts));
var adminDashboardStats = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminDashboardStats_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context);
	const sb = context.supabase;
	const startToday = /* @__PURE__ */ new Date();
	startToday.setHours(0, 0, 0, 0);
	const since30 = (/* @__PURE__ */ new Date(Date.now() - 720 * 60 * 60 * 1e3)).toISOString();
	const [productsTotal, productsActive, productsLowStock, ordersPending, ordersPaidAll, ordersPaidToday, ordersPaid30d, recentOrders] = await Promise.all([
		sb.from("products").select("id", {
			count: "exact",
			head: true
		}),
		sb.from("products").select("id", {
			count: "exact",
			head: true
		}).eq("is_active", true),
		sb.from("products").select("id, title, stock").lte("stock", 3).order("stock", { ascending: true }).limit(5),
		sb.from("orders").select("id", {
			count: "exact",
			head: true
		}).eq("status", "pending"),
		sb.from("orders").select("base_amount").eq("status", "paid"),
		sb.from("orders").select("base_amount").eq("status", "paid").gte("paid_at", startToday.toISOString()),
		sb.from("orders").select("base_amount, paid_at").eq("status", "paid").gte("paid_at", since30),
		sb.from("orders").select("id, status, base_amount, sender_name, created_at, products(title)").order("created_at", { ascending: false }).limit(8)
	]);
	const sum = (rows) => (rows ?? []).reduce((a, r) => a + (r.base_amount ?? 0), 0);
	return {
		products: {
			total: productsTotal.count ?? 0,
			active: productsActive.count ?? 0,
			lowStock: productsLowStock.data ?? []
		},
		orders: {
			pending: ordersPending.count ?? 0,
			paidTotal: (ordersPaidAll.data ?? []).length,
			revenueAllTime: sum(ordersPaidAll.data),
			revenueToday: sum(ordersPaidToday.data),
			revenue30d: sum(ordersPaid30d.data),
			paid30dSeries: ordersPaid30d.data ?? [],
			recent: recentOrders.data ?? []
		}
	};
});
var adminListProducts_createServerFn_handler = createServerRpc({
	id: "9932f7d91182148199cbc8b49e99aa83ab2855e0f2166e0d0e38e6c091b587df",
	name: "adminListProducts",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListProducts.__executeServer(opts));
var adminListProducts = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListProducts_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context);
	const { data } = await context.supabase.from("products").select("*, categories(slug, name)").order("created_at", { ascending: false });
	const pub = getPublicSupabase();
	return Promise.all((data ?? []).map(async (p) => ({
		...p,
		signed_image_urls: await signImagePaths(pub, "product-images", p.image_urls)
	})));
});
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
	stock: numberType().int().min(0).default(0),
	variants: anyType().optional()
});
var upsertProduct_createServerFn_handler = createServerRpc({
	id: "87057b699c92d5e9cc4f021e767a44009606525481c8a27886c5fc0375dc6625",
	name: "upsertProduct",
	filename: "src/lib/admin.functions.ts"
}, (opts) => upsertProduct.__executeServer(opts));
var upsertProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => productInput.parse(input)).handler(upsertProduct_createServerFn_handler, async ({ context, data }) => {
	await assertAdmin(context);
	const { variants, ...dbData } = data;
	if (data.id) {
		const { error } = await context.supabase.from("products").update(dbData).eq("id", data.id);
		if (error) throw error;
		return { id: data.id };
	}
	const { data: row, error } = await context.supabase.from("products").insert(dbData).select("id").single();
	if (error) throw error;
	return { id: row.id };
});
var deleteProduct_createServerFn_handler = createServerRpc({
	id: "d58e9647e4364d7098cb0d840b98a827719a64c5b316ad80080e28b97fb3f1cb",
	name: "deleteProduct",
	filename: "src/lib/admin.functions.ts"
}, (opts) => deleteProduct.__executeServer(opts));
var deleteProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(deleteProduct_createServerFn_handler, async ({ context, data }) => {
	await assertAdmin(context);
	const { error } = await context.supabase.from("products").delete().eq("id", data.id);
	if (error) throw error;
	return { ok: true };
});
var adminListOrders_createServerFn_handler = createServerRpc({
	id: "573be2cdf3c95bfa88f6bb3d2080ff0b0c620db545ac53f2f5a039a50348d737",
	name: "adminListOrders",
	filename: "src/lib/admin.functions.ts"
}, (opts) => adminListOrders.__executeServer(opts));
var adminListOrders = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(adminListOrders_createServerFn_handler, async ({ context }) => {
	await assertAdmin(context);
	const { data } = await context.supabase.from("orders").select("*, products(title)").order("created_at", { ascending: false }).limit(500);
	return data ?? [];
});
var markOrderPaid_createServerFn_handler = createServerRpc({
	id: "8ad2b16f17ba58b435e9fe5f2a2446ad1bcf5abece494589cb22056cd07c00bd",
	name: "markOrderPaid",
	filename: "src/lib/admin.functions.ts"
}, (opts) => markOrderPaid.__executeServer(opts));
var markOrderPaid = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(markOrderPaid_createServerFn_handler, async ({ context, data }) => {
	await assertAdmin(context);
	const { error } = await context.supabase.from("orders").update({
		status: "paid",
		paid_at: (/* @__PURE__ */ new Date()).toISOString()
	}).eq("id", data.id);
	if (error) throw error;
	return { ok: true };
});
var updateSettings_createServerFn_handler = createServerRpc({
	id: "329d3bb7df31c5a20d7c4c9c44973943844ef4e3e8fbf02e27293c4ba36c91f1",
	name: "updateSettings",
	filename: "src/lib/admin.functions.ts"
}, (opts) => updateSettings.__executeServer(opts));
var updateSettings = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	bank_name: stringType().trim().max(120).nullable().optional(),
	account_number: stringType().trim().max(40).nullable().optional(),
	account_name: stringType().trim().max(120).nullable().optional(),
	whatsapp_link: stringType().trim().url().max(500).nullable().optional(),
	logo_url: stringType().trim().max(500).nullable().optional(),
	banner_url: stringType().trim().max(500).nullable().optional(),
	hero_slogan: stringType().trim().max(200).nullable().optional()
}).parse(input)).handler(updateSettings_createServerFn_handler, async ({ context, data }) => {
	await assertAdmin(context);
	const { error } = await context.supabase.from("site_settings").update(data).eq("id", 1);
	if (error) throw error;
	return { ok: true };
});
//#endregion
export { adminDashboardStats_createServerFn_handler, adminListOrders_createServerFn_handler, adminListProducts_createServerFn_handler, deleteProduct_createServerFn_handler, isAdmin_createServerFn_handler, markOrderPaid_createServerFn_handler, updateSettings_createServerFn_handler, upsertProduct_createServerFn_handler };
