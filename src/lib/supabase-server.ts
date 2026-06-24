import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export function getPublicSupabase() {
  const getEnv = (key: string) => {
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) return import.meta.env[key];
    if (typeof process !== 'undefined' && process.env && process.env[key]) return process.env[key];
    return undefined;
  };
  return createClient<Database>(
    getEnv('VITE_SUPABASE_URL') || getEnv('SUPABASE_URL') || '',
    getEnv('VITE_SUPABASE_ANON_KEY') || getEnv('VITE_SUPABASE_PUBLISHABLE_KEY') || getEnv('SUPABASE_PUBLISHABLE_KEY') || getEnv('SUPABASE_ANON_KEY') || '',
    {
      auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    },
  );
}

export async function signImagePaths(
  client: ReturnType<typeof getPublicSupabase>,
  bucket: string,
  paths: string[] | null | undefined,
): Promise<string[]> {
  if (!paths || paths.length === 0) return [];
  // Allow already-absolute URLs to pass through.
  const toSign = paths.filter((p) => p && !p.startsWith("http"));
  const signedMap = new Map<string, string>();
  if (toSign.length > 0) {
    const { data } = await client.storage.from(bucket).createSignedUrls(toSign, 60 * 60 * 24);
    data?.forEach((d) => {
      if (d.path && d.signedUrl) signedMap.set(d.path, d.signedUrl);
    });
  }
  return paths.map((p) => (p?.startsWith("http") ? p : signedMap.get(p) ?? ""));
}
