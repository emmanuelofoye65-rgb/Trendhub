import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { n as queryOptions, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { a as TriangleAlert, k as Check, w as Copy, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as getSettings } from "./shop.functions-DVYv__ag.mjs";
import { a as normalizeSenderName, i as initializePaystack, o as setOrderSenderName, r as getOrderById } from "./orders.functions-Ber0T4lB.mjs";
import { t as Route } from "./checkout._orderId-30LDJ8BJ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout._orderId-DcpB6Ds0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const { orderId } = Route.useParams();
	const router = useRouter();
	const saveSender = useServerFn(setOrderSenderName);
	const paystackCheckout = useServerFn(initializePaystack);
	const { data: order } = useSuspenseQuery(queryOptions({
		queryKey: ["order", orderId],
		queryFn: () => getOrderById({ data: { id: orderId } })
	}));
	const { data: settings } = useSuspenseQuery(queryOptions({
		queryKey: ["settings"],
		queryFn: () => getSettings()
	}));
	const [copied, setCopied] = (0, import_react.useState)(null);
	const [senderName, setSenderName] = (0, import_react.useState)(order?.sender_name ?? "");
	const [confirmed, setConfirmed] = (0, import_react.useState)(false);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)(null);
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)(null);
	if (!order) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-xl font-bold",
			children: "Order not found"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "text-neon underline",
			children: "Back home"
		})]
	});
	const copy = async (label, value) => {
		await navigator.clipboard.writeText(value);
		setCopied(label);
		toast.success(`${label} copied!`);
		setTimeout(() => setCopied(null), 1500);
	};
	const hasSender = !!order.sender_name?.trim();
	const normalized = normalizeSenderName(senderName);
	const nameValid = normalized.length >= 3 && normalized.split(" ").length >= 2;
	async function handleSave() {
		setErr(null);
		if (!nameValid) {
			setErr("Enter your full name (first and last) exactly as on your bank account.");
			return;
		}
		if (!confirmed) {
			setErr("Please confirm you will send the EXACT amount shown.");
			return;
		}
		setSaving(true);
		try {
			await saveSender({ data: {
				id: orderId,
				senderName: normalized
			} });
			toast.success("Payment details saved!");
			await router.invalidate();
		} catch (e) {
			toast.error(e?.message ?? "Could not save sender name");
			setErr(e?.message ?? "Could not save sender name");
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase text-muted-foreground",
					children: "Order"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono text-xs",
					children: order.id
				}),
				order.product && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex items-center gap-3 rounded-lg border border-border bg-card p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-12 w-12 flex-shrink-0 overflow-hidden rounded bg-surface",
						children: order.product.signed_image_urls?.[0] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: order.product.signed_image_urls[0],
							alt: "",
							className: "h-full w-full object-cover"
						}) : null
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold text-sm",
						children: order.product.title
					}), order.variants && Object.keys(order.variants).length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-muted-foreground mt-0.5",
						children: Object.entries(order.variants).map(([k, v]) => `${k}: ${v}`).join(", ")
					})] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase text-muted-foreground",
					children: "Status"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 flex items-center gap-2",
					children: order.status === "paid" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-neon/20 px-3 py-1 text-sm font-bold text-neon",
						children: "✓ Paid — we'll be in touch"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full bg-orange/20 px-3 py-1 text-sm font-bold text-orange",
						children: "⏳ Awaiting transfer"
					})
				}),
				order.status === "pending" && !hasSender && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-4 rounded-lg border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold text-sm",
							children: "Select Payment Method"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPaymentMethod("bank_transfer"),
								className: `flex flex-col items-center justify-center rounded-lg border p-4 transition-colors ${paymentMethod === "bank_transfer" ? "border-neon bg-neon/10" : "border-border hover:border-muted-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-sm",
									children: "Bank Transfer"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setPaymentMethod("paystack"),
								className: `flex flex-col items-center justify-center rounded-lg border p-4 transition-colors ${paymentMethod === "paystack" ? "border-neon bg-neon/10" : "border-border hover:border-muted-foreground"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-sm",
									children: "Paystack"
								})
							})]
						}),
						paymentMethod === "bank_transfer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 rounded-lg border border-orange/40 bg-orange/5 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-bold text-orange",
											children: "Before you transfer"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-muted-foreground",
											children: [
												"We match your payment using ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "your bank account name" }),
												" and the",
												" ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "exact amount" }),
												". If they don't match, your order will not be auto-confirmed."
											]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
										children: "Sender's full name (as on your bank account)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: senderName,
										onChange: (e) => setSenderName(e.target.value),
										placeholder: "e.g. Barack Hussein Obama",
										className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-muted-foreground",
										children: "This MUST match the name on the bank account you are paying from."
									}),
									senderName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "We'll match: "
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: nameValid ? "font-mono text-neon" : "font-mono text-orange",
											children: normalized || "—"
										})]
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex cursor-pointer items-start gap-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: confirmed,
										onChange: (e) => setConfirmed(e.target.checked),
										className: "mt-0.5 h-4 w-4 accent-[color:var(--color-neon)]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											"I confirm I will send the ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-neon",
												children: "EXACT amount"
											}),
											" ",
											"shown below — not a rounded or different amount."
										]
									})]
								}),
								err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-md border border-destructive bg-destructive/10 p-2 text-xs text-destructive",
									children: err
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: handleSave,
									disabled: saving,
									className: "flex w-full items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon disabled:opacity-50",
									children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null, "Save & show bank details"]
								})
							]
						}),
						paymentMethod === "paystack" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 rounded-lg p-4",
							children: [err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md border border-destructive bg-destructive/10 p-2 text-xs text-destructive mb-4",
								children: err
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: async () => {
									setErr(null);
									setSaving(true);
									try {
										const res = await paystackCheckout({ data: { id: orderId } });
										window.location.href = res.authorizationUrl;
									} catch (e) {
										toast.error(e?.message ?? "Failed to initialize Paystack");
										setErr(e?.message ?? "Failed to initialize Paystack");
									} finally {
										setSaving(false);
									}
								},
								disabled: saving,
								className: "flex w-full items-center justify-center gap-2 rounded-md bg-[#0BA4DB] px-4 py-3 font-bold text-white shadow-neon disabled:opacity-50",
								children: [saving ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }) : null, "Pay with Paystack"]
							})]
						})
					]
				}),
				order.status === "pending" && hasSender && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 rounded-lg border border-orange/40 bg-orange/5 p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-orange" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold text-orange",
								children: [
									"Transfer the EXACT amount from the account of",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-neon",
										children: order.sender_name
									}),
									" to auto-confirm. Wrong name or wrong amount = manual review."
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Amount to send",
								value: formatNaira(order.unique_amount),
								copyValue: String(order.unique_amount),
								onCopy: copy,
								copied,
								accent: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Bank",
								value: settings?.bank_name || "— set in admin —",
								onCopy: copy,
								copied
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Account number",
								value: settings?.account_number || "— set in admin —",
								onCopy: copy,
								copied
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Account name",
								value: settings?.account_name || "— set in admin —",
								onCopy: copy,
								copied
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Your sender name",
								value: order.sender_name ?? "",
								onCopy: copy,
								copied
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => router.invalidate(),
						className: "mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4" }), " I've paid — check status"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-muted-foreground",
						children: "Auto-verified via Moniepoint within seconds of your transfer landing."
					})
				] })
			]
		})]
	});
}
function Field({ label, value, copyValue, onCopy, copied, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `mt-0.5 font-mono text-base ${accent ? "font-black text-neon" : "text-foreground"}`,
			children: value
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => onCopy(label, copyValue ?? value),
			className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground",
			children: copied === label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4 text-neon" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" })
		})]
	});
}
//#endregion
export { Checkout as component };
