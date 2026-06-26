import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-Dj_uQScw.js
function createSupabaseClient() {
	const getEnv = (key) => {
		if (typeof import.meta !== "undefined" && {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_SUPABASE_PROJECT_ID": "lkodvoslaemxtxpqvlug",
			"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrb2R2b3NsYWVteHR4cHF2bHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODg4NTIsImV4cCI6MjA5NzQ2NDg1Mn0.DTstiSxfg-tvKt9LNQozvGzf0iVITyeFUfetUkY0ChA",
			"VITE_SUPABASE_URL": "https://lkodvoslaemxtxpqvlug.supabase.co"
		}[key]) return {
			"BASE_URL": "/",
			"DEV": false,
			"MODE": "production",
			"PROD": true,
			"SSR": true,
			"TSS_DEV_SERVER": "false",
			"TSS_DEV_SSR_STYLES_BASEPATH": "/",
			"TSS_DEV_SSR_STYLES_ENABLED": "true",
			"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
			"TSS_INLINE_CSS_ENABLED": "false",
			"TSS_ROUTER_BASEPATH": "",
			"TSS_SERVER_FN_BASE": "/_serverFn/",
			"VITE_SUPABASE_PROJECT_ID": "lkodvoslaemxtxpqvlug",
			"VITE_SUPABASE_PUBLISHABLE_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrb2R2b3NsYWVteHR4cHF2bHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4ODg4NTIsImV4cCI6MjA5NzQ2NDg1Mn0.DTstiSxfg-tvKt9LNQozvGzf0iVITyeFUfetUkY0ChA",
			"VITE_SUPABASE_URL": "https://lkodvoslaemxtxpqvlug.supabase.co"
		}[key];
		if (typeof process !== "undefined" && process.env && process.env[key]) return process.env[key];
	};
	const rawUrl = getEnv("VITE_SUPABASE_URL") || getEnv("SUPABASE_URL");
	const rawKey = getEnv("VITE_SUPABASE_ANON_KEY") || getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") || getEnv("SUPABASE_ANON_KEY") || getEnv("SUPABASE_PUBLISHABLE_KEY");
	const SUPABASE_URL = rawUrl ? rawUrl.replace(/^["']|["']$/g, "").trim() : void 0;
	const SUPABASE_PUBLISHABLE_KEY = rawKey ? rawKey.replace(/^["']|["']$/g, "").trim() : void 0;
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		const message = `Missing Supabase environment variable(s): ${[...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []].join(", ")}. Connect Supabase in Lovable Cloud.`;
		console.error(`[Supabase] ${message}`);
		throw new Error(message);
	}
	return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
