import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as useServerFn } from "./useServerFn-CrZF2pjq.mjs";
import { c as upsertProduct, i as deleteProduct, r as adminListProducts } from "./admin.functions-BjAkHt1i.mjs";
import { t as formatNaira } from "./format-CsE7_rB9.mjs";
import { i as useQuery, o as useQueryClient, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as Star, h as Pencil, i as Upload, m as Plus, n as X, s as Trash2, x as GripVertical } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-Dj_uQScw.mjs";
import { r as listCategories } from "./shop.functions-DVYv__ag.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-DfwjFXS3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	title: "",
	slug: "",
	description: "",
	price_naira: 0,
	category_id: null,
	image_urls: [],
	is_trending: false,
	is_active: true,
	stock: 0,
	has_variants: false,
	variants: []
};
var ALL_COLORS = [
	"Black",
	"White",
	"Red",
	"Blue",
	"Green",
	"Yellow",
	"Orange",
	"Purple",
	"Pink",
	"Brown",
	"Grey",
	"Silver",
	"Gold",
	"Navy",
	"Beige",
	"Maroon",
	"Teal",
	"Olive",
	"Cyan",
	"Magenta"
].sort();
var ALL_SIZES = [
	"XS",
	"S",
	"M",
	"L",
	"XL",
	"XXL",
	"3XL",
	"4XL",
	"One Size",
	"28",
	"30",
	"32",
	"34",
	"36",
	"38",
	"40",
	"42",
	"44",
	"46"
];
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
	const [colorSearch, setColorSearch] = (0, import_react.useState)("");
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
			toast.success("Product saved successfully!");
			setEditing(null);
		},
		onError: (err) => {
			toast.error(err.message || "Failed to save product");
		}
	});
	const del = useMutation({
		mutationFn: (id) => delFn({ data: { id } }),
		onSuccess: () => {
			qc.invalidateQueries({ queryKey: ["admin", "products"] });
			toast.success("Product deleted successfully!");
		},
		onError: (err) => {
			toast.error(err.message || "Failed to delete product");
		}
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 flex justify-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => setEditing({ ...empty }),
				className: "flex items-center gap-2 rounded-md bg-neon px-3 py-2 text-sm font-bold text-neon-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " New product"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto rounded-xl border border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-surface text-xs uppercase text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 text-left",
							children: "Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 text-left",
							children: "Price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 text-left",
							children: "Category"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 text-left",
							children: "Stock"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 text-left",
							children: "Status"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: "px-3 py-2" })
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [(products ?? []).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-10 w-10 overflow-hidden rounded bg-surface",
									children: p.signed_image_urls?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.signed_image_urls[0],
										alt: "",
										className: "h-full w-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: p.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: p.slug
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: formatNaira(p.price_naira)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 text-muted-foreground",
							children: p.categories?.name ?? "—"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: p.stock
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2",
							children: [p.is_active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-neon",
								children: "Live"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Hidden"
							}), p.is_trending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-orange",
								children: "Trending"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2 text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
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
									stock: p.stock,
									has_variants: p.variants && p.variants.length > 0,
									variants: p.variants || []
								}),
								className: "rounded p-1 hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => confirm(`Delete ${p.title}?`) && del.mutate(p.id),
								className: "rounded p-1 text-destructive hover:bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})
					]
				}, p.id)), (products ?? []).length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					colSpan: 6,
					className: "px-3 py-10 text-center text-muted-foreground",
					children: "No products yet. Create your first one."
				}) })] })]
			})
		}),
		editing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed inset-0 z-50 flex items-end justify-center bg-black/70 sm:items-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-card p-5 sm:rounded-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: editing.id ? "Edit product" : "New product"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setEditing(null),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "Title",
							value: editing.title,
							onChange: (v) => setEditing({
								...editing,
								title: v
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							label: "Slug (lowercase, hyphens)",
							value: editing.slug,
							onChange: (v) => setEditing({
								...editing,
								slug: v.toLowerCase().replace(/[^a-z0-9-]/g, "-")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase text-muted-foreground",
							children: "Description"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: editing.description,
							onChange: (e) => setEditing({
								...editing,
								description: e.target.value
							}),
							rows: 4,
							className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Price (₦)",
								type: "number",
								value: String(editing.price_naira),
								onChange: (v) => setEditing({
									...editing,
									price_naira: Number(v) || 0
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								label: "Stock",
								type: "number",
								value: String(editing.stock),
								onChange: (v) => setEditing({
									...editing,
									stock: Number(v) || 0
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase text-muted-foreground",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: editing.category_id ?? "",
							onChange: (e) => setEditing({
								...editing,
								category_id: e.target.value || null
							}),
							className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "— none —"
							}), categories?.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.name
							}, c.id))]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 flex-wrap",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: editing.is_trending,
										onChange: (e) => setEditing({
											...editing,
											is_trending: e.target.checked
										})
									}), "Trending"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: editing.is_active,
										onChange: (e) => setEditing({
											...editing,
											is_active: e.target.checked
										})
									}), "Active"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: editing.has_variants,
										onChange: (e) => setEditing({
											...editing,
											has_variants: e.target.checked,
											variants: e.target.checked ? editing.variants?.length ? editing.variants : [{
												name: "Color",
												options: []
											}] : []
										})
									}), "Has Variants"]
								})
							]
						}),
						editing.has_variants && (() => {
							const colors = editing.variants?.find((v) => v.name === "Color")?.options || [];
							const sizes = editing.variants?.find((v) => v.name === "Size")?.options || [];
							const toggleVariant = (name, option) => {
								let nextVariants = [...editing.variants || []];
								let varType = nextVariants.find((v) => v.name === name);
								if (!varType) {
									varType = {
										name,
										options: []
									};
									nextVariants.push(varType);
								}
								if (varType.options.includes(option)) varType.options = varType.options.filter((o) => o !== option);
								else varType.options.push(option);
								setEditing({
									...editing,
									variants: nextVariants
								});
							};
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-md border border-border p-3 space-y-4 bg-surface",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "text-xs font-semibold uppercase text-muted-foreground",
												children: "Colors"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												placeholder: "Search colors...",
												value: colorSearch,
												onChange: (e) => setColorSearch(e.target.value),
												className: "w-full rounded-md border border-input bg-input px-3 py-1.5 text-xs"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-40 overflow-y-auto space-y-1 rounded border border-input bg-card p-2",
												children: ALL_COLORS.filter((c) => c.toLowerCase().includes(colorSearch.toLowerCase())).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
													className: "flex items-center gap-2 text-sm",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "checkbox",
														checked: colors.includes(c),
														onChange: () => toggleVariant("Color", c)
													}), c]
												}, c))
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 space-y-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											className: "text-xs font-semibold uppercase text-muted-foreground",
											children: "Sizes"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-[188px] overflow-y-auto space-y-1 rounded border border-input bg-card p-2",
											children: ALL_SIZES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
												className: "flex items-center gap-2 text-sm",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "checkbox",
													checked: sizes.includes(s),
													onChange: () => toggleVariant("Size", s)
												}), s]
											}, s))
										})]
									})]
								})
							});
						})(),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-xs font-semibold uppercase text-muted-foreground",
								children: [
									"Gallery (",
									editing.image_urls.length,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground",
								children: "Drag to reorder · first image is the cover"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 grid grid-cols-4 gap-2 sm:grid-cols-5",
							children: [editing.image_urls.map((path, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageThumb, { path }),
									i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "absolute left-1 top-1 flex items-center gap-0.5 rounded bg-neon/90 px-1 py-0.5 text-[9px] font-bold text-neon-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-2.5 w-2.5" }), " COVER"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-0 flex items-center justify-between bg-black/60 px-1 py-0.5 opacity-0 transition group-hover:opacity-100",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripVertical, { className: "h-3 w-3 text-white/80" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-0.5",
											children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => reorderImages(i, i - 1),
												className: "rounded bg-white/20 px-1 text-[10px] text-white hover:bg-white/40",
												"aria-label": "Move left",
												children: "◀"
											}), i < editing.image_urls.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => reorderImages(i, i + 1),
												className: "rounded bg-white/20 px-1 text-[10px] text-white hover:bg-white/40",
												"aria-label": "Move right",
												children: "▶"
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setEditing({
											...editing,
											image_urls: editing.image_urls.filter((_, idx) => idx !== i)
										}),
										className: "absolute right-0.5 top-0.5 rounded bg-destructive/90 p-0.5 hover:bg-destructive",
										"aria-label": "Remove image",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3 w-3 text-white" })
									})
								]
							}, `${path}-${i}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex aspect-square cursor-pointer flex-col items-center justify-center gap-1 rounded-md border-2 border-dashed border-border text-muted-foreground hover:border-neon hover:text-neon",
								children: [uploading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs",
									children: "Uploading…"
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px]",
									children: "Add"
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									multiple: true,
									accept: "image/*",
									className: "hidden",
									disabled: uploading,
									onChange: (e) => {
										handleUpload(e.target.files);
										e.target.value = "";
									}
								})]
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: save.isPending,
							onClick: () => save.mutate(editing),
							className: "mt-2 w-full rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground disabled:opacity-50",
							children: save.isPending ? "Saving…" : "Save product"
						}),
						save.error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-destructive",
							children: save.error.message
						})
					]
				})]
			})
		})
	] });
}
function Input({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "text-xs font-semibold uppercase text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		value,
		onChange: (e) => onChange(e.target.value),
		className: "mt-1 w-full rounded-md border border-input bg-input px-3 py-2 text-sm"
	})] });
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
	return url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: url,
		alt: "",
		className: "h-full w-full object-cover"
	}) : null;
}
//#endregion
export { AdminProducts as component };
