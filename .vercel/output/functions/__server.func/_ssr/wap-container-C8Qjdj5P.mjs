import { o as __toESM } from "../_runtime.mjs";
import { r as Slot, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { l as createServerFn } from "./esm-vQsjfqSA.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CFJP7JkI.mjs";
import { t as createSsrRpc } from "./createSsrRpc-D2kMAD8G.mjs";
import { a as stringType, i as objectType, n as booleanType, r as numberType } from "../_libs/zod.mjs";
import { i as useQuery, t as useMutation } from "../_libs/tanstack__react-query.mjs";
import { D as CircleCheckBig, O as CircleAlert, d as Share, g as Pen, s as Trash2, w as Copy, y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wap-container-C8Qjdj5P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var _jsxFileName$8 = "/app/applet/src/components/ui/button.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$8,
		lineNumber: 43,
		columnNumber: 7
	}, void 0);
});
Button.displayName = "Button";
var _jsxFileName$7 = "/app/applet/src/components/ui/input.tsx";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Input.displayName = "Input";
var _jsxFileName$6 = "/app/applet/src/components/ui/textarea.tsx";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	}, void 0, false, {
		fileName: _jsxFileName$6,
		lineNumber: 8,
		columnNumber: 7
	}, void 0);
});
Textarea.displayName = "Textarea";
var _jsxFileName$5 = "/app/applet/src/components/ui/card.tsx";
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 7,
	columnNumber: 5
}, void 0));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 18,
	columnNumber: 5
}, void 0));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 25,
	columnNumber: 5
}, void 0));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 36,
	columnNumber: 5
}, void 0));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 43,
	columnNumber: 5
}, void 0));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$5,
	lineNumber: 50,
	columnNumber: 5
}, void 0));
CardFooter.displayName = "CardFooter";
var _jsxFileName$4 = "/app/applet/src/components/ui/tabs.tsx";
var Tabs = Root2;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 12,
	columnNumber: 3
}, void 0));
TabsList.displayName = List.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 27,
	columnNumber: 3
}, void 0));
TabsTrigger.displayName = Trigger.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$4,
	lineNumber: 42,
	columnNumber: 3
}, void 0));
TabsContent.displayName = Content.displayName;
var _jsxFileName$3 = "/app/applet/src/components/ui/alert.tsx";
var alertVariants = cva("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7", {
	variants: { variant: {
		default: "bg-background text-foreground",
		destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
	} },
	defaultVariants: { variant: "default" }
});
var Alert = import_react.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	role: "alert",
	className: cn(alertVariants({ variant }), className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 26,
	columnNumber: 3
}, void 0));
Alert.displayName = "Alert";
var AlertTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
	ref,
	className: cn("mb-1 font-medium leading-none tracking-tight", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 32,
	columnNumber: 5
}, void 0));
AlertTitle.displayName = "AlertTitle";
var AlertDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
	ref,
	className: cn("text-sm [&_p]:leading-relaxed", className),
	...props
}, void 0, false, {
	fileName: _jsxFileName$3,
	lineNumber: 45,
	columnNumber: 3
}, void 0));
AlertDescription.displayName = "AlertDescription";
var _jsxFileName$2 = "/app/applet/src/components/ui/badge.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 29,
		columnNumber: 10
	}, this);
}
/**
* Import a single product by URL
*/
var importSingleProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ url: stringType().url() }).parse(input)).handler(createSsrRpc("c4275a0165b1684a2dbf4778fb80790ff920c249edf3fd3c038d5b9e34c850ce"));
/**
* Import multiple products (CSV or newline-separated URLs)
*/
var importMultipleProducts = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
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
var deleteImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("848d879b39220a0cfc527be4ff7e63a586d74332655a31c53b9fdfd039562cdb"));
/**
* Update an imported product
*/
/**
* Publish an imported product to the main storefront as Draft or Active
*/
var publishImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(createSsrRpc("f43ed099a7f326eb93fa72d41a8514f9596f1825fa6c7e189132adfefca95a5e"));
/**
* Update an imported product
*/
var updateImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	id: stringType().uuid(),
	productName: stringType().optional(),
	description: stringType().optional(),
	price: numberType().optional(),
	imageUrl: stringType().optional()
}).parse(input)).handler(createSsrRpc("2d554d463cf3f9705abb64315467bc1db7743fb11106e8655b881e14aa4543c8"));
var _jsxFileName$1 = "/app/applet/src/components/wap-container.tsx";
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
			const result = await importSingleProduct({ url });
			if (!result.success) throw new Error(result.error);
			return result.importedData;
		},
		onSuccess: () => {
			setSingleUrl("");
			setSuccessMessage("Product imported successfully!");
			refetchProducts();
			setTimeout(() => setSuccessMessage(""), 3e3);
		}
	});
	const batchImportMutation = useMutation({
		mutationFn: async (content) => {
			const result = await importMultipleProducts({
				content,
				isCSV: isCsvMode
			});
			if (!result.success) throw new Error(result.error);
			return result.results;
		},
		onSuccess: (results) => {
			setSuccessMessage(`Successfully imported ${results?.filter((r) => r.status === "success").length || 0} products!`);
			setBatchContent("");
			refetchProducts();
			setTimeout(() => setSuccessMessage(""), 3e3);
		}
	});
	const deleteMutation = useMutation({
		mutationFn: async (id) => {
			const result = await deleteImportedProduct({ id });
			if (!result.success) throw new Error(result.error);
		},
		onSuccess: () => {
			refetchProducts();
		}
	});
	const updateMutation = useMutation({
		mutationFn: async (id) => {
			const result = await updateImportedProduct({
				id,
				productName: editData.product_name,
				description: editData.description,
				price: editData.price,
				imageUrl: editData.image_url
			});
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
			const result = await publishImportedProduct({ id });
			if (!result.success) throw new Error(result.error || "Failed to publish");
		},
		onSuccess: () => {
			setSuccessMessage("Product published to storefront successfully!");
			setPublishingId(null);
			refetchProducts();
			setTimeout(() => setSuccessMessage(""), 3e3);
		},
		onError: () => {
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [
			successMessage && /* @__PURE__ */ (void 0)(Alert, {
				className: "border-green-200 bg-green-50",
				children: [/* @__PURE__ */ (void 0)(CircleCheckBig, { className: "h-4 w-4 text-green-600" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 170,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)(AlertDescription, {
					className: "text-green-800",
					children: successMessage
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 171,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 169,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Tabs, {
				defaultValue: "single",
				className: "w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsList, {
						className: "grid w-full grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "single",
							children: "Single Import"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 177,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsTrigger, {
							value: "batch",
							children: "Batch Import"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 178,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 176,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "single",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Import Single Product" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 185,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Paste a product link from AliExpress, Temu, Amazon, or any e-commerce site" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 186,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 184,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
									placeholder: "https://example.com/product/...",
									value: singleUrl,
									onChange: (e) => setSingleUrl(e.target.value),
									onKeyPress: (e) => {
										if (e.key === "Enter") handleSingleImport();
									},
									disabled: singleImportMutation.isPending
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 191,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: handleSingleImport,
									disabled: !singleUrl.trim() || singleImportMutation.isPending,
									className: "w-full",
									children: [singleImportMutation.isPending && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 206,
										columnNumber: 19
									}, this), "Import Product"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 200,
									columnNumber: 15
								}, this),
								singleImportMutation.isError && /* @__PURE__ */ (void 0)(Alert, {
									className: "border-red-200 bg-red-50",
									children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "h-4 w-4 text-red-600" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 212,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(AlertDescription, {
										className: "text-red-800",
										children: singleImportMutation.error?.message || "Import failed"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 213,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 211,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 190,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 183,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 182,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TabsContent, {
						value: "batch",
						className: "space-y-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Import Multiple Products" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 226,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: "Paste multiple product URLs (one per line) or CSV data" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 227,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 225,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, {
							className: "space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: !isCsvMode ? "default" : "outline",
										onClick: () => setIsCsvMode(false),
										className: "flex-1",
										children: "URL List"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 233,
										columnNumber: 17
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
										variant: isCsvMode ? "default" : "outline",
										onClick: () => setIsCsvMode(true),
										className: "flex-1",
										children: "CSV Format"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 240,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 232,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
									placeholder: isCsvMode ? "URL,Product Name,Price\nhttps://example.com/product1,...\nhttps://example.com/product2,..." : "https://example.com/product1\nhttps://example.com/product2\nhttps://example.com/product3",
									value: batchContent,
									onChange: (e) => setBatchContent(e.target.value),
									rows: 6,
									disabled: batchImportMutation.isPending
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 249,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: handleBatchImport,
									disabled: !batchContent.trim() || batchImportMutation.isPending,
									className: "w-full",
									children: [batchImportMutation.isPending && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 267,
										columnNumber: 19
									}, this), "Import Batch"]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 261,
									columnNumber: 15
								}, this),
								batchImportMutation.isError && /* @__PURE__ */ (void 0)(Alert, {
									className: "border-red-200 bg-red-50",
									children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "h-4 w-4 text-red-600" }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 274,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)(AlertDescription, {
										className: "text-red-800",
										children: batchImportMutation.error?.message || "Import failed"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 275,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 273,
									columnNumber: 17
								}, this),
								batchImportMutation.data && /* @__PURE__ */ (void 0)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (void 0)("p", {
										className: "text-sm font-medium",
										children: "Import Results:"
									}, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 283,
										columnNumber: 19
									}, this), batchImportMutation.data.map((result, idx) => /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between text-sm p-2 bg-gray-50 rounded",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "truncate",
											children: result.url
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 286,
											columnNumber: 23
										}, this), result.status === "success" ? /* @__PURE__ */ (void 0)(Badge, {
											variant: "default",
											className: "bg-green-600",
											children: "Success"
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 288,
											columnNumber: 25
										}, this) : /* @__PURE__ */ (void 0)(Badge, {
											variant: "destructive",
											children: result.error
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 290,
											columnNumber: 25
										}, this)]
									}, idx, true, {
										fileName: _jsxFileName$1,
										lineNumber: 285,
										columnNumber: 21
									}, this))]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 282,
									columnNumber: 17
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 231,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 224,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 223,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 175,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardTitle, { children: "Imported Products" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 304,
				columnNumber: 11
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardDescription, { children: [
				products.length,
				" product",
				products.length !== 1 ? "s" : "",
				" imported"
			] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 305,
				columnNumber: 11
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 303,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CardContent, { children: isLoadingProducts ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-center py-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "h-6 w-6 animate-spin text-gray-400" }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 312,
					columnNumber: 15
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 311,
				columnNumber: 13
			}, this) : products.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-center text-gray-500 py-8",
				children: "No products imported yet"
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 315,
				columnNumber: 13
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "space-y-4",
				children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "border rounded-lg p-4 space-y-3",
					children: editingId === product.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								value: editData.product_name || "",
								onChange: (e) => setEditData({
									...editData,
									product_name: e.target.value
								}),
								placeholder: "Product name"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 323,
								columnNumber: 23
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
								value: editData.description || "",
								onChange: (e) => setEditData({
									...editData,
									description: e.target.value
								}),
								placeholder: "Description",
								rows: 3
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 330,
								columnNumber: 23
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								type: "number",
								value: editData.price || "",
								onChange: (e) => setEditData({
									...editData,
									price: parseFloat(e.target.value)
								}),
								placeholder: "Price"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 338,
								columnNumber: 23
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									onClick: saveEdit,
									disabled: updateMutation.isPending,
									className: "flex-1",
									children: "Save"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 347,
									columnNumber: 25
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
									variant: "outline",
									onClick: () => setEditingId(null),
									className: "flex-1",
									children: "Cancel"
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 354,
									columnNumber: 25
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 346,
								columnNumber: 23
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 322,
						columnNumber: 21
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex-1 space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
											className: "font-semibold",
											children: product.product_name
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 369,
											columnNumber: 29
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: "secondary",
											children: product.platform
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 370,
											columnNumber: 29
										}, this),
										/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Badge, {
											variant: product.status === "imported" ? "default" : "outline",
											children: product.status
										}, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 371,
											columnNumber: 29
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 368,
									columnNumber: 27
								}, this),
								product.description && /* @__PURE__ */ (void 0)("p", {
									className: "text-sm text-gray-600 line-clamp-2",
									children: product.description
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 379,
									columnNumber: 29
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center gap-4 text-sm",
									children: [product.price && /* @__PURE__ */ (void 0)("span", {
										className: "font-medium",
										children: ["$", product.price.toFixed(2)]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 386,
										columnNumber: 31
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										onClick: () => {
											navigator.clipboard.writeText(product.source_url);
											setSuccessMessage("URL copied to clipboard!");
											setTimeout(() => setSuccessMessage(""), 2e3);
										},
										className: "flex items-center gap-1 text-gray-500 hover:text-gray-700",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Copy, { className: "h-4 w-4" }, void 0, false, {
											fileName: _jsxFileName$1,
											lineNumber: 398,
											columnNumber: 31
										}, this), "Copy Link"]
									}, void 0, true, {
										fileName: _jsxFileName$1,
										lineNumber: 390,
										columnNumber: 29
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 384,
									columnNumber: 27
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 367,
							columnNumber: 25
						}, this), product.image_url && /* @__PURE__ */ (void 0)("img", {
							src: product.image_url,
							alt: product.product_name,
							className: "h-24 w-24 object-cover rounded border",
							onError: (e) => {
								e.target.style.display = "none";
							}
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 405,
							columnNumber: 27
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 366,
						columnNumber: 23
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex gap-2 mt-4 pt-4 border-t",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => startEditing(product),
								disabled: publishingId === product.id,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pen, { className: "h-4 w-4 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 423,
									columnNumber: 27
								}, this), "Edit"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 417,
								columnNumber: 25
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "default",
								size: "sm",
								onClick: () => publishMutation.mutate(product.id),
								disabled: publishingId === product.id || deleteMutation.isPending,
								children: [publishingId === product.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LoaderCircle, { className: "h-4 w-4 mr-1 animate-spin" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 433,
									columnNumber: 29
								}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Share, { className: "h-4 w-4 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 435,
									columnNumber: 29
								}, this), "Publish to Store"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 426,
								columnNumber: 25
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
								variant: "destructive",
								size: "sm",
								onClick: () => handleDelete(product.id),
								disabled: deleteMutation.isPending || publishingId === product.id,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4 mr-1" }, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 445,
									columnNumber: 27
								}, this), "Delete"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 439,
								columnNumber: 25
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 416,
						columnNumber: 23
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 365,
						columnNumber: 21
					}, this)
				}, product.id, false, {
					fileName: _jsxFileName$1,
					lineNumber: 319,
					columnNumber: 17
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 317,
				columnNumber: 13
			}, this) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 309,
				columnNumber: 9
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 302,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 167,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/_authenticated/admin/wap-container.tsx?tsr-split=component";
function WAPContainerPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
			className: "text-3xl font-bold tracking-tight",
			children: "WAP Container"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 5,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-2 text-base text-muted-foreground",
			children: "Import product details from AliExpress, Temu, Amazon, and other e-commerce platforms. Simply paste product links and we'll automatically extract product information, images, and pricing."
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 4,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WAPContainer, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 3,
		columnNumber: 10
	}, this);
}
//#endregion
export { WAPContainerPage as component };
