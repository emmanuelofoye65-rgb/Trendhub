import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as queryOptions, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as listProducts, r as listCategories } from "./shop.functions-Cp_jeWFp.mjs";
import { t as Route } from "./category._slug-BD_ugNQR.mjs";
import { t as ProductCard } from "./product-card-DccCE-Mp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-BBGc4kCa.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/category.$slug.tsx?tsr-split=component";
function CategoryPage() {
	const { slug } = Route.useParams();
	const { data: products } = useSuspenseQuery(queryOptions({
		queryKey: [
			"products",
			"cat",
			slug
		],
		queryFn: () => listProducts({ data: {
			categorySlug: slug,
			limit: 60
		} })
	}));
	const { data: cats } = useSuspenseQuery(queryOptions({
		queryKey: ["categories"],
		queryFn: () => listCategories()
	}));
	const cat = cats.find((c) => c.slug === slug);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "text-xs text-muted-foreground hover:text-foreground",
				children: "← Back home"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 29,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-2 font-display text-3xl font-black sm:text-4xl",
				children: cat?.name ?? slug
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: cat?.tagline
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
				children: products.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "col-span-full rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
					children: "No products in this category yet."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 34
				}, this) : products.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product: p }, p.id, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 45
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 10
	}, this);
}
//#endregion
export { CategoryPage as component };
