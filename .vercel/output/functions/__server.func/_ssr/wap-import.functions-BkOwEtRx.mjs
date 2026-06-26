import { l as createServerFn } from "./esm-Dova13aH.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-BMtCaC7n.mjs";
import { a as numberType, i as booleanType, o as objectType, r as arrayType, s as stringType, t as index_default } from "../_libs/@mendable/firecrawl-js+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-WJgk8O8C.mjs";
import { n as load } from "../_libs/cheerio+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wap-import.functions-BkOwEtRx.js
var firecrawl = process.env.FIRECRAWL_API_KEY ? new index_default({ apiKey: process.env.FIRECRAWL_API_KEY }) : null;
/**
* Detect platform from URL
*/
function detectPlatform(url) {
	const urlLower = url.toLowerCase();
	if (urlLower.includes("aliexpress")) return "aliexpress";
	if (urlLower.includes("temu")) return "temu";
	if (urlLower.includes("amazon")) return "amazon";
	if (urlLower.includes("ebay")) return "ebay";
	return "generic";
}
/**
* Extract using Firecrawl
*/
async function scrapeWithFirecrawl(url) {
	if (!firecrawl) return null;
	try {
		const res = await firecrawl.scrape(url, { formats: [{
			type: "json",
			schema: objectType({
				title: stringType(),
				price: numberType().optional(),
				description: stringType().optional(),
				image: stringType().optional(),
				colors: arrayType(stringType()).optional(),
				sizes: arrayType(stringType()).optional()
			})
		}] });
		if (!res || !res.json) return null;
		const data = res.json;
		return {
			title: data.title,
			price: typeof data.price === "number" ? data.price : parseFloat(data.price) || 0,
			description: data.description,
			image: data.image,
			platform: detectPlatform(url),
			rawData: {
				scrapedAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceUrl: url,
				colors: data.colors,
				sizes: data.sizes,
				firecrawl: true
			}
		};
	} catch (error) {
		console.error("[WAP] Firecrawl scrape error:", error);
		return null;
	}
}
/**
* Scrape product from AliExpress
*/
async function scrapeAliExpress(url) {
	const result = await scrapeGeneric(url);
	if (result) result.platform = "aliexpress";
	return result;
}
/**
* Scrape product from Temu
*/
async function scrapeTemu(url) {
	const result = await scrapeGeneric(url);
	if (result) result.platform = "temu";
	return result;
}
/**
* Scrape product from Amazon
*/
async function scrapeAmazon(url) {
	const result = await scrapeGeneric(url);
	if (result) result.platform = "amazon";
	return result;
}
/**
* Generic fallback scraper for any product URL
*/
async function scrapeGeneric(url) {
	try {
		const response = await fetch(url, { headers: {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
			"Accept-Language": "en-US,en;q=0.5"
		} });
		if (!response.ok) return null;
		const $ = load(await response.text());
		let title;
		let description;
		let image;
		let price;
		const colors = [];
		const sizes = [];
		$("script[type=\"application/ld+json\"]").each((_, el) => {
			try {
				const data = JSON.parse($(el).html() || "{}");
				const products = Array.isArray(data) ? data : [data];
				for (const item of products) if (item["@type"] === "Product" || item["@type"] === "ProductGroup") {
					if (item.name) title = title || item.name;
					if (item.description) description = description || item.description;
					if (item.image) image = image || (Array.isArray(item.image) ? item.image[0] : item.image);
					if (item.offers) {
						const offer = Array.isArray(item.offers) ? item.offers[0] : item.offers;
						if (offer.price) price = price || parseFloat(offer.price);
					}
				}
			} catch (e) {}
		});
		title = title || $("meta[property=\"og:title\"]").attr("content");
		description = description || $("meta[property=\"og:description\"]").attr("content");
		image = image || $("meta[property=\"og:image\"]").attr("content");
		title = title || $("meta[name=\"title\"]").attr("content");
		description = description || $("meta[name=\"description\"]").attr("content");
		title = title || $("h1").first().text().trim() || $("[class*=\"product-title\"]").first().text().trim() || $("title").text().split("-")[0].trim();
		if (!price) {
			const priceMatch = $("[class*=\"price\"], [id*=\"price\"], .price, .product-price").first().text().match(/[\d.]+/);
			if (priceMatch) price = parseFloat(priceMatch[0]);
		}
		image = image || $("img[class*=\"product\"]").first().attr("src") || $("img").first().attr("src");
		description = description || $("[class*=\"description\"]").first().text().trim() || $("[class*=\"details\"]").first().text().trim();
		if (description && description.length > 1e3) description = description.substring(0, 1e3) + "...";
		$("[class*=\"color\"], [id*=\"color\"], select[name*=\"color\"] option").each((_, el) => {
			const text = $(el).text().trim() || $(el).attr("value") || $(el).attr("title");
			if (text && text.length > 0 && text.length < 20 && !colors.includes(text)) colors.push(text);
		});
		$("[class*=\"size\"], [id*=\"size\"], select[name*=\"size\"] option").each((_, el) => {
			const text = $(el).text().trim() || $(el).attr("value") || $(el).attr("title");
			if (text && text.length > 0 && text.length < 15 && !sizes.includes(text)) sizes.push(text);
		});
		return {
			title,
			price,
			image,
			description,
			platform: "generic",
			rawData: {
				scrapedAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceUrl: url,
				colors: colors.length > 0 ? colors : void 0,
				sizes: sizes.length > 0 ? sizes : void 0
			}
		};
	} catch (error) {
		console.error("[WAP] Generic scrape error:", error);
		return null;
	}
}
/**
* Main scraper function with platform detection and fallback
*/
async function scrapeProduct(url) {
	try {
		new URL(url);
	} catch {
		console.error("[WAP] Invalid URL:", url);
		return null;
	}
	const platform = detectPlatform(url);
	let result = null;
	if (firecrawl) result = await scrapeWithFirecrawl(url);
	if (!result || !result.title) {
		if (platform === "aliexpress") result = await scrapeAliExpress(url);
		else if (platform === "temu") result = await scrapeTemu(url);
		else if (platform === "amazon") result = await scrapeAmazon(url);
	}
	if (!result || !result.title) result = await scrapeGeneric(url);
	if (!result || !result.title) {
		const urlObj = new URL(url);
		let fallbackTitle = urlObj.pathname.split("/").pop()?.replace(/[-_]/g, " ").trim() || "";
		if (!fallbackTitle) fallbackTitle = "Imported Product";
		result = {
			title: fallbackTitle,
			price: 0,
			image: "",
			description: `Product imported from ${urlObj.hostname}`,
			platform,
			rawData: {
				scrapedAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceUrl: url,
				error: "Failed to scrape product data, using fallback"
			}
		};
	}
	return result;
}
/**
* Search for a product using Firecrawl
*/
async function searchProductWithFirecrawl(query) {
	if (!firecrawl) return null;
	try {
		const res = await firecrawl.search(query);
		if (res && res.web && res.web.length > 0 && "url" in res.web[0]) return res.web[0].url || null;
	} catch (error) {
		console.error("[WAP] Firecrawl search error:", error);
	}
	return null;
}
/**
* Validate and normalize URL
*/
function normalizeUrl(url) {
	let normalized = url.trim();
	if (!normalized.startsWith("http://") && !normalized.startsWith("https://")) normalized = "https://" + normalized;
	return normalized;
}
/**
* Alias for scrapeProduct for consistency in function naming
*/
async function scrapeProductDetails(url) {
	return scrapeProduct(url);
}
/**
* Import a single product by URL or search query
*/
var importSingleProduct_createServerFn_handler = createServerRpc({
	id: "c4275a0165b1684a2dbf4778fb80790ff920c249edf3fd3c038d5b9e34c850ce",
	name: "importSingleProduct",
	filename: "src/lib/wap-import.functions.ts"
}, (opts) => importSingleProduct.__executeServer(opts));
var importSingleProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ url: stringType().min(1) }).parse(input)).handler(importSingleProduct_createServerFn_handler, async ({ context, data }) => {
	try {
		const userId = context.userId;
		let targetUrl = data.url.trim();
		let isUrl = false;
		try {
			new URL(normalizeUrl(targetUrl));
			isUrl = true;
			targetUrl = normalizeUrl(targetUrl);
		} catch (e) {
			isUrl = false;
		}
		if (!isUrl) {
			const foundUrl = await searchProductWithFirecrawl(targetUrl);
			if (!foundUrl) return {
				success: false,
				error: "Could not find a product URL for your search. Please provide a direct URL."
			};
			targetUrl = foundUrl;
		}
		const { data: existing } = await context.supabase.from("imported_products").select("id").eq("source_url", targetUrl).eq("user_id", userId).single();
		if (existing) return {
			success: false,
			error: "This product has already been imported"
		};
		const scrapedData = await scrapeProductDetails(targetUrl);
		if (!scrapedData || !scrapedData.title) return {
			success: false,
			error: "Could not extract product information from the URL"
		};
		const { data: imported, error } = await context.supabase.from("imported_products").insert({
			user_id: userId,
			source_url: targetUrl,
			platform: scrapedData.platform,
			product_name: scrapedData.title,
			description: scrapedData.description,
			price: scrapedData.price,
			image_url: scrapedData.image,
			video_url: scrapedData.video,
			raw_data: scrapedData.rawData,
			status: "imported"
		}).select().single();
		if (error) {
			console.error("[WAP] Database insert error:", error);
			return {
				success: false,
				error: "Failed to save product to database"
			};
		}
		return {
			success: true,
			importedData: imported
		};
	} catch (error) {
		console.error("[WAP] Import single product error:", error);
		return {
			success: false,
			error: "An error occurred during import"
		};
	}
});
var importMultipleProducts_createServerFn_handler = createServerRpc({
	id: "1d555b6f33b5089490a02931e14d757e7e9e329180de1c789c170850a8aacee5",
	name: "importMultipleProducts",
	filename: "src/lib/wap-import.functions.ts"
}, (opts) => importMultipleProducts.__executeServer(opts));
var importMultipleProducts = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	content: stringType(),
	isCSV: booleanType()
}).parse(input)).handler(importMultipleProducts_createServerFn_handler, async ({ context, data }) => {
	try {
		const userId = context.userId;
		const results = [];
		let urls = [];
		if (data.isCSV) {
			const lines = data.content.split("\n");
			for (const line of lines) {
				const cells = line.split(",");
				if (cells[0]) urls.push(cells[0].trim());
			}
		} else urls = data.content.split("\n").map((url) => url.trim()).filter((url) => url.length > 0);
		for (const url of urls) try {
			const normalizedUrl = normalizeUrl(url);
			try {
				new URL(normalizedUrl);
			} catch (e) {
				results.push({
					url,
					status: "failed",
					error: "Invalid URL format"
				});
				continue;
			}
			const { data: existing } = await context.supabase.from("imported_products").select("id").eq("source_url", normalizedUrl).eq("user_id", userId).single();
			if (existing) {
				results.push({
					url,
					status: "failed",
					error: "Already imported"
				});
				continue;
			}
			const scrapedData = await scrapeProductDetails(normalizedUrl);
			if (!scrapedData || !scrapedData.title) {
				results.push({
					url,
					status: "failed",
					error: "Could not extract product information"
				});
				continue;
			}
			const { error } = await context.supabase.from("imported_products").insert({
				user_id: userId,
				source_url: normalizedUrl,
				platform: scrapedData.platform,
				product_name: scrapedData.title,
				description: scrapedData.description,
				price: scrapedData.price,
				image_url: scrapedData.image,
				video_url: scrapedData.video,
				raw_data: scrapedData.rawData,
				status: "imported"
			});
			if (error) results.push({
				url,
				status: "failed",
				error: "Database error"
			});
			else results.push({
				url,
				status: "success"
			});
		} catch (err) {
			results.push({
				url,
				status: "failed",
				error: String(err)
			});
		}
		return {
			success: true,
			results
		};
	} catch (error) {
		console.error("[WAP] Import multiple products error:", error);
		return {
			success: false,
			error: "An error occurred during batch import"
		};
	}
});
var fetchImportedProducts_createServerFn_handler = createServerRpc({
	id: "9d760c7c0d53b991941740ccf320ae8458acfcabcf384b12ab0d8556fd5e7307",
	name: "fetchImportedProducts",
	filename: "src/lib/wap-import.functions.ts"
}, (opts) => fetchImportedProducts.__executeServer(opts));
var fetchImportedProducts = createServerFn({ method: "GET" }).middleware([requireSupabaseAuth]).handler(fetchImportedProducts_createServerFn_handler, async ({ context }) => {
	try {
		const userId = context.userId;
		const { data, error } = await context.supabase.from("imported_products").select("*").eq("user_id", userId).order("created_at", { ascending: false });
		if (error) {
			console.error("[WAP] Fetch error:", error);
			return {
				success: false,
				error: "Failed to fetch products"
			};
		}
		return {
			success: true,
			importedProducts: data
		};
	} catch (error) {
		console.error("[WAP] Fetch imported products error:", error);
		return {
			success: false,
			error: "An error occurred"
		};
	}
});
var deleteImportedProduct_createServerFn_handler = createServerRpc({
	id: "848d879b39220a0cfc527be4ff7e63a586d74332655a31c53b9fdfd039562cdb",
	name: "deleteImportedProduct",
	filename: "src/lib/wap-import.functions.ts"
}, (opts) => deleteImportedProduct.__executeServer(opts));
var deleteImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(deleteImportedProduct_createServerFn_handler, async ({ context, data }) => {
	try {
		const userId = context.userId;
		const { error } = await context.supabase.from("imported_products").delete().eq("id", data.id).eq("user_id", userId);
		if (error) {
			console.error("[WAP] Delete error:", error);
			return {
				success: false,
				error: "Failed to delete product"
			};
		}
		return { success: true };
	} catch (error) {
		console.error("[WAP] Delete imported product error:", error);
		return {
			success: false,
			error: "An error occurred"
		};
	}
});
var publishImportedProduct_createServerFn_handler = createServerRpc({
	id: "f43ed099a7f326eb93fa72d41a8514f9596f1825fa6c7e189132adfefca95a5e",
	name: "publishImportedProduct",
	filename: "src/lib/wap-import.functions.ts"
}, (opts) => publishImportedProduct.__executeServer(opts));
var publishImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(publishImportedProduct_createServerFn_handler, async ({ context, data }) => {
	try {
		const { data: imported, error: fetchErr } = await context.supabase.from("imported_products").select("*").eq("id", data.id).eq("user_id", context.userId).single();
		if (fetchErr || !imported) return {
			success: false,
			error: "Product not found"
		};
		const title = imported.product_name || "Imported Product";
		const uniqueSlug = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Math.floor(Math.random() * 1e4)}`;
		const rawData = imported.raw_data;
		const variants = [];
		if (rawData?.colors && rawData.colors.length > 0) variants.push({
			name: "Color",
			options: rawData.colors
		});
		if (rawData?.sizes && rawData.sizes.length > 0) variants.push({
			name: "Size",
			options: rawData.sizes
		});
		const { error: insertErr } = await context.supabase.from("products").insert({
			title,
			slug: uniqueSlug,
			description: imported.description || "",
			price_naira: imported.price || 0,
			image_urls: imported.image_url ? [imported.image_url] : [],
			is_active: false,
			stock: 10,
			variants: variants.length > 0 ? variants : null
		});
		if (insertErr) {
			console.error("[WAP] Insert to storefront error:", insertErr);
			return {
				success: false,
				error: "Failed to publish to storefront"
			};
		}
		await context.supabase.from("imported_products").delete().eq("id", imported.id);
		return { success: true };
	} catch (error) {
		console.error("[WAP] Publish error:", error);
		return {
			success: false,
			error: "An error occurred while publishing"
		};
	}
});
var updateImportedProduct_createServerFn_handler = createServerRpc({
	id: "2d554d463cf3f9705abb64315467bc1db7743fb11106e8655b881e14aa4543c8",
	name: "updateImportedProduct",
	filename: "src/lib/wap-import.functions.ts"
}, (opts) => updateImportedProduct.__executeServer(opts));
var updateImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).validator((input) => objectType({
	id: stringType().uuid(),
	productName: stringType().optional(),
	description: stringType().optional(),
	price: numberType().optional(),
	imageUrl: stringType().optional()
}).parse(input)).handler(updateImportedProduct_createServerFn_handler, async ({ context, data }) => {
	try {
		const userId = context.userId;
		const updatePayload = { updated_at: (/* @__PURE__ */ new Date()).toISOString() };
		if (data.productName) updatePayload.product_name = data.productName;
		if (data.description) updatePayload.description = data.description;
		if (data.price !== void 0) updatePayload.price = data.price;
		if (data.imageUrl) updatePayload.image_url = data.imageUrl;
		const { data: updated, error } = await context.supabase.from("imported_products").update(updatePayload).eq("id", data.id).eq("user_id", userId).select().single();
		if (error) {
			console.error("[WAP] Update error:", error);
			return {
				success: false,
				error: "Failed to update product"
			};
		}
		return {
			success: true,
			updatedData: updated
		};
	} catch (error) {
		console.error("[WAP] Update imported product error:", error);
		return {
			success: false,
			error: "An error occurred"
		};
	}
});
//#endregion
export { deleteImportedProduct_createServerFn_handler, fetchImportedProducts_createServerFn_handler, importMultipleProducts_createServerFn_handler, importSingleProduct_createServerFn_handler, publishImportedProduct_createServerFn_handler, updateImportedProduct_createServerFn_handler };
