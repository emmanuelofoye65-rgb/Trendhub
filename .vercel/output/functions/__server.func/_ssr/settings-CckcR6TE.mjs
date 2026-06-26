import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { s as updateSettings } from "./admin.functions-BjAkHt1i.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { i as Upload } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-Dj_uQScw.mjs";
import { n as getSettings } from "./shop.functions-DVYv__ag.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CckcR6TE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminSettings() {
	const qc = useQueryClient();
	const getFn = useServerFn(getSettings);
	const saveFn = useServerFn(updateSettings);
	const { data } = useQuery({
		queryKey: ["settings"],
		queryFn: () => getFn()
	});
	const [form, setForm] = (0, import_react.useState)({
		bank_name: "",
		account_number: "",
		account_name: "",
		whatsapp_link: "",
		hero_slogan: "",
		logo_url: "",
		banner_url: ""
	});
	const [saved, setSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (data) setForm({
			bank_name: data.bank_name ?? "",
			account_number: data.account_number ?? "",
			account_name: data.account_name ?? "",
			whatsapp_link: data.whatsapp_link ?? "",
			hero_slogan: data.hero_slogan ?? "",
			logo_url: data.logo_url ?? "",
			banner_url: data.banner_url ?? ""
		});
	}, [data]);
	const save = useMutation({
		mutationFn: () => saveFn({ data: form }),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["settings"] });
			setSaved(true);
			setTimeout(() => setSaved(false), 2e3);
		}
	});
	async function upload(field, file) {
		const ext = file.name.split(".").pop() || "jpg";
		const path = `${field}-${Date.now()}.${ext}`;
		const { error } = await supabase.storage.from("branding").upload(path, file, {
			contentType: file.type,
			upsert: true
		});
		if (!error) setForm((f) => ({
			...f,
			[field]: path
		}));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Payment (Moniepoint bank transfer)",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Bank name",
						value: form.bank_name,
						onChange: (v) => setForm({
							...form,
							bank_name: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Account number",
						value: form.account_number,
						onChange: (v) => setForm({
							...form,
							account_number: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Account name",
						value: form.account_name,
						onChange: (v) => setForm({
							...form,
							account_name: v
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
				title: "Brand",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Hero slogan",
						value: form.hero_slogan,
						onChange: (v) => setForm({
							...form,
							hero_slogan: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "WhatsApp link (e.g. https://wa.me/2348012345678)",
						value: form.whatsapp_link,
						onChange: (v) => setForm({
							...form,
							whatsapp_link: v
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Uploader, {
						label: "Logo",
						path: form.logo_url,
						onUpload: (f) => upload("logo_url", f),
						onClear: () => setForm({
							...form,
							logo_url: ""
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Uploader, {
						label: "Homepage banner",
						path: form.banner_url,
						onUpload: (f) => upload("banner_url", f),
						onClear: () => setForm({
							...form,
							banner_url: ""
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => save.mutate(),
					disabled: save.isPending,
					className: "w-full rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground disabled:opacity-50",
					children: save.isPending ? "Saving…" : saved ? "✓ Saved" : "Save settings"
				}), save.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-sm text-destructive",
					children: save.error.message
				})]
			})
		]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3 rounded-xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-lg font-bold",
			children: title
		}), children]
	});
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
	})] });
}
function Uploader({ label, path, onUpload, onClear }) {
	const [url, setUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!path) return setUrl("");
		if (path.startsWith("http")) return setUrl(path);
		supabase.storage.from("branding").createSignedUrl(path, 3600).then(({ data }) => data?.signedUrl && setUrl(data.signedUrl));
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-1 flex items-center gap-3",
		children: [
			url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: url,
				alt: "",
				className: "h-16 w-16 rounded-md border border-border object-cover"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-16 w-16 place-items-center rounded-md border border-dashed border-border text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-4 w-4" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "flex-1 cursor-pointer rounded-md border border-border bg-input px-3 py-2 text-center text-xs font-semibold",
				children: ["Choose file", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "file",
					accept: "image/*",
					className: "hidden",
					onChange: (e) => e.target.files?.[0] && onUpload(e.target.files[0])
				})]
			}),
			url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClear,
				className: "text-xs text-destructive",
				children: "Clear"
			})
		]
	})] });
}
//#endregion
export { AdminSettings as component };
