import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Bv7kkfwx.mjs";
import { n as getMyOrders } from "./orders.functions-CcdhgWnp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-Cxea4xAz.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/orders.tsx?tsr-split=component";
function MyOrders() {
	const fn = useServerFn(getMyOrders);
	const { data, isLoading } = useQuery({
		queryKey: ["my-orders"],
		queryFn: () => fn()
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-3xl font-black",
					children: "My orders"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: async () => {
						await supabase.auth.signOut();
						window.location.href = "/";
					},
					className: "text-sm text-muted-foreground hover:text-destructive",
					children: "Sign out"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			isLoading && /* @__PURE__ */ (void 0)("div", {
				className: "mt-6 text-muted-foreground",
				children: "Loading..."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 21
			}, this),
			!isLoading && (data?.length ?? 0) === 0 && /* @__PURE__ */ (void 0)("div", {
				className: "mt-6 rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground",
				children: [
					"You haven't placed any orders yet.",
					" ",
					/* @__PURE__ */ (void 0)(Link, {
						to: "/",
						className: "text-neon underline",
						children: "Start shopping"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 51
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 space-y-3",
				children: data?.map((o) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/checkout/$orderId",
					params: { orderId: o.id },
					className: "flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-neon/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "h-16 w-16 overflow-hidden rounded-md bg-surface",
							children: o.product_image && /* @__PURE__ */ (void 0)("img", {
								src: o.product_image,
								alt: "",
								className: "h-full w-full object-cover"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 35
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 38,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-semibold",
								children: o.products?.title ?? "Product"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 42,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-xs text-muted-foreground",
								children: [
									new Date(o.created_at).toLocaleString(),
									" · ",
									formatNaira(o.unique_amount)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 43,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: `rounded-full px-3 py-1 text-xs font-bold ${o.status === "paid" ? "bg-neon/20 text-neon" : o.status === "cancelled" ? "bg-destructive/20 text-destructive" : "bg-orange/20 text-orange"}`,
							children: o.status
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 13
						}, this)
					]
				}, o.id, true, {
					fileName: _jsxFileName,
					lineNumber: 35,
					columnNumber: 32
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 10
	}, this);
}
//#endregion
export { MyOrders as component };
