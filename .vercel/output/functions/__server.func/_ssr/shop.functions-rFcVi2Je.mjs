import { l as createServerFn } from "./esm-vQsjfqSA.mjs";
import { a as stringType, i as objectType, n as booleanType, r as numberType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-DNv3cMx8.mjs";
import { n as signImagePaths, t as getPublicSupabase } from "./supabase-server-CxU3Uvyy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop.functions-rFcVi2Je.js
var getSettings_createServerFn_handler = createServerRpc({
	id: "7eeab6154dd873e0068a324dd402e3adfe0245786e6f1a7f54c59eb1bc993608",
	name: "getSettings",
	filename: "src/lib/shop.functions.ts"
}, (opts) => getSettings.__executeServer(opts));
var getSettings = createServerFn({ method: "GET" }).handler(getSettings_createServerFn_handler, async () => {
	const supabase = getPublicSupabase();
	const { data } = await supabase.from("site_settings").select("*").eq("id", 1).maybeSingle();
	if (!data) return null;
	const [logo, banner] = await Promise.all([data.logo_url ? signImagePaths(supabase, "branding", [data.logo_url]).then((r) => r[0]) : Promise.resolve(""), data.banner_url ? signImagePaths(supabase, "branding", [data.banner_url]).then((r) => r[0]) : Promise.resolve("")]);
	return {
		...data,
		logo_signed_url: logo,
		banner_signed_url: banner
	};
});
var listCategories_createServerFn_handler = createServerRpc({
	id: "0a2515e28af32e31bc0e95590e5f0022a1faba2a549af20529986f1f86dda243",
	name: "listCategories",
	filename: "src/lib/shop.functions.ts"
}, (opts) => listCategories.__executeServer(opts));
var listCategories = createServerFn({ method: "GET" }).handler(listCategories_createServerFn_handler, async () => {
	const { data } = await getPublicSupabase().from("categories").select("*").order("sort_order");
	return data ?? [];
});
async function attachSignedImages(client, products) {
	return Promise.all(products.map(async (p) => ({
		...p,
		signed_image_urls: await signImagePaths(client, "product-images", p.image_urls)
	})));
}
var listProducts_createServerFn_handler = createServerRpc({
	id: "33d4a1191b9abd2d037a2654c3a135c5c598f43ed020d73a1fcc3faa561a9238",
	name: "listProducts",
	filename: "src/lib/shop.functions.ts"
}, (opts) => listProducts.__executeServer(opts));
var listProducts = createServerFn({ method: "GET" }).inputValidator((input = {}) => objectType({
	trending: booleanType().optional(),
	categorySlug: stringType().optional(),
	limit: numberType().int().positive().max(100).optional()
}).parse(input)).handler(listProducts_createServerFn_handler, async ({ data }) => {
	const supabase = getPublicSupabase();
	let q = supabase.from("products").select("*, categories(slug, name)").eq("is_active", true).order("created_at", { ascending: false });
	if (data.trending) q = q.eq("is_trending", true);
	if (data.limit) q = q.limit(data.limit);
	const { data: rows } = await q;
	let filtered = rows ?? [];
	if (data.categorySlug) filtered = filtered.filter((r) => r.categories?.slug === data.categorySlug);
	return attachSignedImages(supabase, filtered);
});
var getProduct_createServerFn_handler = createServerRpc({
	id: "efa9437fe30eb9ca917623d47c09585b7a1971a47b7699f7c2e726a597367236",
	name: "getProduct",
	filename: "src/lib/shop.functions.ts"
}, (opts) => getProduct.__executeServer(opts));
var getProduct = createServerFn({ method: "GET" }).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(getProduct_createServerFn_handler, async ({ data }) => {
	const supabase = getPublicSupabase();
	const { data: row } = await supabase.from("products").select("*, categories(slug, name)").eq("id", data.id).maybeSingle();
	if (!row) return null;
	const signed_image_urls = await signImagePaths(supabase, "product-images", row.image_urls);
	return {
		...row,
		signed_image_urls
	};
});
//#endregion
export { getProduct_createServerFn_handler, getSettings_createServerFn_handler, listCategories_createServerFn_handler, listProducts_createServerFn_handler };
