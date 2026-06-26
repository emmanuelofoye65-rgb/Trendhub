import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { A as ArrowRight, S as Flame, t as Zap } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./product-card-DK1HKsS8.mjs";
import { i as trendingOpts, n as plugOpts, r as settingsOpts, t as hotOpts } from "./routes-ClTSBFcd.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BcwyOkyy.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { data: trending } = useSuspenseQuery(trendingOpts);
	const { data: plug } = useSuspenseQuery(plugOpts);
	const { data: hot } = useSuspenseQuery(hotOpts);
	const { data: settings } = useSuspenseQuery(settingsOpts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-30",
				style: { background: "radial-gradient(60% 60% at 20% 10%, oklch(0.86 0.27 142 / .35), transparent 60%), radial-gradient(50% 50% at 80% 80%, oklch(0.74 0.18 50 / .35), transparent 60%)" }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-4 py-14 sm:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3 w-3" }), " Live deals · Pay on transfer"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-neon",
								children: "TrendRush NG"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							settings?.hero_slogan ?? "Naija's hottest deals, delivered fast."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-xl text-base text-muted-foreground sm:text-lg",
						children: [
							"Shop ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "PlugMarket"
							}),
							" for gadgets and",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold text-foreground",
								children: "HotPick NG"
							}),
							" for viral picks. Secure bank transfer. WhatsApp support that actually replies."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/category/$slug",
							params: { slug: "plugmarket" },
							className: "inline-flex items-center gap-2 rounded-md bg-neon px-5 py-3 font-bold text-neon-foreground shadow-neon",
							children: ["Shop PlugMarket ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/category/$slug",
							params: { slug: "hotpick" },
							className: "inline-flex items-center gap-2 rounded-md border border-orange bg-orange/10 px-5 py-3 font-bold text-orange",
							children: ["Browse HotPick NG ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "h-4 w-4" })]
						})]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Trending now",
			subtitle: "Everyone's buying these",
			accent: "neon",
			products: trending
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "PlugMarket",
			subtitle: "Gadgets, tech & accessories",
			accent: "neon",
			href: "/category/$slug",
			slug: "plugmarket",
			products: plug
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "HotPick NG",
			subtitle: "Viral deals & trending picks",
			accent: "orange",
			href: "/category/$slug",
			slug: "hotpick",
			products: hot
		})
	] });
}
function Section({ title, subtitle, products, href, slug, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-5 flex items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: `font-display text-2xl font-black sm:text-3xl ${accent === "neon" ? "text-neon" : "text-orange"}`,
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: subtitle
			})] }), href && slug && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: href,
				params: { slug },
				className: "flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground",
				children: ["See all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
			})]
		}), products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
			children: "No products yet. Add some in the admin panel."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
			children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
		})]
	});
}
//#endregion
export { Home as component };
