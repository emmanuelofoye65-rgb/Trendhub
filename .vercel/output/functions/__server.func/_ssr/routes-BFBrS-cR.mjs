import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { i as listProducts, n as getSettings } from "./shop.functions-Cp_jeWFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BFBrS-cR.js
var trendingOpts = queryOptions({
	queryKey: ["products", "trending"],
	queryFn: () => listProducts({ data: {
		trending: true,
		limit: 8
	} })
});
var plugOpts = queryOptions({
	queryKey: ["products", "plugmarket"],
	queryFn: () => listProducts({ data: {
		categorySlug: "plugmarket",
		limit: 8
	} })
});
var hotOpts = queryOptions({
	queryKey: ["products", "hotpick"],
	queryFn: () => listProducts({ data: {
		categorySlug: "hotpick",
		limit: 8
	} })
});
var settingsOpts = queryOptions({
	queryKey: ["settings"],
	queryFn: () => getSettings()
});
//#endregion
export { trendingOpts as i, plugOpts as n, settingsOpts as r, hotOpts as t };
