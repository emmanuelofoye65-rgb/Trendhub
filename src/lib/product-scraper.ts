import * as cheerio from 'cheerio';
import FirecrawlApp from '@mendable/firecrawl-js';

const firecrawl = process.env.FIRECRAWL_API_KEY ? new FirecrawlApp({ apiKey: process.env.FIRECRAWL_API_KEY }) : null;

export interface ScrapedProduct {
  title?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  image?: string;
  video?: string;
  platform: 'aliexpress' | 'temu' | 'amazon' | 'ebay' | 'generic';
  rawData: Record<string, unknown>;
}

/**
 * Detect platform from URL
 */
export function detectPlatform(url: string): 'aliexpress' | 'temu' | 'amazon' | 'ebay' | 'generic' {
  const urlLower = url.toLowerCase();
  
  if (urlLower.includes('aliexpress')) return 'aliexpress';
  if (urlLower.includes('temu')) return 'temu';
  if (urlLower.includes('amazon')) return 'amazon';
  if (urlLower.includes('ebay')) return 'ebay';
  
  return 'generic';
}

/**
 * Extract using Firecrawl
 */
async function scrapeWithFirecrawl(url: string): Promise<ScrapedProduct | null> {
  if (!firecrawl) return null;
  try {
    const res = await firecrawl.scrapeUrl(url, {
      formats: ['extract'],
      extract: {
        schema: {
          type: "object",
          properties: {
            title: { type: "string" },
            price: { type: "number" },
            description: { type: "string" },
            image: { type: "string" },
            colors: { type: "array", items: { type: "string" } },
            sizes: { type: "array", items: { type: "string" } }
          },
          required: ["title"]
        }
      }
    });

    if (!res.success || !res.data || !res.data.extract) return null;
    const data = res.data.extract as any;
    return {
      title: data.title,
      price: typeof data.price === 'number' ? data.price : parseFloat(data.price) || 0,
      description: data.description,
      image: data.image,
      platform: detectPlatform(url),
      rawData: {
        scrapedAt: new Date().toISOString(),
        sourceUrl: url,
        colors: data.colors,
        sizes: data.sizes,
        firecrawl: true
      }
    };
  } catch (error) {
    console.error('[WAP] Firecrawl scrape error:', error);
    return null;
  }
}

/**
 * Scrape product from AliExpress
 */
async function scrapeAliExpress(url: string): Promise<ScrapedProduct | null> {
  const result = await scrapeGeneric(url);
  if (result) result.platform = 'aliexpress';
  return result;
}

/**
 * Scrape product from Temu
 */
async function scrapeTemu(url: string): Promise<ScrapedProduct | null> {
  const result = await scrapeGeneric(url);
  if (result) result.platform = 'temu';
  return result;
}

/**
 * Scrape product from Amazon
 */
async function scrapeAmazon(url: string): Promise<ScrapedProduct | null> {
  const result = await scrapeGeneric(url);
  if (result) result.platform = 'amazon';
  return result;
}

/**
 * Generic fallback scraper for any product URL
 */
async function scrapeGeneric(url: string): Promise<ScrapedProduct | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      }
    });
    
    if (!response.ok) return null;
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    let title: string | undefined;
    let description: string | undefined;
    let image: string | undefined;
    let price: number | undefined;
    const colors: string[] = [];
    const sizes: string[] = [];

    // 1. Try to parse JSON-LD (Schema.org data)
    const jsonLdScripts = $('script[type="application/ld+json"]');
    jsonLdScripts.each((_, el) => {
      try {
        const data = JSON.parse($(el).html() || '{}');
        const products = Array.isArray(data) ? data : [data];
        
        for (const item of products) {
          if (item['@type'] === 'Product' || item['@type'] === 'ProductGroup') {
            if (item.name) title = title || item.name;
            if (item.description) description = description || item.description;
            if (item.image) {
              image = image || (Array.isArray(item.image) ? item.image[0] : item.image);
            }
            if (item.offers) {
              const offer = Array.isArray(item.offers) ? item.offers[0] : item.offers;
              if (offer.price) price = price || parseFloat(offer.price);
            }
          }
        }
      } catch (e) {
        // Ignore parsing errors for JSON-LD
      }
    });

    // 2. Try Open Graph tags
    title = title || $('meta[property="og:title"]').attr('content');
    description = description || $('meta[property="og:description"]').attr('content');
    image = image || $('meta[property="og:image"]').attr('content');

    // 3. Try standard meta tags
    title = title || $('meta[name="title"]').attr('content');
    description = description || $('meta[name="description"]').attr('content');

    // 4. Fallback to common selectors
    title = title || $('h1').first().text().trim() || 
                    $('[class*="product-title"]').first().text().trim() ||
                    $('title').text().split('-')[0].trim();
    
    if (!price) {
      const priceText = $('[class*="price"], [id*="price"], .price, .product-price').first().text();
      const priceMatch = priceText.match(/[\d.]+/);
      if (priceMatch) {
        price = parseFloat(priceMatch[0]);
      }
    }
    
    image = image || $('img[class*="product"]').first().attr('src') || $('img').first().attr('src');
    
    description = description || $('[class*="description"]').first().text().trim() ||
                       $('[class*="details"]').first().text().trim();
    
    if (description && description.length > 1000) {
      description = description.substring(0, 1000) + '...';
    }

    // Try to extract colors and sizes from common dropdowns or selectors
    $('[class*="color"], [id*="color"], select[name*="color"] option').each((_, el) => {
       const text = $(el).text().trim() || $(el).attr('value') || $(el).attr('title');
       if (text && text.length > 0 && text.length < 20 && !colors.includes(text)) {
         colors.push(text);
       }
    });

    $('[class*="size"], [id*="size"], select[name*="size"] option').each((_, el) => {
       const text = $(el).text().trim() || $(el).attr('value') || $(el).attr('title');
       if (text && text.length > 0 && text.length < 15 && !sizes.includes(text)) {
         sizes.push(text);
       }
    });

    return {
      title,
      price,
      image,
      description,
      platform: 'generic',
      rawData: {
        scrapedAt: new Date().toISOString(),
        sourceUrl: url,
        colors: colors.length > 0 ? colors : undefined,
        sizes: sizes.length > 0 ? sizes : undefined
      }
    };
  } catch (error) {
    console.error('[WAP] Generic scrape error:', error);
    return null;
  }
}

/**
 * Main scraper function with platform detection and fallback
 */
export async function scrapeProduct(url: string): Promise<ScrapedProduct | null> {
  try {
    // Validate URL
    new URL(url);
  } catch {
    console.error('[WAP] Invalid URL:', url);
    return null;
  }
  
  const platform = detectPlatform(url);
  
  let result: ScrapedProduct | null = null;
  
  if (firecrawl) {
    result = await scrapeWithFirecrawl(url);
  }
  
  // Try platform-specific scraper
  if (!result || !result.title) {
    if (platform === 'aliexpress') {
      result = await scrapeAliExpress(url);
    } else if (platform === 'temu') {
      result = await scrapeTemu(url);
    } else if (platform === 'amazon') {
      result = await scrapeAmazon(url);
    }
  }
  
  // Fallback to generic scraper if platform-specific fails
  if (!result || !result.title) {
    result = await scrapeGeneric(url);
  }
  
  // Final fallback if fetching is blocked (e.g. 403 Forbidden)
  if (!result || !result.title) {
    const urlObj = new URL(url);
    let fallbackTitle = urlObj.pathname.split('/').pop()?.replace(/[-_]/g, ' ').trim() || '';
    if (!fallbackTitle) fallbackTitle = 'Imported Product';
    
    result = {
      title: fallbackTitle,
      price: 0,
      image: '',
      description: `Product imported from ${urlObj.hostname}`,
      platform: platform,
      rawData: {
        scrapedAt: new Date().toISOString(),
        sourceUrl: url,
        error: 'Failed to scrape product data, using fallback'
      }
    };
  }
  
  return result;
}

/**
 * Search for a product using Firecrawl
 */
export async function searchProductWithFirecrawl(query: string): Promise<string | null> {
  if (!firecrawl) return null;
  try {
    const res = await firecrawl.search(query, { limit: 1 });
    if (res.success && res.data && res.data.length > 0) {
      return res.data[0].url || null;
    }
  } catch (error) {
    console.error('[WAP] Firecrawl search error:', error);
  }
  return null;
}

/**
 * Validate and normalize URL
 */
export function normalizeUrl(url: string): string {
  let normalized = url.trim();
  if (!normalized.startsWith('http://') && !normalized.startsWith('https://')) {
    normalized = 'https://' + normalized;
  }
  return normalized;
}

/**
 * Alias for scrapeProduct for consistency in function naming
 */
export async function scrapeProductDetails(url: string): Promise<ScrapedProduct | null> {
  return scrapeProduct(url);
}
