import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { A as ArrowRight, S as Flame, t as Zap } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as ProductCard } from "./product-card-DccCE-Mp.mjs";
import { i as trendingOpts, n as plugOpts, r as settingsOpts, t as hotOpts } from "./routes-BFBrS-cR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUbNhF9-.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Home() {
	const { data: trending } = useSuspenseQuery(trendingOpts);
	const { data: plug } = useSuspenseQuery(plugOpts);
	const { data: hot } = useSuspenseQuery(hotOpts);
	const { data: settings } = useSuspenseQuery(settingsOpts);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "relative overflow-hidden border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute inset-0 opacity-30",
				style: { background: "radial-gradient(60% 60% at 20% 10%, oklch(0.86 0.27 142 / .35), transparent 60%), radial-gradient(50% 50% at 80% 80%, oklch(0.74 0.18 50 / .35), transparent 60%)" }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-14 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Zap, { className: "h-3 w-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 13
						}, this), " Live deals · Pay on transfer"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-4 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-gradient-neon",
								children: "TrendRush NG"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 29,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 13
							}, this),
							settings?.hero_slogan ?? "Naija's hottest deals, delivered fast."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: [
							"Shop ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold text-foreground",
								children: "PlugMarket"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 18
							}, this),
							" for gadgets and",
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold text-foreground",
								children: "HotPick NG"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 35,
								columnNumber: 13
							}, this),
							" for viral picks. Secure bank transfer. WhatsApp support that actually replies."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/category/$slug",
							params: { slug: "plugmarket" },
							className: "inline-flex items-center gap-2 rounded-md bg-neon px-5 py-3 font-bold text-neon-foreground shadow-neon",
							children: ["Shop PlugMarket ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 31
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 39,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/category/$slug",
							params: { slug: "hotpick" },
							className: "inline-flex items-center gap-2 rounded-md border border-orange bg-orange/10 px-5 py-3 font-bold text-orange",
							children: ["Browse HotPick NG ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flame, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 33
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 24,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			title: "Trending now",
			subtitle: "Everyone's buying these",
			accent: "neon",
			products: trending
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 53,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			title: "PlugMarket",
			subtitle: "Gadgets, tech & accessories",
			accent: "neon",
			href: "/category/$slug",
			slug: "plugmarket",
			products: plug
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 54,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
			title: "HotPick NG",
			subtitle: "Viral deals & trending picks",
			accent: "orange",
			href: "/category/$slug",
			slug: "hotpick",
			products: hot
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 10
	}, this);
}
function Section({ title, subtitle, products, href, slug, accent }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-5 flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
				className: `font-display text-2xl font-black sm:text-3xl ${accent === "neon" ? "text-neon" : "text-orange"}`,
				children: title
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: subtitle
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 9
			}, this), href && slug && /* @__PURE__ */ (void 0)(Link, {
				to: href,
				params: { slug },
				className: "flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground",
				children: ["See all ", /* @__PURE__ */ (void 0)(ArrowRight, { className: "h-3.5 w-3.5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 21
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 26
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 74,
			columnNumber: 7
		}, this), products.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
			children: "No products yet. Add some in the admin panel."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 87,
			columnNumber: 32
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
			children: products.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product: p }, p.id, false, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 30
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 89,
			columnNumber: 18
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 73,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
