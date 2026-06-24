import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { n as adminListOrders, o as markOrderPaid } from "./admin.functions-SBQi0VJ_.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-qur7FmOe.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin/orders.tsx?tsr-split=component";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "overflow-x-auto rounded-xl border border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
				className: "bg-surface text-xs uppercase text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
						className: "px-3 py-2 text-left",
						children: "Order"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
						className: "px-3 py-2 text-left",
						children: "Customer"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
						className: "px-3 py-2 text-left",
						children: "Amount"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 32,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
						className: "px-3 py-2 text-left",
						children: "Status"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 33,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
						className: "px-3 py-2 text-left",
						children: "Created"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-3 py-2" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
				isLoading && /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
					colSpan: 6,
					className: "px-3 py-8 text-center text-muted-foreground",
					children: "Loading…"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 39,
					columnNumber: 25
				}, this),
				(data ?? []).map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-semibold",
								children: o.products?.title ?? "—"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-mono text-xs text-muted-foreground",
								children: [o.id.slice(0, 8), "…"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: o.guest_name ?? (o.user_id ? "Account user" : "—") }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-muted-foreground",
									children: o.guest_phone
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-muted-foreground",
									children: o.guest_email
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2 font-mono",
							children: formatNaira(o.unique_amount)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: `rounded-full px-2 py-0.5 text-xs font-bold ${o.status === "paid" ? "bg-neon/20 text-neon" : o.status === "cancelled" ? "bg-destructive/20 text-destructive" : "bg-orange/20 text-orange"}`,
								children: o.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2 text-xs text-muted-foreground",
							children: new Date(o.created_at).toLocaleString()
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2 text-right",
							children: o.status === "pending" && /* @__PURE__ */ (void 0)("button", {
								onClick: () => mark.mutate(o.id),
								className: "rounded bg-neon px-2 py-1 text-xs font-bold text-neon-foreground",
								children: "Mark paid"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 44
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 15
						}, this)
					]
				}, o.id, true, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 41
				}, this)),
				!isLoading && (data ?? []).length === 0 && /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
					colSpan: 6,
					className: "px-3 py-8 text-center text-muted-foreground",
					children: "No orders yet."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 15
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 55
				}, this)
			] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 38,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 27,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminOrders as component };
