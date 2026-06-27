import { o as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { s as updateSettings } from "./admin.functions-SBQi0VJ_.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { i as Upload } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Bv7kkfwx.mjs";
import { n as getSettings } from "./shop.functions-Cp_jeWFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-8-Ysr65l.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin/settings.tsx?tsr-split=component";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "grid gap-6 sm:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				title: "Payment (Moniepoint bank transfer)",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Bank name",
						value: form.bank_name,
						onChange: (v) => setForm({
							...form,
							bank_name: v
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Account number",
						value: form.account_number,
						onChange: (v) => setForm({
							...form,
							account_number: v
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Account name",
						value: form.account_name,
						onChange: (v) => setForm({
							...form,
							account_name: v
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 84,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Section, {
				title: "Brand",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Hero slogan",
						value: form.hero_slogan,
						onChange: (v) => setForm({
							...form,
							hero_slogan: v
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "WhatsApp link (e.g. https://wa.me/2348012345678)",
						value: form.whatsapp_link,
						onChange: (v) => setForm({
							...form,
							whatsapp_link: v
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 95,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Uploader, {
						label: "Logo",
						path: form.logo_url,
						onUpload: (f) => upload("logo_url", f),
						onClear: () => setForm({
							...form,
							logo_url: ""
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Uploader, {
						label: "Homepage banner",
						path: form.banner_url,
						onUpload: (f) => upload("banner_url", f),
						onClear: () => setForm({
							...form,
							banner_url: ""
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 90,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					onClick: () => save.mutate(),
					disabled: save.isPending,
					className: "w-full rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground disabled:opacity-50",
					children: save.isPending ? "Saving…" : saved ? "✓ Saved" : "Save settings"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this), save.error && /* @__PURE__ */ (void 0)("div", {
					className: "mt-2 text-sm text-destructive",
					children: save.error.message
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 24
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 74,
		columnNumber: 10
	}, this);
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-3 rounded-xl border border-border bg-card p-4",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
			className: "font-display text-lg font-bold",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 125,
			columnNumber: 7
		}, this), children]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 124,
		columnNumber: 10
	}, this);
}
function Field({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "text-xs font-semibold uppercase text-muted-foreground",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 139,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 140,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 138,
		columnNumber: 10
	}, this);
}
function Uploader({ label, path, onUpload, onClear }) {
	const [url, setUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!path) return setUrl("");
		if (path.startsWith("http")) return setUrl(path);
		supabase.storage.from("branding").createSignedUrl(path, 3600).then(({ data }) => data?.signedUrl && setUrl(data.signedUrl));
	}, [path]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "text-xs font-semibold uppercase text-muted-foreground",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 163,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mt-1 flex items-center gap-3",
		children: [
			url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: url,
				alt: "",
				className: "h-16 w-16 rounded-md border border-border object-cover"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 16
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid h-16 w-16 place-items-center rounded-md border border-dashed border-border text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Upload, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 165,
				columnNumber: 110
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
				className: "flex-1 cursor-pointer rounded-md border border-border bg-input px-3 py-2 text-center text-xs font-semibold",
				children: ["Choose file", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
					type: "file",
					accept: "image/*",
					className: "hidden",
					onChange: (e) => e.target.files?.[0] && onUpload(e.target.files[0])
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 168,
				columnNumber: 9
			}, this),
			url && /* @__PURE__ */ (void 0)("button", {
				onClick: onClear,
				className: "text-xs text-destructive",
				children: "Clear"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 172,
				columnNumber: 17
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 164,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 162,
		columnNumber: 10
	}, this);
}
//#endregion
export { AdminSettings as component };
