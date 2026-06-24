import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/supabase-server-CxU3Uvyy.js
function getPublicSupabase() {
	const getEnv = (key) => {
		if (typeof import.meta !== "undefined" && {
			"BASE_URL": "/",
			"DEV": true,
			"MODE": "production",
			"PROD": false,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yc2Zrdmxzd2h2Ym1xaW5qdmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNzMwMjIsImV4cCI6MjA5NzY0OTAyMn0.6wqgOhE17ws95zzA3Zh6YoXmOSj5jVeGyusk_0IedXI",
			"VITE_SUPABASE_PROJECT_ID": "lkodvoslaemxtxpqvlug",
			"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrb2R2b3NsYWVteHR4cHF2bHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODg4NTIsImV4cCI6MjA5NzQ2NDg1Mn0.DTstiSxfg-tvKt9LNQozvGzf0iVITyeFUfetUkY0ChA",
			"VITE_SUPABASE_URL": "https://nrsfkvlswhvbmqinjvgk.supabase.co"
		}[key]) return {
			"BASE_URL": "/",
			"DEV": true,
			"MODE": "production",
			"PROD": false,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yc2Zrdmxzd2h2Ym1xaW5qdmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwNzMwMjIsImV4cCI6MjA5NzY0OTAyMn0.6wqgOhE17ws95zzA3Zh6YoXmOSj5jVeGyusk_0IedXI",
			"VITE_SUPABASE_PROJECT_ID": "lkodvoslaemxtxpqvlug",
			"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrb2R2b3NsYWVteHR4cHF2bHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODg4NTIsImV4cCI6MjA5NzQ2NDg1Mn0.DTstiSxfg-tvKt9LNQozvGzf0iVITyeFUfetUkY0ChA",
			"VITE_SUPABASE_URL": "https://nrsfkvlswhvbmqinjvgk.supabase.co"
		}[key];
		if (typeof process !== "undefined" && process.env && process.env[key]) return process.env[key];
	};
	return createClient(getEnv("VITE_SUPABASE_URL") || getEnv("SUPABASE_URL") || "", getEnv("VITE_SUPABASE_ANON_KEY") || getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") || getEnv("SUPABASE_PUBLISHABLE_KEY") || getEnv("SUPABASE_ANON_KEY") || "", { auth: {
		storage: void 0,
		persistSession: false,
		autoRefreshToken: false
	} });
}
async function signImagePaths(client, bucket, paths) {
	if (!paths || paths.length === 0) return [];
	const toSign = paths.filter((p) => p && !p.startsWith("http"));
	const signedMap = /* @__PURE__ */ new Map();
	if (toSign.length > 0) {
		const { data } = await client.storage.from(bucket).createSignedUrls(toSign, 3600 * 24);
		data?.forEach((d) => {
			if (d.path && d.signedUrl) signedMap.set(d.path, d.signedUrl);
		});
	}
	return paths.map((p) => p?.startsWith("http") ? p : signedMap.get(p) ?? "");
}
//#endregion
export { signImagePaths as n, getPublicSupabase as t };
