import { o as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as useNavigate, g as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { n as queryOptions, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { l as ShoppingBag, v as MessageCircle, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as useAuth } from "./use-auth-xTw4pcBa.mjs";
import { n as getSettings, t as getProduct } from "./shop.functions-Cp_jeWFp.mjs";
import { t as createOrder } from "./orders.functions-CcdhgWnp.mjs";
import { t as Route } from "./product._id-CkduMQ6C.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-BQWLROkH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/product.$id.tsx?tsr-split=component";
function ProductPage() {
	const { id } = Route.useParams();
	const navigate = useNavigate();
	const router = useRouter();
	const { user } = useAuth();
	const createOrderFn = useServerFn(createOrder);
	const { data: product } = useSuspenseQuery(queryOptions({
		queryKey: ["product", id],
		queryFn: () => getProduct({ data: { id } })
	}));
	const { data: settings } = useSuspenseQuery(queryOptions({
		queryKey: ["settings"],
		queryFn: () => getSettings()
	}));
	const [active, setActive] = (0, import_react.useState)(0);
	const [showGuest, setShowGuest] = (0, import_react.useState)(false);
	const [guestName, setGuestName] = (0, import_react.useState)("");
	const [guestPhone, setGuestPhone] = (0, import_react.useState)("");
	const [guestEmail, setGuestEmail] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	if (!product) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "text-2xl font-bold",
			children: "Product not found"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/",
			className: "mt-4 inline-block text-neon underline",
			children: "Back home"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 47,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 45,
		columnNumber: 12
	}, this);
	async function handleBuy(asGuest) {
		setError(null);
		setSubmitting(true);
		try {
			const payload = {
				productId: id,
				quantity: 1
			};
			if (user) payload.userId = user.id;
			else if (asGuest) {
				if (!guestName.trim() || !guestPhone.trim() || !guestEmail.trim()) throw new Error("Please fill in name, phone and email.");
				payload.guestName = guestName.trim();
				payload.guestPhone = guestPhone.trim();
				payload.guestEmail = guestEmail.trim();
			}
			const { id: orderId } = await createOrderFn({ data: payload });
			await router.invalidate();
			navigate({
				to: "/checkout/$orderId",
				params: { orderId }
			});
		} catch (e) {
			setError(e?.message ?? "Could not create order");
		} finally {
			setSubmitting(false);
		}
	}
	const waLink = (() => {
		const base = settings?.whatsapp_link || "https://wa.me/2348000000000";
		try {
			const u = new URL(base);
			u.searchParams.set("text", `Hello, I want to ask about ${product.title} (₦${product.price_naira.toLocaleString()})`);
			return u.toString();
		} catch {
			return base;
		}
	})();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-5xl px-4 py-6 pb-32 sm:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "text-xs text-muted-foreground hover:text-foreground",
				children: "← Back"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 99,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 grid gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "aspect-square overflow-hidden rounded-xl border border-border bg-surface",
					children: product.signed_image_urls[active] ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: product.signed_image_urls[active],
						alt: product.title,
						className: "h-full w-full object-cover"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 50
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid h-full w-full place-items-center text-muted-foreground",
						children: "No image"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 105,
						columnNumber: 159
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 104,
					columnNumber: 11
				}, this), product.signed_image_urls.length > 1 && /* @__PURE__ */ (void 0)("div", {
					className: "mt-2 flex gap-2 overflow-x-auto",
					children: product.signed_image_urls.map((url, i) => /* @__PURE__ */ (void 0)("button", {
						onClick: () => setActive(i),
						className: `h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border ${i === active ? "border-neon" : "border-border"}`,
						children: /* @__PURE__ */ (void 0)("img", {
							src: url,
							alt: "",
							className: "h-full w-full object-cover"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 109,
							columnNumber: 19
						}, this)
					}, i, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 58
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 52
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "font-display text-2xl font-black sm:text-3xl",
						children: product.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 115,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-2 font-display text-3xl font-black text-neon",
						children: formatNaira(product.price_naira)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 116,
						columnNumber: 11
					}, this),
					product.stock <= 0 && /* @__PURE__ */ (void 0)("div", {
						className: "mt-2 inline-block rounded bg-destructive/20 px-2 py-0.5 text-xs font-semibold text-destructive",
						children: "Out of stock"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 34
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground",
						children: product.description || "No description."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 122,
						columnNumber: 11
					}, this),
					error && /* @__PURE__ */ (void 0)("div", {
						className: "mt-4 rounded-md border border-destructive bg-destructive/10 p-3 text-sm text-destructive",
						children: error
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 126,
						columnNumber: 21
					}, this),
					!user && showGuest && /* @__PURE__ */ (void 0)("div", {
						className: "mt-4 space-y-2 rounded-lg border border-border p-3",
						children: [
							/* @__PURE__ */ (void 0)("p", {
								className: "text-xs font-semibold uppercase text-muted-foreground",
								children: "Continue as guest"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("input", {
								placeholder: "Full name",
								value: guestName,
								onChange: (e) => setGuestName(e.target.value),
								className: "w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 134,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("input", {
								placeholder: "Phone (e.g. 08012345678)",
								value: guestPhone,
								onChange: (e) => setGuestPhone(e.target.value),
								className: "w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 135,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("input", {
								placeholder: "Email",
								type: "email",
								value: guestEmail,
								onChange: (e) => setGuestEmail(e.target.value),
								className: "w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 130,
						columnNumber: 34
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 hidden gap-3 sm:flex",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyButtons, {
							user: !!user,
							showGuest,
							setShowGuest,
							onBuy: handleBuy,
							waLink,
							submitting,
							disabled: product.stock <= 0
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 139,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BuyButtons, {
					user: !!user,
					showGuest,
					setShowGuest,
					onBuy: handleBuy,
					waLink,
					submitting,
					disabled: product.stock <= 0
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 147,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 146,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 98,
		columnNumber: 10
	}, this);
}
function BuyButtons({ user, showGuest, setShowGuest, onBuy, waLink, submitting, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
		disabled: submitting || disabled,
		onClick: () => {
			if (user) onBuy(false);
			else if (showGuest) onBuy(true);
			else setShowGuest(true);
		},
		className: "flex flex-1 items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon disabled:opacity-50",
		children: [submitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 172,
			columnNumber: 23
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ShoppingBag, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 172,
			columnNumber: 70
		}, this), "Buy Now"]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 169,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
		href: waLink,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "flex items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366]/10 px-4 py-3 font-bold text-[#25D366]",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "h-4 w-4" }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 176,
			columnNumber: 9
		}, this), " WhatsApp"]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 175,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 168,
		columnNumber: 10
	}, this);
}
//#endregion
export { ProductPage as component };
