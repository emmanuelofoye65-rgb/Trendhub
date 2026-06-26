import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { S as Flame } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-DK1HKsS8.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const img = product.signed_image_urls?.[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/product/$id",
		params: { id: product.id },
		className: "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-neon/60 hover:shadow-neon",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square overflow-hidden bg-surface",
			children: [img ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img,
				alt: product.title,
				className: "h-full w-full object-cover transition duration-300 group-hover:scale-105",
				loading: "lazy"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-full w-full place-items-center text-muted-foreground",
				children: "No image"
			}), product.is_trending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-2 top-2 flex items-center gap-1 rounded-md bg-orange px-2 py-0.5 text-[10px] font-bold uppercase text-orange-foreground shadow-orange",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-3 w-3" }), " Trending"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-1 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "line-clamp-2 text-sm font-semibold leading-snug text-foreground",
				children: product.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-auto font-display text-lg font-black text-neon",
				children: formatNaira(product.price_naira)
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
