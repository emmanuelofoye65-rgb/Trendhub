import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';
import { requireSupabaseAuth } from '@/integrations/supabase/auth-middleware';
import { scrapeProductDetails, normalizeUrl, searchProductWithFirecrawl } from './product-scraper';

/**
 * Import a single product by URL or search query
 */
export const importSingleProduct = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .validator((input: unknown) => z.object({ url: z.string().min(1) }).parse(input))
  .handler(async ({ context, data }): Promise<{
    success: boolean;
    importedData?: any;
    error?: string;
  }> => {
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
        if (!foundUrl) {
          return { success: false, error: 'Could not find a product URL for your search. Please provide a direct URL.' };
        }
        targetUrl = foundUrl;
      }
      
      // Check if URL already imported by this user
      const { data: existing } = await context.supabase
        .from('imported_products')
        .select('id')
        .eq('source_url', targetUrl)
        .eq('user_id', userId)
        .single();
      
      if (existing) {
        return { success: false, error: 'This product has already been imported' };
      }
      
      // Scrape product data
      const scrapedData = await scrapeProductDetails(targetUrl);
      
      if (!scrapedData || !scrapedData.title) {
        return { success: false, error: 'Could not extract product information from the URL' };
      }
      
      // Insert into database
      const { data: imported, error } = await context.supabase
        .from('imported_products')
        .insert({
          user_id: userId,
          source_url: targetUrl,
          platform: scrapedData.platform,
          product_name: scrapedData.title,
          description: scrapedData.description,
          price: scrapedData.price,
          image_url: scrapedData.image,
          video_url: scrapedData.video,
          raw_data: scrapedData.rawData as any,
          status: 'imported'
        } as any)
        .select()
        .single();
      
      if (error) {
        console.error('[WAP] Database insert error:', error);
        return { success: false, error: 'Failed to save product to database' };
      }
      
      return { success: true, importedData: imported };
    } catch (error) {
      console.error('[WAP] Import single product error:', error);
      return { success: false, error: 'An error occurred during import' };
    }
  });

/**
 * Import multiple products (CSV or newline-separated URLs)
 */
export const importMultipleProducts = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .validator((input: unknown) => z.object({ content: z.string(), isCSV: z.boolean() }).parse(input))
  .handler(async ({ context, data }): Promise<{
    success: boolean;
    results?: Array<{
      url: string;
      status: 'success' | 'failed';
      error?: string;
    }>;
    error?: string;
  }> => {
    try {
      const userId = context.userId;
      const results: Array<{
        url: string;
        status: 'success' | 'failed';
        error?: string;
      }> = [];
      
      // Parse input
      let urls: string[] = [];
      
      if (data.isCSV) {
        // Simple CSV parsing - assume first column is URL
        const lines = data.content.split('\n');
        for (const line of lines) {
          const cells = line.split(',');
          if (cells[0]) {
            urls.push(cells[0].trim());
          }
        }
      } else {
        // Newline-separated URLs
        urls = data.content
          .split('\n')
          .map(url => url.trim())
          .filter(url => url.length > 0);
      }
      
      // Process each URL
      for (const url of urls) {
        try {
          const normalizedUrl = normalizeUrl(url);
          
          try {
            new URL(normalizedUrl);
          } catch (e) {
            results.push({ url, status: 'failed', error: 'Invalid URL format' });
            continue;
          }
          
          // Check if already imported
          const { data: existing } = await context.supabase
            .from('imported_products')
            .select('id')
            .eq('source_url', normalizedUrl)
            .eq('user_id', userId)
            .single();
          
          if (existing) {
            results.push({
              url,
              status: 'failed',
              error: 'Already imported'
            });
            continue;
          }
          
          // Scrape product
          const scrapedData = await scrapeProductDetails(normalizedUrl);
          
          if (!scrapedData || !scrapedData.title) {
            results.push({
              url,
              status: 'failed',
              error: 'Could not extract product information'
            });
            continue;
          }
          
          // Insert into database
          const { error } = await context.supabase
            .from('imported_products')
            .insert({
              user_id: userId,
              source_url: normalizedUrl,
              platform: scrapedData.platform,
              product_name: scrapedData.title,
              description: scrapedData.description,
              price: scrapedData.price,
              image_url: scrapedData.image,
              video_url: scrapedData.video,
              raw_data: scrapedData.rawData as any,
              status: 'imported'
            } as any);
          
          if (error) {
            results.push({
              url,
              status: 'failed',
              error: 'Database error'
            });
          } else {
            results.push({
              url,
              status: 'success'
            });
          }
        } catch (err) {
          results.push({
            url,
            status: 'failed',
            error: String(err)
          });
        }
      }
      
      return { success: true, results };
    } catch (error) {
      console.error('[WAP] Import multiple products error:', error);
      return { success: false, error: 'An error occurred during batch import' };
    }
  });

/**
 * Fetch imported products for current user
 */
export const fetchImportedProducts = createServerFn({ method: 'GET' })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }): Promise<{
    success: boolean;
    importedProducts?: any[];
    error?: string;
  }> => {
    try {
      const userId = context.userId;
      
      const { data, error } = await context.supabase
        .from('imported_products')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('[WAP] Fetch error:', error);
        return { success: false, error: 'Failed to fetch products' };
      }
      
      return { success: true, importedProducts: data };
    } catch (error) {
      console.error('[WAP] Fetch imported products error:', error);
      return { success: false, error: 'An error occurred' };
    }
  });

/**
 * Delete an imported product
 */
export const deleteImportedProduct = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .validator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }): Promise<{
    success: boolean;
    error?: string;
  }> => {
    try {
      const userId = context.userId;
      
      const { error } = await context.supabase
        .from('imported_products')
        .delete()
        .eq('id', data.id)
        .eq('user_id', userId);
      
      if (error) {
        console.error('[WAP] Delete error:', error);
        return { success: false, error: 'Failed to delete product' };
      }
      
      return { success: true };
    } catch (error) {
      console.error('[WAP] Delete imported product error:', error);
      return { success: false, error: 'An error occurred' };
    }
  });

/**
 * Update an imported product
 */
/**
 * Publish an imported product to the main storefront as Draft or Active
 */
export const publishImportedProduct = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .validator((input: unknown) => z.object({ id: z.string().uuid() }).parse(input))
  .handler(async ({ context, data }): Promise<{
    success: boolean;
    error?: string;
  }> => {
    try {
      // 1. Fetch the imported product
      const { data: imported, error: fetchErr } = await context.supabase
        .from('imported_products')
        .select('*')
        .eq('id', data.id)
        .eq('user_id', context.userId)
        .single();
      
      if (fetchErr || !imported) {
        return { success: false, error: 'Product not found' };
      }

      // 2. Insert into the main products table (default is_active to false so it requires explicit addition to storefront)
      const title = imported.product_name || 'Imported Product';
      const baseSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const uniqueSlug = `${baseSlug}-${Math.floor(Math.random() * 10000)}`;

      const rawData = imported.raw_data as any;
      const variants = [];
      if (rawData?.colors && rawData.colors.length > 0) {
        variants.push({ name: 'Color', options: rawData.colors });
      }
      if (rawData?.sizes && rawData.sizes.length > 0) {
        variants.push({ name: 'Size', options: rawData.sizes });
      }

      const { error: insertErr } = await context.supabase
        .from('products')
        .insert({
          title,
          slug: uniqueSlug,
          description: imported.description || '',
          price_naira: imported.price || 0,
          image_urls: imported.image_url ? [imported.image_url] : [],
          is_active: false, // Ensures it's not immediately available for sale "unless I add them"
          stock: 10,
          variants: variants.length > 0 ? variants : null
        } as any);

      if (insertErr) {
        console.error('[WAP] Insert to storefront error:', insertErr);
        return { success: false, error: 'Failed to publish to storefront' };
      }

      // 3. Optionally delete from imported_products or mark as done.
      // Since 'published' isn't in CHECK constraint, we can just delete it or leave it. 
      // Deleting keeps the list clean.
      await context.supabase.from('imported_products').delete().eq('id', imported.id);

      return { success: true };
    } catch (error) {
      console.error('[WAP] Publish error:', error);
      return { success: false, error: 'An error occurred while publishing' };
    }
  });

/**
 * Update an imported product
 */
export const updateImportedProduct = createServerFn({ method: 'POST' })
  .middleware([requireSupabaseAuth])
  .validator((input: unknown) =>
    z.object({
      id: z.string().uuid(),
      productName: z.string().optional(),
      description: z.string().optional(),
      price: z.number().optional(),
      imageUrl: z.string().optional()
    }).parse(input)
  )
  .handler(async ({ context, data }): Promise<{
    success: boolean;
    updatedData?: any;
    error?: string;
  }> => {
    try {
      const userId = context.userId;
      
      const updatePayload: Record<string, unknown> = {
        updated_at: new Date().toISOString()
      };
      
      if (data.productName) updatePayload.product_name = data.productName;
      if (data.description) updatePayload.description = data.description;
      if (data.price !== undefined) updatePayload.price = data.price;
      if (data.imageUrl) updatePayload.image_url = data.imageUrl;
      
      const { data: updated, error } = await context.supabase
        .from('imported_products')
        .update(updatePayload as any)
        .eq('id', data.id)
        .eq('user_id', userId)
        .select()
        .single();
      
      if (error) {
        console.error('[WAP] Update error:', error);
        return { success: false, error: 'Failed to update product' };
      }
      
      return { success: true, updatedData: updated };
    } catch (error) {
      console.error('[WAP] Update imported product error:', error);
      return { success: false, error: 'An error occurred' };
    }
  });
