import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BMtCaC7n.mjs";
import { t as createSsrRpc } from "./createSsrRpc-Ditdwy2O.mjs";
import { a as numberType, i as booleanType, o as objectType, s as stringType } from "../_libs/@mendable/firecrawl-js+[...].mjs";
import { i as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { D as CircleCheckBig, O as CircleAlert, d as Share, g as Pen, s as Trash2, w as Copy, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wap-container-DEpC7qZw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = Content.displayName;
var alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Alert = import_react.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	role: "alert",
	className: cn(alertVariants({ variant }), className),
	...props
}));
Alert.displayName = "Alert";
var AlertTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
	ref,
	className: cn("mb-1 font-medium leading-none tracking-tight", className),
	...props
}));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm [&_p]:leading-relaxed", className),
	...props
}));
AlertDescription.displayName = "AlertDescription";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
/**
* Import a single product by URL or search query
*/
var importSingleProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ url: stringType().min(1) }).parse(input)).handler(createSsrRpc("c4275a0165b1684a2dbf4778fb80790ff920c249edf3fd3c038d5b9e34c850ce"));
/**
* Import multiple products (CSV or newline-separated URLs)
*/
var importMultipleProducts = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	content: stringType(),
	isCSV: booleanType()
}).parse(input)).handler(createSsrRpc("1d555b6f33b5089490a02931e14d757e7e9e329180de1c789c170850a8aacee5"));
/**
* Fetch imported products for current user
*/
var fetchImportedProducts = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("9d760c7c0d53b991941740ccf320ae8458acfcabcf384b12ab0d8556fd5e7307"));
/**
* Delete an imported product
*/
var deleteImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("848d879b39220a0cfc527be4ff7e63a586d74332655a31c53b9fdfd039562cdb"));
/**
* Update an imported product
*/
/**
* Publish an imported product to the main storefront as Draft or Active
*/
var publishImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("f43ed099a7f326eb93fa72d41a8514f9596f1825fa6c7e189132adfefca95a5e"));
/**
* Update an imported product
*/
var updateImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	id: stringType().uuid(),
	productName: stringType().optional(),
	description: stringType().optional(),
	price: numberType().optional(),
	imageUrl: stringType().optional()
}).parse(input)).handler(createSsrRpc("2d554d463cf3f9705abb64315467bc1db7743fb11106e8655b881e14aa4543c8"));
function WAPContainer() {
	const [singleUrl, setSingleUrl] = (0, import_react.useState)("");
	const [batchContent, setBatchContent] = (0, import_react.useState)("");
	const [isCsvMode, setIsCsvMode] = (0, import_react.useState)(false);
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [editData, setEditData] = (0, import_react.useState)({});
	const [successMessage, setSuccessMessage] = (0, import_react.useState)("");
	const [publishingId, setPublishingId] = (0, import_react.useState)(null);
	const { data: productsResponse, refetch: refetchProducts, isLoading: isLoadingProducts } = useQuery({
		queryKey: ["imported-products"],
		queryFn: async () => {
			const result = await fetchImportedProducts();
			if (result.success) return result.importedProducts || [];
			throw new Error(result.error || "Failed to fetch products");
		}
	});
	const products = productsResponse || [];
	const singleImportMutation = useMutation({
		mutationFn: async (url) => {
			const result = await importSingleProduct({ data: { url } });
			if (!result.success) throw new Error(result.error);
			return result.importedData;
		},
		onSuccess: () => {
			setSingleUrl("");
			toast.success("Product imported successfully!");
			refetchProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to import product");
		}
	});
	const batchImportMutation = useMutation({
		mutationFn: async (content) => {
			const result = await importMultipleProducts({ data: {
				content,
				isCSV: isCsvMode
			} });
			if (!result.success) throw new Error(result.error);
			return result.results;
		},
		onSuccess: (results) => {
			const successCount = results?.filter((r) => r.status === "success").length || 0;
			toast.success(`Successfully imported ${successCount} products!`);
			setBatchContent("");
			refetchProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to import products");
		}
	});
	const deleteMutation = useMutation({
		mutationFn: async (id) => {
			const result = await deleteImportedProduct({ data: { id } });
			if (!result.success) throw new Error(result.error);
		},
		onSuccess: () => {
			toast.success("Product deleted successfully");
			refetchProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to delete product");
		}
	});
	const updateMutation = useMutation({
		mutationFn: async (id) => {
			const result = await updateImportedProduct({ data: {
				id,
				productName: editData.product_name,
				description: editData.description,
				price: editData.price,
				imageUrl: editData.image_url
			} });
			if (!result.success) throw new Error(result.error);
			return result.updatedData;
		},
		onSuccess: () => {
			setEditingId(null);
			setEditData({});
			refetchProducts();
		}
	});
	const publishMutation = useMutation({
		mutationFn: async (id) => {
			setPublishingId(id);
			const result = await publishImportedProduct({ data: { id } });
			if (!result.success) throw new Error(result.error || "Failed to publish");
		},
		onSuccess: () => {
			toast.success("Product published to storefront successfully!");
			setPublishingId(null);
			refetchProducts();
		},
		onError: (error) => {
			toast.error(error.message || "Failed to publish product");
			setPublishingId(null);
		}
	});
	const handleSingleImport = async () => {
		if (singleUrl.trim()) await singleImportMutation.mutateAsync(singleUrl);
	};
	const handleBatchImport = async () => {
		if (batchContent.trim()) await batchImportMutation.mutateAsync(batchContent);
	};
	const handleDelete = async (id) => {
		if (window.confirm("Are you sure you want to delete this imported product?")) await deleteMutation.mutateAsync(id);
	};
	const startEditing = (product) => {
		setEditingId(product.id);
		setEditData(product);
	};
	const saveEdit = async () => {
		if (editingId) await updateMutation.mutateAsync(editingId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			successMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
				className: "border-green-200 bg-green-50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "h-4 w-4 text-green-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
					className: "text-green-800",
					children: successMessage
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "single",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, {
						className: "grid w-full grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "single",
							children: "Single Import"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: "batch",
							children: "Batch Import"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "single",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Import Single Product" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Search via Google (Firecrawl) or paste a product link from any e-commerce site" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "Product name (e.g. iPhone 15 Pro) or URL",
									value: singleUrl,
									onChange: (e) => setSingleUrl(e.target.value),
									onKeyPress: (e) => {
										if (e.key === "Enter") handleSingleImport();
									},
									disabled: singleImportMutation.isPending
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleSingleImport,
									disabled: !singleUrl.trim() || singleImportMutation.isPending,
									className: "w-full",
									children: [singleImportMutation.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Import Product"]
								}),
								singleImportMutation.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
									className: "border-red-200 bg-red-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
										className: "text-red-800",
										children: singleImportMutation.error?.message || "Import failed"
									})]
								})
							]
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "batch",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Import Multiple Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Paste multiple product URLs (one per line) or CSV data" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: !isCsvMode ? "default" : "outline",
										onClick: () => setIsCsvMode(false),
										className: "flex-1",
										children: "URL List"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										variant: isCsvMode ? "default" : "outline",
										onClick: () => setIsCsvMode(true),
										className: "flex-1",
										children: "CSV Format"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									placeholder: isCsvMode ? "URL,Product Name,Price\nhttps://example.com/product1,...\nhttps://example.com/product2,..." : "https://example.com/product1\nhttps://example.com/product2\nhttps://example.com/product3",
									value: batchContent,
									onChange: (e) => setBatchContent(e.target.value),
									rows: 6,
									disabled: batchImportMutation.isPending
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									onClick: handleBatchImport,
									disabled: !batchContent.trim() || batchImportMutation.isPending,
									className: "w-full",
									children: [batchImportMutation.isPending && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }), "Import Batch"]
								}),
								batchImportMutation.isError && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
									className: "border-red-200 bg-red-50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "h-4 w-4 text-red-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
										className: "text-red-800",
										children: batchImportMutation.error?.message || "Import failed"
									})]
								}),
								batchImportMutation.data && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: "Import Results:"
									}), batchImportMutation.data.map((result, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between text-sm p-2 bg-gray-50 rounded",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "truncate",
											children: result.url
										}), result.status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "default",
											className: "bg-green-600",
											children: "Success"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "destructive",
											children: result.error
										})]
									}, idx))]
								})
							]
						})] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Imported Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, { children: [
				products.length,
				" product",
				products.length !== 1 ? "s" : "",
				" imported"
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: isLoadingProducts ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-center py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-6 w-6 animate-spin text-gray-400" })
			}) : products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-gray-500 py-8",
				children: "No products imported yet"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-4",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border rounded-lg p-4 space-y-3",
					children: editingId === product.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: editData.product_name || "",
								onChange: (e) => setEditData({
									...editData,
									product_name: e.target.value
								}),
								placeholder: "Product name"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: editData.description || "",
								onChange: (e) => setEditData({
									...editData,
									description: e.target.value
								}),
								placeholder: "Description",
								rows: 3
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								type: "number",
								value: editData.price || "",
								onChange: (e) => setEditData({
									...editData,
									price: parseFloat(e.target.value)
								}),
								placeholder: "Price"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									onClick: saveEdit,
									disabled: updateMutation.isPending,
									className: "flex-1",
									children: "Save"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "outline",
									onClick: () => setEditingId(null),
									className: "flex-1",
									children: "Cancel"
								})]
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-semibold",
											children: product.product_name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "secondary",
											children: product.platform
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: product.status === "imported" ? "default" : "outline",
											children: product.status
										})
									]
								}),
								product.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-gray-600 line-clamp-2",
									children: product.description
								}),
								product.raw_data && (product.raw_data.colors || product.raw_data.sizes) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-1 mt-2",
									children: [product.raw_data.colors && product.raw_data.colors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs flex gap-1 items-center flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-gray-500",
											children: "Colors:"
										}), product.raw_data.colors.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-[10px] py-0",
											children: c
										}, i))]
									}), product.raw_data.sizes && product.raw_data.sizes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs flex gap-1 items-center flex-wrap",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-gray-500",
											children: "Sizes:"
										}), product.raw_data.sizes.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
											variant: "outline",
											className: "text-[10px] py-0",
											children: s
										}, i))]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 text-sm mt-2",
									children: [product.price && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-medium",
										children: ["$", product.price.toFixed(2)]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										onClick: () => {
											navigator.clipboard.writeText(product.source_url);
											setSuccessMessage("URL copied to clipboard!");
											setTimeout(() => setSuccessMessage(""), 2e3);
										},
										className: "flex items-center gap-1 text-gray-500 hover:text-gray-700",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "h-4 w-4" }), "Copy Link"]
									})]
								})
							]
						}), product.image_url && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.image_url,
							alt: product.product_name,
							className: "h-24 w-24 object-cover rounded border",
							onError: (e) => {
								e.target.style.display = "none";
							}
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2 mt-4 pt-4 border-t",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => startEditing(product),
								disabled: publishingId === product.id,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-4 w-4 mr-1" }), "Edit"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "default",
								size: "sm",
								onClick: () => publishMutation.mutate(product.id),
								disabled: publishingId === product.id || deleteMutation.isPending,
								children: [publishingId === product.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 mr-1 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share, { className: "h-4 w-4 mr-1" }), "Publish to Store"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "destructive",
								size: "sm",
								onClick: () => handleDelete(product.id),
								disabled: deleteMutation.isPending || publishingId === product.id,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4 mr-1" }), "Delete"]
							})
						]
					})] })
				}, product.id))
			}) })] })
		]
	});
}
function WAPContainerPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-bold tracking-tight",
			children: "WAP Container"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-base text-muted-foreground",
			children: "Import product details from AliExpress, Temu, Amazon, and other e-commerce platforms. Simply paste product links and we'll automatically extract product information, images, and pricing."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WAPContainer, {})]
	});
}
//#endregion
export { WAPContainerPage as component };
