import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as adminDashboardStats } from "./admin.functions-SBQi0VJ_.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { A as ArrowRight, E as CircleCheck, T as Clock, _ as Package, a as TriangleAlert, l as ShoppingBag, o as TrendingUp } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CByviM42.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin/index.tsx?tsr-split=component";
function AdminDashboard() {
	const fn = useServerFn(adminDashboardStats);
	const { data, isLoading } = useQuery({
		queryKey: ["admin", "dashboard"],
		queryFn: () => fn()
	});
	if (isLoading || !data) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "py-16 text-center text-muted-foreground",
		children: "Loading dashboard…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 17,
		columnNumber: 12
	}, this);
	const { products, orders } = data;
	const buckets = new Array(30).fill(0);
	const now = Date.now();
	for (const r of orders.paid30dSeries) {
		const day = Math.floor((now - new Date(r.paid_at).getTime()) / 864e5);
		if (day >= 0 && day < 30) buckets[29 - day] += r.base_amount ?? 0;
	}
	const max = Math.max(1, ...buckets);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						label: "Revenue today",
						value: formatNaira(orders.revenueToday),
						icon: TrendingUp,
						tone: "neon"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						label: "Pending orders",
						value: orders.pending.toString(),
						icon: Clock,
						tone: "orange",
						to: "/admin/orders"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						label: "Paid orders",
						value: orders.paidTotal.toString(),
						icon: CircleCheck,
						tone: "neon"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 36,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatCard, {
						label: "Live products",
						value: `${products.active} / ${products.total}`,
						icon: Package,
						tone: "default",
						to: "/admin/products"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-xl border border-border bg-card p-4 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Revenue · last 30 days"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "font-display text-2xl font-black text-neon",
							children: formatNaira(orders.revenue30d)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "text-right text-xs text-muted-foreground",
							children: ["All-time", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-sm font-semibold text-foreground",
								children: formatNaira(orders.revenueAllTime)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex h-32 items-end gap-1",
						children: buckets.map((v, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex-1 rounded-t bg-neon/70 transition-all hover:bg-neon",
							style: {
								height: `${v / max * 100}%`,
								minHeight: v > 0 ? "4px" : "2px"
							},
							title: formatNaira(v)
						}, i, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 36
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "h-4 w-4 text-orange" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 70,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "font-display text-sm font-bold uppercase tracking-wide",
								children: "Low stock"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 11
						}, this),
						products.lowStock.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "py-6 text-center text-sm text-muted-foreground",
							children: "All stock levels healthy."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 73,
							columnNumber: 45
						}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
							className: "space-y-2",
							children: products.lowStock.map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "truncate",
									children: p.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: `rounded px-2 py-0.5 text-xs font-bold ${p.stock === 0 ? "bg-destructive/20 text-destructive" : "bg-orange/20 text-orange"}`,
									children: [p.stock, " left"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 78,
									columnNumber: 19
								}, this)]
							}, p.id, true, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 50
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 22
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/admin/products",
							className: "mt-3 flex items-center justify-end gap-1 text-xs font-semibold text-neon",
							children: ["Manage products ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-3 w-3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 29
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "rounded-xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between border-b border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "h-4 w-4 text-neon" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "font-display text-sm font-bold uppercase tracking-wide",
							children: "Recent orders"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 94,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/admin/orders",
						className: "flex items-center gap-1 text-xs font-semibold text-neon",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-3 w-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 99,
							columnNumber: 22
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 91,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
							className: "bg-surface text-xs uppercase text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-3 py-2 text-left",
									children: "Product"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 106,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-3 py-2 text-left",
									children: "Sender"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 107,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-3 py-2 text-left",
									children: "Amount"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 108,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-3 py-2 text-left",
									children: "Status"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 109,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
									className: "px-3 py-2 text-left",
									children: "Date"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 110,
									columnNumber: 17
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 104,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [orders.recent.length === 0 && /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
							colSpan: 5,
							className: "px-3 py-10 text-center text-muted-foreground",
							children: "No orders yet."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 19
						}, this) }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 114,
							columnNumber: 46
						}, this), orders.recent.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-3 py-2 font-semibold",
									children: o.products?.title ?? "—"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 120,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-3 py-2 text-muted-foreground",
									children: o.sender_name ?? "—"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 121,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-3 py-2",
									children: formatNaira(o.base_amount)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: `rounded px-2 py-0.5 text-xs font-bold ${o.status === "paid" ? "bg-neon/20 text-neon" : o.status === "pending" ? "bg-orange/20 text-orange" : "bg-muted text-muted-foreground"}`,
										children: o.status
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 124,
										columnNumber: 21
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 123,
									columnNumber: 19
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
									className: "px-3 py-2 text-xs text-muted-foreground",
									children: new Date(o.created_at).toLocaleDateString()
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 128,
									columnNumber: 19
								}, this)
							]
						}, o.id, true, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 46
						}, this))] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 113,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 32,
		columnNumber: 10
	}, this);
}
function StatCard({ label, value, icon: Icon, tone, to }) {
	const toneCls = tone === "neon" ? "text-neon" : tone === "orange" ? "text-orange" : "text-foreground";
	const inner = /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-xl border border-border bg-card p-4 transition-colors hover:border-neon/50",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-xs uppercase tracking-wide text-muted-foreground",
				children: label
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: `h-4 w-4 ${toneCls}` }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 155,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 153,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: `mt-2 font-display text-2xl font-black ${toneCls}`,
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 157,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 152,
		columnNumber: 17
	}, this);
	return to ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to,
		children: inner
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 159,
		columnNumber: 15
	}, this) : inner;
}
//#endregion
export { AdminDashboard as component };
