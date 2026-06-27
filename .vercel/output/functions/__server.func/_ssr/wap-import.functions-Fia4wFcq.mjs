import { l as createServerFn } from "./esm-vQsjfqSA.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-CFJP7JkI.mjs";
import { a as stringType, i as objectType, n as booleanType, r as numberType } from "../_libs/zod.mjs";
import { t as createServerRpc } from "./createServerRpc-DNv3cMx8.mjs";
import { t as load } from "../_libs/cheerio+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wap-import.functions-Fia4wFcq.js
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
* Scrape product from AliExpress
*/
async function scrapeAliExpress(url) {
	try {
		const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } });
		if (!response.ok) return null;
		const $ = load(await response.text());
		const title = $("h1").first().text().trim() || $("title").text().split("-")[0].trim();
		let price;
		const priceMatch = $("[class*=\"price\"]").first().text().match(/[\d.]+/);
		if (priceMatch) price = parseFloat(priceMatch[0]);
		const image = $("img[class*=\"product\"]").first().attr("src") || $("img[class*=\"preview\"]").first().attr("src") || $("img").first().attr("src");
		const description = $("[class*=\"description\"]").text().trim().substring(0, 500);
		return {
			title,
			price,
			image,
			description,
			platform: "aliexpress",
			rawData: {
				scrapedAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceUrl: url
			}
		};
	} catch (error) {
		console.error("[WAP] AliExpress scrape error:", error);
		return null;
	}
}
/**
* Scrape product from Temu
*/
async function scrapeTemu(url) {
	try {
		const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } });
		if (!response.ok) return null;
		const $ = load(await response.text());
		const title = $("h1").first().text().trim() || $("[class*=\"product-title\"]").first().text().trim();
		let price;
		$("[class*=\"price\"]").each((_, el) => {
			const match = $(el).text().match(/\$?([\d.]+)/);
			if (match && !price) price = parseFloat(match[1]);
		});
		const image = $("img[class*=\"product\"]").first().attr("src") || $("img[class*=\"main\"]").first().attr("src") || $("img").first().attr("src");
		const description = $("[class*=\"desc\"]").text().trim().substring(0, 500);
		return {
			title,
			price,
			image,
			description,
			platform: "temu",
			rawData: {
				scrapedAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceUrl: url
			}
		};
	} catch (error) {
		console.error("[WAP] Temu scrape error:", error);
		return null;
	}
}
/**
* Scrape product from Amazon
*/
async function scrapeAmazon(url) {
	try {
		const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } });
		if (!response.ok) return null;
		const $ = load(await response.text());
		const title = $("#productTitle").text().trim() || $("h1").first().text().trim();
		let price;
		const priceMatch = $(".a-price-whole").first().text().match(/[\d.]+/);
		if (priceMatch) price = parseFloat(priceMatch[0]);
		const image = $("#landingImage").attr("src") || $("img[class*=\"a-dynamic-image\"]").first().attr("src");
		const description = $("#feature-bullets").text().trim().substring(0, 500);
		return {
			title,
			price,
			image,
			description,
			platform: "amazon",
			rawData: {
				scrapedAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceUrl: url
			}
		};
	} catch (error) {
		console.error("[WAP] Amazon scrape error:", error);
		return null;
	}
}
/**
* Generic fallback scraper for any product URL
*/
async function scrapeGeneric(url) {
	try {
		const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" } });
		if (!response.ok) return null;
		const $ = load(await response.text());
		const title = $("h1").first().text().trim() || $("[class*=\"product-title\"]").first().text().trim() || $("title").text().split("-")[0].trim();
		let price;
		const priceMatch = $("[class*=\"price\"]").first().text().match(/[\d.]+/);
		if (priceMatch) price = parseFloat(priceMatch[0]);
		const image = $("img").first().attr("src");
		const description = $("[class*=\"description\"]").first().text().trim().substring(0, 500) || $("[class*=\"details\"]").first().text().trim().substring(0, 500);
		return {
			title,
			price,
			image,
			description,
			platform: "generic",
			rawData: {
				scrapedAt: (/* @__PURE__ */ new Date()).toISOString(),
				sourceUrl: url
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
	if (platform === "aliexpress") result = await scrapeAliExpress(url);
	else if (platform === "temu") result = await scrapeTemu(url);
	else if (platform === "amazon") result = await scrapeAmazon(url);
	if (!result || !result.title) result = await scrapeGeneric(url);
	return result;
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
* Import a single product by URL
*/
var importSingleProduct_createServerFn_handler = createServerRpc({
	id: "c4275a0165b1684a2dbf4778fb80790ff920c249edf3fd3c038d5b9e34c850ce",
	name: "importSingleProduct",
	filename: "src/lib/wap-import.functions.ts"
}, (opts) => importSingleProduct.__executeServer(opts));
var importSingleProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ url: stringType().url() }).parse(input)).handler(importSingleProduct_createServerFn_handler, async ({ context, data }) => {
	try {
		const userId = context.userId;
		const normalizedUrl = normalizeUrl(data.url);
		const { data: existing } = await context.supabase.from("imported_products").select("id").eq("source_url", normalizedUrl).eq("user_id", userId).single();
		if (existing) return {
			success: false,
			error: "This URL has already been imported"
		};
		const scrapedData = await scrapeProductDetails(normalizedUrl);
		if (!scrapedData || !scrapedData.title) return {
			success: false,
			error: "Could not extract product information from the URL"
		};
		const { data: imported, error } = await context.supabase.from("imported_products").insert({
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
var importMultipleProducts = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
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
var deleteImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(deleteImportedProduct_createServerFn_handler, async ({ context, data }) => {
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
var publishImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ id: stringType().uuid() }).parse(input)).handler(publishImportedProduct_createServerFn_handler, async ({ context, data }) => {
	try {
		const { data: imported, error: fetchErr } = await context.supabase.from("imported_products").select("*").eq("id", data.id).eq("user_id", context.userId).single();
		if (fetchErr || !imported) return {
			success: false,
			error: "Product not found"
		};
		const title = imported.product_name || "Imported Product";
		const uniqueSlug = `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}-${Math.floor(Math.random() * 1e4)}`;
		const { error: insertErr } = await context.supabase.from("products").insert({
			title,
			slug: uniqueSlug,
			description: imported.description || "",
			price_naira: imported.price || 0,
			image_urls: imported.image_url ? [imported.image_url] : [],
			is_active: false,
			stock: 10
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
var updateImportedProduct = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
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
