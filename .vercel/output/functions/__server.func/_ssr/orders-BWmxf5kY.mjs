import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as supabase } from "./client-Dj_uQScw.mjs";
import { n as getMyOrders } from "./orders.functions-Ber0T4lB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-BWmxf5kY.js
var import_jsx_runtime = require_jsx_runtime();
function MyOrders() {
	const fn = useServerFn(getMyOrders);
	const { data, isLoading } = useQuery({
		queryKey: ["my-orders"],
		queryFn: () => fn()
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-black",
					children: "My orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: async () => {
						await supabase.auth.signOut();
						window.location.href = "/";
					},
					className: "text-sm text-muted-foreground hover:text-destructive",
					children: "Sign out"
				})]
			}),
			isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 text-muted-foreground",
				children: "Loading..."
			}),
			!isLoading && (data?.length ?? 0) === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground",
				children: [
					"You haven't placed any orders yet.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-neon underline",
						children: "Start shopping"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-3",
				children: data?.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/checkout/$orderId",
					params: { orderId: o.id },
					className: "flex items-center gap-3 rounded-xl border border-border bg-card p-3 hover:border-neon/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-16 w-16 overflow-hidden rounded-md bg-surface",
							children: o.product_image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: o.product_image,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: o.products?.title ?? "Product"
								}),
								o.variants && Object.keys(o.variants).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: Object.entries(o.variants).map(([k, v]) => `${k}: ${v}`).join(", ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [
										new Date(o.created_at).toLocaleString(),
										" · ",
										formatNaira(o.unique_amount)
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `rounded-full px-3 py-1 text-xs font-bold ${o.status === "paid" ? "bg-neon/20 text-neon" : o.status === "cancelled" ? "bg-destructive/20 text-destructive" : "bg-orange/20 text-orange"}`,
							children: o.status
						})
					]
				}, o.id))
			})
		]
	});
}
//#endregion
export { MyOrders as component };
