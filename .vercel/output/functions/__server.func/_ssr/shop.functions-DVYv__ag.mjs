import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as createSsrRpc } from "./createSsrRpc-Ditdwy2O.mjs";
import { a as numberType, i as booleanType, o as objectType, s as stringType } from "../_libs/@mendable/firecrawl-js+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop.functions-DVYv__ag.js
var getSettings = createServerFn({ method: "GET" }).handler(createSsrRpc("7eeab6154dd873e0068a324dd402e3adfe0245786e6f1a7f54c59eb1bc993608"));
var listCategories = createServerFn({ method: "GET" }).handler(createSsrRpc("0a2515e28af32e31bc0e95590e5f0022a1faba2a549af20529986f1f86dda243"));
var listProducts = createServerFn({ method: "GET" }).validator((input = {}) => objectType({
	trending: booleanType().optional(),
	categorySlug: stringType().optional(),
	limit: numberType().int().positive().max(100).optional()
}).parse(input || {})).handler(createSsrRpc("33d4a1191b9abd2d037a2654c3a135c5c598f43ed020d73a1fcc3faa561a9238"));
var getProduct = createServerFn({ method: "GET" }).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("efa9437fe30eb9ca917623d47c09585b7a1971a47b7699f7c2e726a597367236"));
//#endregion
export { listProducts as i, getSettings as n, listCategories as r, getProduct as t };
