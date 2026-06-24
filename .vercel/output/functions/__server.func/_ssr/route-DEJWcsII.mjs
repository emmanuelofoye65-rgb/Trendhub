import { f as Outlet, g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { a as isAdmin } from "./admin.functions-SBQi0VJ_.mjs";
import { i as useQuery } from "../_libs/tanstack__react-query.mjs";
import { C as Download, _ as Package, b as LayoutDashboard, f as Settings, p as Receipt } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-DEJWcsII.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin/route.tsx?tsr-split=component";
function AdminLayout() {
	const fn = useServerFn(isAdmin);
	const { data, isLoading } = useQuery({
		queryKey: ["is-admin"],
		queryFn: () => fn()
	});
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "p-8 text-center text-muted-foreground",
		children: "Checking access…"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 25
	}, this);
	if (!data) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-xl font-bold",
				children: "Not authorized"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: "Only admins can access this area."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 21,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "mt-4 inline-block text-neon underline",
				children: "Back home"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 21
	}, this);
	const tabs = [
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
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-6xl px-4 py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mb-6 flex items-center justify-between",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "font-display text-2xl font-black text-orange",
					children: "Admin"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 55,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 54,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "mb-6 flex space-x-1 overflow-x-auto rounded-lg border border-border bg-card p-1 no-scrollbar",
				children: tabs.map((t) => {
					const active = t.exact ? pathname === "/admin" || pathname === "/admin/" : pathname.startsWith(t.to);
					const Icon = t.icon;
					return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: t.to,
						className: `flex whitespace-nowrap items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${active ? "bg-neon text-neon-foreground" : "text-muted-foreground hover:bg-border/50 hover:text-foreground"}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-4 w-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 62,
								columnNumber: 15
							}, this),
							" ",
							t.label
						]
					}, t.to, true, {
						fileName: _jsxFileName,
						lineNumber: 61,
						columnNumber: 16
					}, this);
				})
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 53,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminLayout as component };
