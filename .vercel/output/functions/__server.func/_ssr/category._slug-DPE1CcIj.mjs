import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as queryOptions, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { i as listProducts, r as listCategories } from "./shop.functions-DVYv__ag.mjs";
import { t as Route } from "./category._slug-DVxlYb8B.mjs";
import { t as ProductCard } from "./product-card-DK1HKsS8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-DPE1CcIj.js
var import_jsx_runtime = require_jsx_runtime();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-xs text-muted-foreground hover:text-foreground",
				children: "← Back home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-black sm:text-4xl",
				children: cat?.name ?? slug
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: cat?.tagline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
				children: products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-full rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
					children: "No products in this category yet."
				}) : products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})
		]
	});
}
//#endregion
export { CategoryPage as component };
