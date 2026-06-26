import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { n as adminListOrders, o as markOrderPaid } from "./admin.functions-BjAkHt1i.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-Bf-HpzDh.js
var import_jsx_runtime = require_jsx_runtime();
function AdminOrders() {
	const qc = useQueryClient();
	const listFn = useServerFn(adminListOrders);
	const markFn = useServerFn(markOrderPaid);
	const { data, isLoading } = useQuery({
		queryKey: ["admin", "orders"],
		queryFn: () => listFn()
	});
	const mark = useMutation({
		mutationFn: (id) => markFn({ data: { id } }),
		onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "orders"] })
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl border border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-surface text-xs uppercase text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 text-left",
						children: "Order"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 text-left",
						children: "Customer"
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
						children: "Created"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-3 py-2" })
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
				isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-3 py-8 text-center text-muted-foreground",
					children: "Loading…"
				}) }),
				(data ?? []).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: o.products?.title ?? "—"
								}),
								o.variants && Object.keys(o.variants).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: Object.entries(o.variants).map(([k, v]) => `${k}: ${v}`).join(", ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-xs text-muted-foreground",
									children: [o.id.slice(0, 8), "…"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: o.guest_name ?? (o.user_id ? "Account user" : "—") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: o.guest_phone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-muted-foreground",
									children: o.guest_email
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 font-mono",
							children: formatNaira(o.unique_amount)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `rounded-full px-2 py-0.5 text-xs font-bold ${o.status === "paid" ? "bg-neon/20 text-neon" : o.status === "cancelled" ? "bg-destructive/20 text-destructive" : "bg-orange/20 text-orange"}`,
								children: o.status
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 text-xs text-muted-foreground",
							children: new Date(o.created_at).toLocaleString()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 text-right",
							children: o.status === "pending" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => mark.mutate(o.id),
								className: "rounded bg-neon px-2 py-1 text-xs font-bold text-neon-foreground",
								children: "Mark paid"
							})
						})
					]
				}, o.id)),
				!isLoading && (data ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-3 py-8 text-center text-muted-foreground",
					children: "No orders yet."
				}) })
			] })]
		})
	});
}
//#endregion
export { AdminOrders as component };
