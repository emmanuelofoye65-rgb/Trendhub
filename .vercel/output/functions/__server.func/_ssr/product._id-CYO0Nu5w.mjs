import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as useNavigate, g as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { n as queryOptions, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { l as ShoppingBag, v as MessageCircle, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as useAuth } from "./use-auth-BN2qcMpl.mjs";
import { n as getSettings, t as getProduct } from "./shop.functions-DVYv__ag.mjs";
import { t as createOrder } from "./orders.functions-Ber0T4lB.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as Route } from "./product._id-DqAEzQvL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-CYO0Nu5w.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
	const [selectedVariants, setSelectedVariants] = (0, import_react.useState)({});
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-2xl font-bold",
			children: "Product not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "mt-4 inline-block text-neon underline",
			children: "Back home"
		})]
	});
	(0, import_react.useEffect)(() => {
		const p = product;
		if (p?.variants && p.variants.length > 0) {
			const initial = {};
			p.variants.forEach((v) => {
				if (v.options && v.options.length > 0) initial[v.name] = v.options[0];
			});
			setSelectedVariants(initial);
		}
	}, [product]);
	async function handleBuy(asGuest) {
		setError(null);
		setSubmitting(true);
		try {
			const p = product;
			if (p?.variants && p.variants.length > 0) {
				const missing = p.variants.find((v) => !selectedVariants[v.name] && v.options.length > 0);
				if (missing) throw new Error(`Please select a ${missing.name}`);
			}
			const payload = {
				productId: id,
				quantity: 1,
				variants: selectedVariants
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
			toast.success("Order created! Redirecting to checkout...");
			navigate({
				to: "/checkout/$orderId",
				params: { orderId }
			});
		} catch (e) {
			toast.error(e?.message ?? "Could not create order");
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl px-4 py-6 pb-32 sm:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-xs text-muted-foreground hover:text-foreground",
				children: "← Back"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-6 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square overflow-hidden rounded-xl border border-border bg-surface",
					children: product.signed_image_urls[active] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.signed_image_urls[active],
						alt: product.title,
						className: "h-full w-full object-cover"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-full w-full place-items-center text-muted-foreground",
						children: "No image"
					})
				}), product.signed_image_urls.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex gap-2 overflow-x-auto",
					children: product.signed_image_urls.map((url, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActive(i),
						className: `h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border ${i === active ? "border-neon" : "border-border"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: url,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}, i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-black sm:text-3xl",
						children: product.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-display text-3xl font-black text-neon",
						children: formatNaira(product.price_naira)
					}),
					product.stock <= 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 inline-block rounded bg-destructive/20 px-2 py-0.5 text-xs font-semibold text-destructive",
						children: "Out of stock"
					}),
					product.variants && product.variants.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 space-y-4 border-y border-border py-4",
						children: product.variants.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-semibold uppercase text-muted-foreground",
							children: v.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: v.options.map((opt, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setSelectedVariants({
									...selectedVariants,
									[v.name]: opt
								}),
								className: `rounded-md border px-4 py-2 text-sm transition-colors ${selectedVariants[v.name] === opt ? "border-neon bg-neon/10 text-neon font-medium" : "border-border hover:border-muted-foreground bg-surface"}`,
								children: opt
							}, j))
						})] }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 whitespace-pre-line text-sm leading-relaxed text-muted-foreground",
						children: product.description || "No description."
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 rounded-md border border-destructive bg-destructive/10 p-3 text-sm text-destructive",
						children: error
					}),
					!user && showGuest && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 space-y-2 rounded-lg border border-border p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase text-muted-foreground",
								children: "Continue as guest"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Full name",
								value: guestName,
								onChange: (e) => setGuestName(e.target.value),
								className: "w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Phone (e.g. 08012345678)",
								value: guestPhone,
								onChange: (e) => setGuestPhone(e.target.value),
								className: "w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								placeholder: "Email",
								type: "email",
								value: guestEmail,
								onChange: (e) => setGuestEmail(e.target.value),
								className: "w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 hidden gap-3 sm:flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButtons, {
							user: !!user,
							showGuest,
							setShowGuest,
							onBuy: handleBuy,
							waLink,
							submitting,
							disabled: product.stock <= 0
						})
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyButtons, {
					user: !!user,
					showGuest,
					setShowGuest,
					onBuy: handleBuy,
					waLink,
					submitting,
					disabled: product.stock <= 0
				})
			})
		]
	});
}
function BuyButtons({ user, showGuest, setShowGuest, onBuy, waLink, submitting, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		disabled: submitting || disabled,
		onClick: () => {
			if (user) onBuy(false);
			else if (showGuest) onBuy(true);
			else setShowGuest(true);
		},
		className: "flex flex-1 items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon disabled:opacity-50",
		children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), "Buy Now"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: waLink,
		target: "_blank",
		rel: "noopener noreferrer",
		className: "flex items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366]/10 px-4 py-3 font-bold text-[#25D366]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
	})] });
}
//#endregion
export { ProductPage as component };
