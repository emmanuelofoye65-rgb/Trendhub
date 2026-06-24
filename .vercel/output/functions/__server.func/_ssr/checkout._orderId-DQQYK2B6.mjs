import { o as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { g as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { n as queryOptions, r as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { a as TriangleAlert, k as Check, w as Copy, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as getSettings } from "./shop.functions-Cp_jeWFp.mjs";
import { a as setOrderSenderName, i as normalizeSenderName, r as getOrderById } from "./orders.functions-CcdhgWnp.mjs";
import { t as Route } from "./checkout._orderId-CXxdkbjv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout._orderId-DQQYK2B6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/checkout.$orderId.tsx?tsr-split=component";
function Checkout() {
	const { orderId } = Route.useParams();
	const router = useRouter();
	const saveSender = useServerFn(setOrderSenderName);
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
	if (!order) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-md p-8 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "text-xl font-bold",
			children: "Order not found"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
			to: "/",
			className: "text-neon underline",
			children: "Back home"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 12
	}, this);
	const copy = async (label, value) => {
		await navigator.clipboard.writeText(value);
		setCopied(label);
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
			await router.invalidate();
		} catch (e) {
			setErr(e?.message ?? "Could not save sender name");
		} finally {
			setSaving(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto max-w-2xl px-4 py-8",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-6",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "text-xs uppercase text-muted-foreground",
				children: "Order"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 80,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "font-mono text-xs",
				children: order.id
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 81,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 79,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "rounded-xl border border-border bg-card p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-xs font-semibold uppercase text-muted-foreground",
					children: "Status"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-1 flex items-center gap-2",
					children: order.status === "paid" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-neon/20 px-3 py-1 text-sm font-bold text-neon",
						children: "✓ Paid — we'll be in touch"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 87,
						columnNumber: 38
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full bg-orange/20 px-3 py-1 text-sm font-bold text-orange",
						children: "⏳ Awaiting transfer"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 23
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 86,
					columnNumber: 9
				}, this),
				order.status === "pending" && !hasSender && /* @__PURE__ */ (void 0)("div", {
					className: "mt-5 space-y-4 rounded-lg border border-orange/40 bg-orange/5 p-4",
					children: [
						/* @__PURE__ */ (void 0)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-orange" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 96,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "space-y-1",
								children: [/* @__PURE__ */ (void 0)("p", {
									className: "text-sm font-bold text-orange",
									children: "Before you transfer"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-muted-foreground",
									children: [
										"We match your payment using ",
										/* @__PURE__ */ (void 0)("strong", { children: "your bank account name" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 100,
											columnNumber: 47
										}, this),
										" and the",
										" ",
										/* @__PURE__ */ (void 0)("strong", { children: "exact amount" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 101,
											columnNumber: 19
										}, this),
										". If they don't match, your order will not be auto-confirmed."
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 97,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 95,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [
							/* @__PURE__ */ (void 0)("label", {
								className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
								children: "Sender's full name (as on your bank account)"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("input", {
								value: senderName,
								onChange: (e) => setSenderName(e.target.value),
								placeholder: "e.g. Barack Hussein Obama",
								className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 111,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-[11px] text-muted-foreground",
								children: "This MUST match the name on the bank account you are paying from."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 112,
								columnNumber: 15
							}, this),
							senderName && /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-[11px]",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-muted-foreground",
									children: "We'll match: "
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 116,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: nameValid ? "font-mono text-neon" : "font-mono text-orange",
									children: normalized || "—"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 115,
								columnNumber: 30
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (void 0)("label", {
							className: "flex cursor-pointer items-start gap-2 text-xs",
							children: [/* @__PURE__ */ (void 0)("input", {
								type: "checkbox",
								checked: confirmed,
								onChange: (e) => setConfirmed(e.target.checked),
								className: "mt-0.5 h-4 w-4 accent-[color:var(--color-neon)]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 124,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "text-muted-foreground",
								children: [
									"I confirm I will send the ",
									/* @__PURE__ */ (void 0)("strong", {
										className: "text-neon",
										children: "EXACT amount"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 126,
										columnNumber: 43
									}, this),
									" ",
									"shown below — not a rounded or different amount."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 13
						}, this),
						err && /* @__PURE__ */ (void 0)("div", {
							className: "rounded-md border border-destructive bg-destructive/10 p-2 text-xs text-destructive",
							children: err
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 21
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							onClick: handleSave,
							disabled: saving,
							className: "flex w-full items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon disabled:opacity-50",
							children: [saving ? /* @__PURE__ */ (void 0)(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 25
							}, this) : null, "Save & show bank details"]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 135,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 94,
					columnNumber: 54
				}, this),
				order.status === "pending" && hasSender && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-5 rounded-lg border border-orange/40 bg-orange/5 p-4",
						children: /* @__PURE__ */ (void 0)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (void 0)(TriangleAlert, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-orange" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "text-sm font-semibold text-orange",
								children: [
									"Transfer the EXACT amount from the account of",
									" ",
									/* @__PURE__ */ (void 0)("span", {
										className: "text-neon",
										children: order.sender_name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 19
									}, this),
									" to auto-confirm. Wrong name or wrong amount = manual review."
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 142,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("div", {
						className: "mt-5 space-y-3",
						children: [
							/* @__PURE__ */ (void 0)(Field, {
								label: "Amount to send",
								value: formatNaira(order.unique_amount),
								copyValue: String(order.unique_amount),
								onCopy: copy,
								copied,
								accent: true
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 154,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Field, {
								label: "Bank",
								value: settings?.bank_name || "— set in admin —",
								onCopy: copy,
								copied
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Field, {
								label: "Account number",
								value: settings?.account_number || "— set in admin —",
								onCopy: copy,
								copied
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Field, {
								label: "Account name",
								value: settings?.account_name || "— set in admin —",
								onCopy: copy,
								copied
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 157,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)(Field, {
								label: "Your sender name",
								value: order.sender_name ?? "",
								onCopy: copy,
								copied
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("button", {
						onClick: () => router.invalidate(),
						className: "mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon",
						children: [/* @__PURE__ */ (void 0)(LoaderCircle, { className: "h-4 w-4" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 162,
							columnNumber: 15
						}, this), " I've paid — check status"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (void 0)("p", {
						className: "mt-3 text-center text-xs text-muted-foreground",
						children: "Auto-verified via Moniepoint within seconds of your transfer landing."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 165,
						columnNumber: 13
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 53
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 84,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 78,
		columnNumber: 10
	}, this);
}
function Field({ label, value, copyValue, onCopy, copied, accent }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex items-center justify-between rounded-md border border-border bg-surface px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 189,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: `mt-0.5 font-mono text-base ${accent ? "font-black text-neon" : "text-foreground"}`,
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 192,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 188,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
			onClick: () => onCopy(label, copyValue ?? value),
			className: "rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground",
			children: copied === label ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "h-4 w-4 text-neon" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 29
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "h-4 w-4" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 197,
				columnNumber: 71
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 196,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 187,
		columnNumber: 10
	}, this);
}
//#endregion
export { Checkout as component };
