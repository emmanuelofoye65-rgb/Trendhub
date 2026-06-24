import { o as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { M as redirect, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { a as stringType, i as objectType } from "../_libs/zod.mjs";
import { a as isAdmin } from "./admin.functions-SBQi0VJ_.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as QueryClientProvider, i as useQuery, n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { l as ShoppingBag, r as User, u as ShieldCheck, v as MessageCircle } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Bv7kkfwx.mjs";
import { t as useAuth } from "./use-auth-xTw4pcBa.mjs";
import { n as getSettings, r as listCategories } from "./shop.functions-Cp_jeWFp.mjs";
import { t as Route$13 } from "./category._slug-BD_ugNQR.mjs";
import { t as Route$14 } from "./checkout._orderId-CXxdkbjv.mjs";
import { t as Route$15 } from "./product._id-CkduMQ6C.mjs";
import { i as trendingOpts, n as plugOpts, r as settingsOpts, t as hotOpts } from "./routes-BFBrS-cR.mjs";
import { createHmac, timingSafeEqual } from "crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BcMHp_Q7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var styles_default = "/assets/styles-CMATUW9s.css";
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
var _jsxFileName$2 = "/app/applet/src/components/site-header.tsx";
function SiteHeader() {
	const { user } = useAuth();
	const isAdminFn = useServerFn(isAdmin);
	const { data: admin } = useQuery({
		queryKey: ["is-admin", user?.id],
		queryFn: () => isAdminFn(),
		enabled: !!user
	});
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid h-9 w-9 place-items-center rounded-lg bg-neon font-display text-lg font-black text-neon-foreground shadow-neon",
						children: "T"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 21,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "font-display text-lg font-black tracking-tight",
						children: ["TrendRush ", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-orange",
							children: "NG"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 25,
							columnNumber: 23
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 24,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 20,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-5 text-sm font-medium text-muted-foreground sm:flex",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/category/$slug",
						params: { slug: "plugmarket" },
						activeProps: { className: "text-foreground" },
						children: "PlugMarket"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 29,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/category/$slug",
						params: { slug: "hotpick" },
						activeProps: { className: "text-foreground" },
						children: "HotPick NG"
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 32,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 28,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2",
					children: [admin && /* @__PURE__ */ (void 0)(Link, {
						to: "/admin",
						className: "flex items-center gap-1 rounded-md border border-orange/40 px-2 py-1 text-xs font-semibold text-orange",
						children: [/* @__PURE__ */ (void 0)(ShieldCheck, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 42,
							columnNumber: 15
						}, this), " Admin"]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 38,
						columnNumber: 13
					}, this), user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/orders",
						className: "flex items-center gap-1 rounded-md bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 50,
							columnNumber: 15
						}, this), " Orders"]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 46,
						columnNumber: 13
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/auth",
						className: "flex items-center gap-1 rounded-md bg-neon px-3 py-1.5 text-xs font-bold text-neon-foreground shadow-neon",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-3.5 w-3.5" }, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 57,
							columnNumber: 15
						}, this), " Sign in"]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 53,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 36,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 19,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/whatsapp-fab.tsx";
function WhatsAppFab({ link }) {
	const href = link && link.trim().length > 0 ? link : "https://wa.me/2348000000000";
	const url = new URL(href);
	if (!url.searchParams.get("text")) url.searchParams.set("text", "Hello, I want to ask about this product");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href: url.toString(),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/40 transition hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "h-7 w-7" }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 10,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-7xl font-black text-gradient-neon",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 25,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-neon px-4 py-2 text-sm font-bold text-neon-foreground shadow-neon",
						children: "Back home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 22,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 21,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-xl font-semibold",
					children: "Something went wrong"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 51,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Try again or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-md bg-neon px-4 py-2 text-sm font-bold text-neon-foreground",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "rounded-md border border-input px-4 py-2 text-sm font-medium",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 50,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 49,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		className: "dark",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 121,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Shell, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 131,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 130,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 154,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "flex-1",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 156,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 155,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "border-t border-border py-8 text-center text-xs text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" TrendRush NG · PlugMarket · HotPick NG"
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 158,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppFab, { link: settings?.whatsapp_link }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 161,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 153,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$10 = () => import("./reset-password-CnDJpNTq.mjs");
var Route$11 = createFileRoute("/reset-password")({ component: lazyRouteComponent($$splitComponentImporter$10, "component") });
var $$splitComponentImporter$9 = () => import("./auth-BmjMCESw.mjs");
var searchSchema = objectType({ redirect: stringType().optional() });
var Route$10 = createFileRoute("/auth")({
	validateSearch: searchSchema,
	head: () => ({ meta: [{ title: "Sign in — TrendRush NG" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./route-CRRSyPUS.mjs");
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
var $$splitComponentImporter$7 = () => import("./routes-CUbNhF9-.mjs");
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
var $$splitComponentImporter$6 = () => import("./orders-Cxea4xAz.mjs");
var Route$7 = createFileRoute("/_authenticated/orders")({
	head: () => ({ meta: [{ title: "My Orders — TrendRush NG" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./route-DEJWcsII.mjs");
var Route$6 = createFileRoute("/_authenticated/admin")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./admin-CByviM42.mjs");
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
	const { supabaseAdmin } = await import("./client.server-BysPdmPN.mjs");
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
var $$splitComponentImporter$3 = () => import("./wap-container-C8Qjdj5P.mjs");
var Route$3 = createFileRoute("/_authenticated/admin/wap-container")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./settings-8-Ysr65l.mjs");
var Route$2 = createFileRoute("/_authenticated/admin/settings")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./products-DWt3yxla.mjs");
var Route$1 = createFileRoute("/_authenticated/admin/products")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./orders-qur7FmOe.mjs");
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
