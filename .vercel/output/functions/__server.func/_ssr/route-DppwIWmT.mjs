import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { a as isAdmin } from "./admin.functions-BjAkHt1i.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { C as Download, _ as Package, b as LayoutDashboard, f as Settings, p as Receipt } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-DppwIWmT.js
var import_jsx_runtime = require_jsx_runtime();
function AdminLayout() {
	const fn = useServerFn(isAdmin);
	const { data, isLoading } = useQuery({
		queryKey: ["is-admin"],
		queryFn: () => fn()
	});
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "p-8 text-center text-muted-foreground",
		children: "Checking access…"
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-xl font-bold",
				children: "Not authorized"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Only admins can access this area."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-4 inline-block text-neon underline",
				children: "Back home"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-6xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-6 flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-black text-orange",
					children: "Admin"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mb-6 flex space-x-1 overflow-x-auto rounded-lg border border-border bg-card p-1 no-scrollbar",
				children: [
					{
						to: "/admin",
						label: "Dashboard",
						icon: LayoutDashboard,
						exact: true
					},
					{
						to: "/admin/products",
						label: "Products",
						icon: Package
					},
					{
						to: "/admin/wap-container",
						label: "WAP Container",
						icon: Download
					},
					{
						to: "/admin/orders",
						label: "Orders",
						icon: Receipt
					},
					{
						to: "/admin/settings",
						label: "Settings",
						icon: Settings
					}
				].map((t) => {
					const active = t.exact ? pathname === "/admin" || pathname === "/admin/" : pathname.startsWith(t.to);
					const Icon = t.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: t.to,
						className: `flex whitespace-nowrap items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${active ? "bg-neon text-neon-foreground" : "text-muted-foreground hover:bg-border/50 hover:text-foreground"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
							" ",
							t.label
						]
					}, t.to);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		]
	});
}
//#endregion
export { AdminLayout as component };
