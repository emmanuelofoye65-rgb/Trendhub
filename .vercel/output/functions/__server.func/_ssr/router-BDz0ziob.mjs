import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { M as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { o as objectType, s as stringType } from "../_libs/@mendable/firecrawl-js+[...].mjs";
import { a as isAdmin } from "./admin.functions-BjAkHt1i.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as QueryClientProvider, i as useQuery, n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { l as ShoppingBag, r as User, u as ShieldCheck, v as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-Dj_uQScw.mjs";
import { t as useAuth } from "./use-auth-BN2qcMpl.mjs";
import { n as getSettings, r as listCategories } from "./shop.functions-DVYv__ag.mjs";
import { t as Route$13 } from "./category._slug-DVxlYb8B.mjs";
import { t as Route$14 } from "./checkout._orderId-30LDJ8BJ.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$15 } from "./product._id-DqAEzQvL.mjs";
import { i as trendingOpts, n as plugOpts, r as settingsOpts, t as hotOpts } from "./routes-ClTSBFcd.mjs";
import { createHmac, timingSafeEqual } from "crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BDz0ziob.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BwXu_lvv.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function SiteHeader() {
	const { user } = useAuth();
	const isAdminFn = useServerFn(isAdmin);
	const { data: admin } = useQuery({
		queryKey: ["is-admin", user?.id],
		queryFn: () => isAdminFn(),
		enabled: !!user
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-neon font-display text-lg font-black text-neon-foreground shadow-neon",
						children: "T"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-display text-lg font-black tracking-tight",
						children: ["TrendRush ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-orange",
							children: "NG"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-5 text-sm font-medium text-muted-foreground sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: "plugmarket" },
						activeProps: { className: "text-foreground" },
						children: "PlugMarket"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: "hotpick" },
						activeProps: { className: "text-foreground" },
						children: "HotPick NG"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [admin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/admin",
						className: "flex items-center gap-1 rounded-md border border-orange/40 px-2 py-1 text-xs font-semibold text-orange",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }), " Admin"]
					}), user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/orders",
						className: "flex items-center gap-1 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-3.5 w-3.5" }), " Orders"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/auth",
						className: "flex items-center gap-1 rounded-md bg-neon px-3 py-1.5 text-xs font-bold text-neon-foreground shadow-neon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" }), " Sign in"]
					})]
				})
			]
		})
	});
}
function WhatsAppFab({ link }) {
	if (!link || link.trim().length === 0) return null;
	let href = link.trim();
	if (!href.startsWith("http")) href = `https://wa.me/${href.replace(/[^\d+]/g, "")}`;
	try {
		const url = new URL(href);
		if (!url.searchParams.get("text")) url.searchParams.set("text", "Hello, I want to ask about this product");
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: url.toString(),
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": "Chat on WhatsApp",
			className: "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/40 transition hover:scale-105",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-7 w-7" })
		});
	} catch (e) {
		return null;
	}
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-black text-gradient-neon",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-neon px-4 py-2 text-sm font-bold text-neon-foreground shadow-neon",
						children: "Back home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-neon px-4 py-2 text-sm font-bold text-neon-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-md border border-input px-4 py-2 text-sm font-medium",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "TrendRush NG — Naija's hottest deals, delivered fast" },
			{
				name: "description",
				content: "TrendRush NG: shop gadgets on PlugMarket and viral picks on HotPick NG. Bank transfer checkout, WhatsApp support."
			},
			{
				name: "theme-color",
				content: "#0A0A0F"
			},
			{
				property: "og:title",
				content: "TrendRush NG — Naija's hottest deals, delivered fast"
			},
			{
				property: "og:description",
				content: "TrendRush NG is a modern Nigerian e-commerce web app for buying gadgets, trending deals, and viral products."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "TrendRush NG — Naija's hottest deals, delivered fast"
			},
			{
				name: "description",
				content: "TrendRush NG is a modern Nigerian e-commerce web app for buying gadgets, trending deals, and viral products."
			},
			{
				name: "twitter:description",
				content: "TrendRush NG is a modern Nigerian e-commerce web app for buying gadgets, trending deals, and viral products."
			},
			{
				property: "og:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/dVeo7KYNOUZU0l2qmkKMtvGL8z42/social-images/social-1781947197981-1000061254.webp"
			},
			{
				name: "twitter:image",
				content: "https://storage.googleapis.com/gpt-engineer-file-uploads/dVeo7KYNOUZU0l2qmkKMtvGL8z42/social-images/social-1781947197981-1000061254.webp"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {})
	});
}
function Shell() {
	const router = useRouter();
	const { data: settings } = useQuery({
		queryKey: ["settings"],
		queryFn: () => getSettings()
	});
	(0, import_react.useEffect)(() => {
		const { data: sub } = supabase.auth.onAuthStateChange((event) => {
			if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") router.invalidate();
		});
		return () => sub.subscription.unsubscribe();
	}, [router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border py-8 text-center text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TrendRush NG · PlugMarket · HotPick NG"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, { link: settings?.whatsapp_link }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				theme: "dark",
				position: "top-center",
				richColors: true
			})
		]
	});
}
var $$splitComponentImporter$10 = () => import("./reset-password-C3E1yDOx.mjs");
var Route$11 = createFileRoute("/reset-password")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./auth-Doi8CF9R.mjs");
var searchSchema = objectType({ redirect: stringType().optional() });
var Route$10 = createFileRoute("/auth")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Sign in — TrendRush NG" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./route-Di7iQBCH.mjs");
var Route$9 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async ({ location }) => {
		const { data, error } = await supabase.auth.getUser();
		if (error || !data.user) throw redirect({
			to: "/auth",
			search: { redirect: location.href }
		});
		return { user: data.user };
	},
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./routes-BcwyOkyy.mjs");
var catsOpts = queryOptions({
	queryKey: ["categories"],
	queryFn: () => listCategories()
});
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "TrendRush NG — Naija's hottest deals, delivered fast" },
		{
			name: "description",
			content: "Shop trending gadgets on PlugMarket and viral deals on HotPick NG. Bank transfer checkout with WhatsApp support."
		},
		{
			property: "og:title",
			content: "TrendRush NG"
		},
		{
			property: "og:description",
			content: "Naija's hottest deals, delivered fast."
		}
	] }),
	loader: async ({ context }) => {
		await Promise.all([
			context.queryClient.ensureQueryData(trendingOpts),
			context.queryClient.ensureQueryData(plugOpts),
			context.queryClient.ensureQueryData(hotOpts),
			context.queryClient.ensureQueryData(settingsOpts),
			context.queryClient.ensureQueryData(catsOpts)
		]);
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./orders-BWmxf5kY.mjs");
var Route$7 = createFileRoute("/_authenticated/orders")({
	head: () => ({ meta: [{ title: "My Orders — TrendRush NG" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./route-DppwIWmT.mjs");
var Route$6 = createFileRoute("/_authenticated/admin")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin-Bl-GJ87u.mjs");
var Route$5 = createFileRoute("/_authenticated/admin/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var Route$4 = createFileRoute("/api/public/moniepoint-webhook")({ server: { handlers: { POST: async ({ request }) => {
	const secret = process.env.MONIEPOINT_WEBHOOK_SECRET;
	if (!secret) return new Response("Webhook not configured", { status: 500 });
	const rawBody = await request.text();
	const signature = request.headers.get("x-moniepoint-signature") ?? request.headers.get("x-webhook-signature") ?? request.headers.get("signature") ?? "";
	const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
	const sigBuf = Buffer.from(signature, "utf8");
	const expBuf = Buffer.from(expected, "utf8");
	if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) return new Response("Invalid signature", { status: 401 });
	let payload;
	try {
		payload = JSON.parse(rawBody);
	} catch {
		return new Response("Invalid JSON", { status: 400 });
	}
	const rawAmount = payload.amount ?? payload.data?.amount ?? payload.transaction?.amount ?? payload.transactionAmount;
	const reference = payload.reference ?? payload.data?.reference ?? payload.transactionReference ?? payload.transaction?.reference ?? null;
	const senderNameRaw = payload.senderName ?? payload.sender_name ?? payload.payerName ?? payload.payer_name ?? payload.originatorName ?? payload.sourceAccountName ?? payload.data?.senderName ?? payload.data?.payerName ?? payload.data?.sourceAccountName ?? payload.transaction?.senderName ?? payload.transaction?.payerName ?? "";
	const senderName = String(senderNameRaw).trim();
	if (rawAmount == null) return new Response("Missing amount", { status: 400 });
	const amountNum = Number(rawAmount);
	if (!Number.isFinite(amountNum)) return new Response("Bad amount", { status: 400 });
	const amountInNaira = amountNum > 1e6 ? Math.round(amountNum / 100) : Math.round(amountNum);
	const { supabaseAdmin } = await import("./client.server-BfAFJbEd.mjs");
	const { data: candidates } = await supabaseAdmin.from("orders").select("id, sender_name, created_at").eq("status", "pending").eq("unique_amount", amountInNaira).order("created_at", { ascending: false });
	const norm = (s) => String(s ?? "").trim().toLowerCase().replace(/\s+/g, " ");
	const senderKey = norm(senderName);
	const order = (candidates ?? []).find((c) => senderKey && norm(c.sender_name) === senderKey) ?? null;
	await supabaseAdmin.from("payments").insert({
		order_id: order?.id ?? null,
		amount: amountInNaira,
		reference,
		raw_payload: {
			...payload,
			_matched_sender: senderName,
			_amount_naira: amountInNaira
		}
	});
	if (order) {
		await supabaseAdmin.from("orders").update({
			status: "paid",
			paid_at: (/* @__PURE__ */ new Date()).toISOString()
		}).eq("id", order.id);
		return Response.json({
			ok: true,
			matched: true,
			orderId: order.id
		});
	}
	return Response.json({
		ok: true,
		matched: false
	});
} } } });
var $$splitComponentImporter$3 = () => import("./wap-container-DEpC7qZw.mjs");
var Route$3 = createFileRoute("/_authenticated/admin/wap-container")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./settings-CckcR6TE.mjs");
var Route$2 = createFileRoute("/_authenticated/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./products-DfwjFXS3.mjs");
var Route$1 = createFileRoute("/_authenticated/admin/products")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./orders-Bf-HpzDh.mjs");
var Route = createFileRoute("/_authenticated/admin/orders")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var ResetPasswordRoute = Route$11.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$12
});
var AuthRoute = Route$10.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$12
});
var AuthenticatedRouteRoute = Route$9.update({
	id: "/_authenticated",
	getParentRoute: () => Route$12
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var ProductIdRoute = Route$15.update({
	id: "/product/$id",
	path: "/product/$id",
	getParentRoute: () => Route$12
});
var CheckoutOrderIdRoute = Route$14.update({
	id: "/checkout/$orderId",
	path: "/checkout/$orderId",
	getParentRoute: () => Route$12
});
var CategorySlugRoute = Route$13.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$12
});
var AuthenticatedOrdersRoute = Route$7.update({
	id: "/orders",
	path: "/orders",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminRouteRoute = Route$6.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => AuthenticatedRouteRoute
});
var AuthenticatedAdminIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthenticatedAdminRouteRoute
});
var ApiPublicMoniepointWebhookRoute = Route$4.update({
	id: "/api/public/moniepoint-webhook",
	path: "/api/public/moniepoint-webhook",
	getParentRoute: () => Route$12
});
var AuthenticatedAdminWapContainerRoute = Route$3.update({
	id: "/wap-container",
	path: "/wap-container",
	getParentRoute: () => AuthenticatedAdminRouteRoute
});
var AuthenticatedAdminSettingsRoute = Route$2.update({
	id: "/settings",
	path: "/settings",
	getParentRoute: () => AuthenticatedAdminRouteRoute
});
var AuthenticatedAdminProductsRoute = Route$1.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => AuthenticatedAdminRouteRoute
});
var AuthenticatedAdminRouteRouteChildren = {
	AuthenticatedAdminOrdersRoute: Route.update({
		id: "/orders",
		path: "/orders",
		getParentRoute: () => AuthenticatedAdminRouteRoute
	}),
	AuthenticatedAdminProductsRoute,
	AuthenticatedAdminSettingsRoute,
	AuthenticatedAdminWapContainerRoute,
	AuthenticatedAdminIndexRoute
};
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAdminRouteRoute: AuthenticatedAdminRouteRoute._addFileChildren(AuthenticatedAdminRouteRouteChildren),
	AuthenticatedOrdersRoute
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	ResetPasswordRoute,
	CategorySlugRoute,
	CheckoutOrderIdRoute,
	ProductIdRoute,
	ApiPublicMoniepointWebhookRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
