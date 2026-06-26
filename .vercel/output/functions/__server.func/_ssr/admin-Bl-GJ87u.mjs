import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as adminDashboardStats } from "./admin.functions-BjAkHt1i.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { A as ArrowRight, E as CircleCheck, T as Clock, _ as Package, a as TriangleAlert, l as ShoppingBag, o as TrendingUp } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Bl-GJ87u.js
var import_jsx_runtime = require_jsx_runtime();
function AdminDashboard() {
	const fn = useServerFn(adminDashboardStats);
	const { data, isLoading } = useQuery({
		queryKey: ["admin", "dashboard"],
		queryFn: () => fn()
	});
	if (isLoading || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-16 text-center text-muted-foreground",
		children: "Loading dashboard…"
	});
	const { products, orders } = data;
	const buckets = new Array(30).fill(0);
	const now = Date.now();
	for (const r of orders.paid30dSeries) {
		const day = Math.floor((now - new Date(r.paid_at).getTime()) / 864e5);
		if (day >= 0 && day < 30) buckets[29 - day] += r.base_amount ?? 0;
	}
	const max = Math.max(1, ...buckets);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Revenue today",
						value: formatNaira(orders.revenueToday),
						icon: TrendingUp,
						tone: "neon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Pending orders",
						value: orders.pending.toString(),
						icon: Clock,
						tone: "orange",
						to: "/admin/orders"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Paid orders",
						value: orders.paidTotal.toString(),
						icon: CircleCheck,
						tone: "neon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Live products",
						value: `${products.active} / ${products.total}`,
						icon: Package,
						tone: "default",
						to: "/admin/products"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4 lg:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wide text-muted-foreground",
							children: "Revenue · last 30 days"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl font-black text-neon",
							children: formatNaira(orders.revenue30d)
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right text-xs text-muted-foreground",
							children: ["All-time", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold text-foreground",
								children: formatNaira(orders.revenueAllTime)
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-32 items-end gap-1",
						children: buckets.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 rounded-t bg-neon/70 transition-all hover:bg-neon",
							style: {
								height: `${v / max * 100}%`,
								minHeight: v > 0 ? "4px" : "2px"
							},
							title: formatNaira(v)
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-3 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4 text-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-sm font-bold uppercase tracking-wide",
								children: "Low stock"
							})]
						}),
						products.lowStock.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "py-6 text-center text-sm text-muted-foreground",
							children: "All stock levels healthy."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: products.lowStock.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `rounded px-2 py-0.5 text-xs font-bold ${p.stock === 0 ? "bg-destructive/20 text-destructive" : "bg-orange/20 text-orange"}`,
									children: [p.stock, " left"]
								})]
							}, p.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin/products",
							className: "mt-3 flex items-center justify-end gap-1 text-xs font-semibold text-neon",
							children: ["Manage products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-border bg-card",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4 text-neon" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-sm font-bold uppercase tracking-wide",
							children: "Recent orders"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin/orders",
						className: "flex items-center gap-1 text-xs font-semibold text-neon",
						children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-surface text-xs uppercase text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left",
									children: "Product"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left",
									children: "Sender"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left",
									children: "Amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left",
									children: "Status"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 text-left",
									children: "Date"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [orders.recent.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							colSpan: 5,
							className: "px-3 py-10 text-center text-muted-foreground",
							children: "No orders yet."
						}) }), orders.recent.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 font-semibold",
									children: o.products?.title ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-muted-foreground",
									children: o.sender_name ?? "—"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: formatNaira(o.base_amount)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded px-2 py-0.5 text-xs font-bold ${o.status === "paid" ? "bg-neon/20 text-neon" : o.status === "pending" ? "bg-orange/20 text-orange" : "bg-muted text-muted-foreground"}`,
										children: o.status
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2 text-xs text-muted-foreground",
									children: new Date(o.created_at).toLocaleDateString()
								})
							]
						}, o.id))] })]
					})
				})]
			})
		]
	});
}
function StatCard({ label, value, icon: Icon, tone, to }) {
	const toneCls = tone === "neon" ? "text-neon" : tone === "orange" ? "text-orange" : "text-foreground";
	const inner = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card p-4 transition-colors hover:border-neon/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs uppercase tracking-wide text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `h-4 w-4 ${toneCls}` })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-2 font-display text-2xl font-black ${toneCls}`,
			children: value
		})]
	});
	return to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		children: inner
	}) : inner;
}
//#endregion
export { AdminDashboard as component };
