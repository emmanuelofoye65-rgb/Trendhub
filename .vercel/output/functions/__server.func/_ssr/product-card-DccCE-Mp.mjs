import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { S as Flame } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-DccCE-Mp.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/product-card.tsx";
function ProductCard({ product }) {
	const img = product.signed_image_urls?.[0];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/product/$id",
		params: { id: product.id },
		className: "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:border-neon/60 hover:shadow-neon",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative aspect-square overflow-hidden bg-surface",
			children: [img ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: img,
				alt: product.title,
				className: "h-full w-full object-cover transition duration-300 group-hover:scale-105",
				loading: "lazy"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 11
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid h-full w-full place-items-center text-muted-foreground",
				children: "No image"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 32,
				columnNumber: 11
			}, this), product.is_trending && /* @__PURE__ */ (void 0)("div", {
				className: "absolute left-2 top-2 flex items-center gap-1 rounded-md bg-orange px-2 py-0.5 text-[10px] font-bold uppercase text-orange-foreground shadow-orange",
				children: [/* @__PURE__ */ (void 0)(Flame, { className: "h-3 w-3" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 13
				}, this), " Trending"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 23,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-1 flex-col gap-1 p-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "line-clamp-2 text-sm font-semibold leading-snug text-foreground",
				children: product.title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-auto font-display text-lg font-black text-neon",
				children: formatNaira(product.price_naira)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
//#endregion
export { ProductCard as t };
