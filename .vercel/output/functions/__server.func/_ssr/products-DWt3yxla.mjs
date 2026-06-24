import { o as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { c as upsertProduct, i as deleteProduct, r as adminListProducts } from "./admin.functions-SBQi0VJ_.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as Star, h as Pencil, i as Upload, m as Plus, n as X, s as Trash2, x as GripVertical } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Bv7kkfwx.mjs";
import { r as listCategories } from "./shop.functions-Cp_jeWFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DWt3yxla.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin/products.tsx?tsr-split=component";
var empty = {
	title: "",
	slug: "",
	description: "",
	price_naira: 0,
	category_id: null,
	image_urls: [],
	is_trending: false,
	is_active: true,
	stock: 0
};
function AdminProducts() {
	const qc = useQueryClient();
	const listFn = useServerFn(adminListProducts);
	const upsertFn = useServerFn(upsertProduct);
	const delFn = useServerFn(deleteProduct);
	const { data: products } = useQuery({
		queryKey: ["admin", "products"],
		queryFn: () => listFn()
	});
	const { data: categories } = useQuery({
		queryKey: ["categories"],
		queryFn: () => listCategories()
	});
	const [editing, setEditing] = (0, import_react.useState)(null);
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [dragIdx, setDragIdx] = (0, import_react.useState)(null);
	const [overIdx, setOverIdx] = (0, import_react.useState)(null);
	function reorderImages(from, to) {
		if (!editing || from === to) return;
		const next = [...editing.image_urls];
		const [moved] = next.splice(from, 1);
		next.splice(to, 0, moved);
		setEditing({
			...editing,
			image_urls: next
		});
	}
	const save = useMutation({
		mutationFn: (data) => upsertFn({ data }),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["admin", "products"] });
			qc.invalidateQueries({ queryKey: ["products"] });
			setEditing(null);
		}
	});
	const del = useMutation({
		mutationFn: (id) => delFn({ data: { id } }),
		onSuccess: () => qc.invalidateQueries({ queryKey: ["admin", "products"] })
	});
	async function handleUpload(files) {
		if (!files || !editing) return;
		setUploading(true);
		const paths = [];
		for (const file of Array.from(files)) {
			const ext = file.name.split(".").pop() || "jpg";
			const path = `${crypto.randomUUID()}.${ext}`;
			const { error } = await supabase.storage.from("product-images").upload(path, file, {
				contentType: file.type,
				upsert: false
			});
			if (!error) paths.push(path);
		}
		setEditing({
			...editing,
			image_urls: [...editing.image_urls, ...paths]
		});
		setUploading(false);
	}
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mb-4 flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => setEditing({ ...empty }),
				className: "flex items-center gap-2 rounded-md bg-neon px-3 py-2 text-sm font-bold text-neon-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-4 w-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 11
				}, this), " New product"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 111,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 110,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "overflow-x-auto rounded-xl border border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
					className: "bg-surface text-xs uppercase text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-3 py-2 text-left",
							children: "Product"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-3 py-2 text-left",
							children: "Price"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 123,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-3 py-2 text-left",
							children: "Category"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-3 py-2 text-left",
							children: "Stock"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 125,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
							className: "px-3 py-2 text-left",
							children: "Status"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "px-3 py-2" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 127,
							columnNumber: 15
						}, this)
					] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 121,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 120,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [(products ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "h-10 w-10 overflow-hidden rounded bg-surface",
									children: p.signed_image_urls?.[0] && /* @__PURE__ */ (void 0)("img", {
										src: p.signed_image_urls[0],
										alt: "",
										className: "h-full w-full object-cover"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 135,
										columnNumber: 52
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 21
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "font-semibold",
									children: p.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 23
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "text-xs text-muted-foreground",
									children: p.slug
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 139,
									columnNumber: 23
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 133,
								columnNumber: 19
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 132,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2",
							children: formatNaira(p.price_naira)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2 text-muted-foreground",
							children: p.categories?.name ?? "—"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 144,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2",
							children: p.stock
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 145,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2",
							children: [p.is_active ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-neon",
								children: "Live"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 34
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-muted-foreground",
								children: "Hidden"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 76
							}, this), p.is_trending && /* @__PURE__ */ (void 0)("span", {
								className: "ml-2 text-orange",
								children: "Trending"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 37
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 17
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
							className: "px-3 py-2 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => setEditing({
									id: p.id,
									title: p.title,
									slug: p.slug,
									description: p.description ?? "",
									price_naira: p.price_naira,
									category_id: p.category_id,
									image_urls: p.image_urls ?? [],
									is_trending: p.is_trending,
									is_active: p.is_active,
									stock: p.stock
								}),
								className: "rounded p-1 hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 163,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								onClick: () => confirm(`Delete ${p.title}?`) && del.mutate(p.id),
								className: "rounded p-1 text-destructive hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 166,
									columnNumber: 21
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 165,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 17
						}, this)
					]
				}, p.id, true, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 47
				}, this)), (products ?? []).length === 0 && /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
					colSpan: 6,
					className: "px-3 py-10 text-center text-muted-foreground",
					children: "No products yet. Create your first one."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 171,
					columnNumber: 17
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 47
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 119,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 118,
			columnNumber: 7
		}, this),
		editing && /* @__PURE__ */ (void 0)("div", {
			className: "fixed inset-0 z-50 flex items-end justify-center bg-black/70 sm:items-center",
			children: /* @__PURE__ */ (void 0)("div", {
				className: "max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-card p-5 sm:rounded-2xl",
				children: [/* @__PURE__ */ (void 0)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (void 0)("h3", {
						className: "font-display text-xl font-bold",
						children: editing.id ? "Edit product" : "New product"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 15
					}, this), /* @__PURE__ */ (void 0)("button", {
						onClick: () => setEditing(null),
						children: /* @__PURE__ */ (void 0)(X, { className: "h-5 w-5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 186,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 185,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 13
				}, this), /* @__PURE__ */ (void 0)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (void 0)(Input, {
							label: "Title",
							value: editing.title,
							onChange: (v) => setEditing({
								...editing,
								title: v
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 190,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)(Input, {
							label: "Slug (lowercase, hyphens)",
							value: editing.slug,
							onChange: (v) => setEditing({
								...editing,
								slug: v.toLowerCase().replace(/[^a-z0-9-]/g, "-")
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 194,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
							className: "text-xs font-semibold uppercase text-muted-foreground",
							children: "Description"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 199,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("textarea", {
							value: editing.description,
							onChange: (e) => setEditing({
								...editing,
								description: e.target.value
							}),
							rows: 4,
							className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 202,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (void 0)(Input, {
								label: "Price (₦)",
								type: "number",
								value: String(editing.price_naira),
								onChange: (v) => setEditing({
									...editing,
									price_naira: Number(v) || 0
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 208,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)(Input, {
								label: "Stock",
								type: "number",
								value: String(editing.stock),
								onChange: (v) => setEditing({
									...editing,
									stock: Number(v) || 0
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 212,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 207,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
							className: "text-xs font-semibold uppercase text-muted-foreground",
							children: "Category"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 218,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("select", {
							value: editing.category_id ?? "",
							onChange: (e) => setEditing({
								...editing,
								category_id: e.target.value || null
							}),
							className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (void 0)("option", {
								value: "",
								children: "— none —"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 223,
								columnNumber: 19
							}, this), categories?.map((c) => /* @__PURE__ */ (void 0)("option", {
								value: c.id,
								children: c.name
							}, c.id, false, {
								fileName: _jsxFileName,
								lineNumber: 224,
								columnNumber: 41
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 219,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 217,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (void 0)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (void 0)("input", {
									type: "checkbox",
									checked: editing.is_trending,
									onChange: (e) => setEditing({
										...editing,
										is_trending: e.target.checked
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 231,
									columnNumber: 19
								}, this), "Trending"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 230,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (void 0)("input", {
									type: "checkbox",
									checked: editing.is_active,
									onChange: (e) => setEditing({
										...editing,
										is_active: e.target.checked
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 238,
									columnNumber: 19
								}, this), "Active"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 237,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 229,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (void 0)("label", {
								className: "text-xs font-semibold uppercase text-muted-foreground",
								children: [
									"Gallery (",
									editing.image_urls.length,
									")"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 247,
								columnNumber: 19
							}, this), /* @__PURE__ */ (void 0)("span", {
								className: "text-[10px] text-muted-foreground",
								children: "Drag to reorder · first image is the cover"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 250,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 246,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "mt-2 grid grid-cols-4 gap-2 sm:grid-cols-5",
							children: [editing.image_urls.map((path, i) => /* @__PURE__ */ (void 0)("div", {
								draggable: true,
								onDragStart: (e) => {
									setDragIdx(i);
									e.dataTransfer.effectAllowed = "move";
								},
								onDragOver: (e) => {
									e.preventDefault();
									e.dataTransfer.dropEffect = "move";
									if (overIdx !== i) setOverIdx(i);
								},
								onDragLeave: () => setOverIdx((o) => o === i ? null : o),
								onDrop: (e) => {
									e.preventDefault();
									if (dragIdx !== null) reorderImages(dragIdx, i);
									setDragIdx(null);
									setOverIdx(null);
								},
								onDragEnd: () => {
									setDragIdx(null);
									setOverIdx(null);
								},
								className: `group relative aspect-square cursor-move overflow-hidden rounded-md border bg-surface transition ${overIdx === i ? "border-neon ring-2 ring-neon" : "border-border"} ${dragIdx === i ? "opacity-40" : ""}`,
								children: [
									/* @__PURE__ */ (void 0)(ImageThumb, { path }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 271,
										columnNumber: 23
									}, this),
									i === 0 && /* @__PURE__ */ (void 0)("span", {
										className: "absolute left-1 top-1 flex items-center gap-0.5 rounded bg-neon/90 px-1 py-0.5 text-[9px] font-bold text-neon-foreground",
										children: [/* @__PURE__ */ (void 0)(Star, { className: "h-2.5 w-2.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 273,
											columnNumber: 27
										}, this), " COVER"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 272,
										columnNumber: 35
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/60 px-1 py-0.5 opacity-0 transition group-hover:opacity-100",
										children: [/* @__PURE__ */ (void 0)(GripVertical, { className: "h-3 w-3 text-white/80" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 276,
											columnNumber: 25
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex gap-0.5",
											children: [i > 0 && /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => reorderImages(i, i - 1),
												className: "rounded bg-white/20 px-1 text-[10px] text-white hover:bg-white/40",
												"aria-label": "Move left",
												children: "◀"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 278,
												columnNumber: 37
											}, this), i < editing.image_urls.length - 1 && /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => reorderImages(i, i + 1),
												className: "rounded bg-white/20 px-1 text-[10px] text-white hover:bg-white/40",
												"aria-label": "Move right",
												children: "▶"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 281,
												columnNumber: 65
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 277,
											columnNumber: 25
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 275,
										columnNumber: 23
									}, this),
									/* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setEditing({
											...editing,
											image_urls: editing.image_urls.filter((_, idx) => idx !== i)
										}),
										className: "absolute right-0.5 top-0.5 rounded bg-destructive/90 p-0.5 hover:bg-destructive",
										"aria-label": "Remove image",
										children: /* @__PURE__ */ (void 0)(X, { className: "h-3 w-3 text-white" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 290,
											columnNumber: 25
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 286,
										columnNumber: 23
									}, this)
								]
							}, `${path}-${i}`, true, {
								fileName: _jsxFileName,
								lineNumber: 255,
								columnNumber: 56
							}, this)), /* @__PURE__ */ (void 0)("label", {
								className: "flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border text-muted-foreground hover:border-neon hover:text-neon",
								children: [uploading ? /* @__PURE__ */ (void 0)("span", {
									className: "text-xs",
									children: "Uploading…"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 294,
									columnNumber: 34
								}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)(Upload, { className: "h-5 w-5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 295,
									columnNumber: 25
								}, this), /* @__PURE__ */ (void 0)("span", {
									className: "text-[10px]",
									children: "Add"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 296,
									columnNumber: 25
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 294,
									columnNumber: 80
								}, this), /* @__PURE__ */ (void 0)("input", {
									type: "file",
									multiple: true,
									accept: "image/*",
									className: "hidden",
									disabled: uploading,
									onChange: (e) => {
										handleUpload(e.target.files);
										e.target.value = "";
									}
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 298,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 293,
								columnNumber: 19
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 254,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 245,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (void 0)("button", {
							disabled: save.isPending,
							onClick: () => save.mutate(editing),
							className: "mt-2 w-full rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground disabled:opacity-50",
							children: save.isPending ? "Saving…" : "Save product"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 305,
							columnNumber: 15
						}, this),
						save.error && /* @__PURE__ */ (void 0)("div", {
							className: "text-sm text-destructive",
							children: save.error.message
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 308,
							columnNumber: 30
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 189,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 180,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 179,
			columnNumber: 19
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 109,
		columnNumber: 10
	}, this);
}
function Input({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: "text-xs font-semibold uppercase text-muted-foreground",
		children: label
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 326,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type,
		value,
		onChange: (e) => onChange(e.target.value),
		className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 327,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 325,
		columnNumber: 10
	}, this);
}
function ImageThumb({ path }) {
	const [url, setUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!path) return;
		if (path.startsWith("http")) {
			setUrl(path);
			return;
		}
		supabase.storage.from("product-images").createSignedUrl(path, 3600).then(({ data }) => data?.signedUrl && setUrl(data.signedUrl));
	}, [path]);
	return url ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
		src: url,
		alt: "",
		className: "h-full w-full object-cover"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 346,
		columnNumber: 16
	}, this) : null;
}
//#endregion
export { AdminProducts as component };
