import { t as createMiddleware } from "./createStart-Dt05N14y.mjs";
import { t as getRequest } from "./request-response-BEPp1C2k.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-middleware-BMtCaC7n.js
var requireSupabaseAuth = createMiddleware({ type: "function" }).server(async ({ next }) => {
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
	const rawSupabaseUrl = getEnv("VITE_SUPABASE_URL") || getEnv("SUPABASE_URL");
	const rawSupabaseKey = getEnv("VITE_SUPABASE_ANON_KEY") || getEnv("VITE_SUPABASE_PUBLISHABLE_KEY") || getEnv("SUPABASE_ANON_KEY") || getEnv("SUPABASE_PUBLISHABLE_KEY");
	const SUPABASE_URL = rawSupabaseUrl ? rawSupabaseUrl.replace(/^["']|["']$/g, "").trim() : void 0;
	const SUPABASE_PUBLISHABLE_KEY = rawSupabaseKey ? rawSupabaseKey.replace(/^["']|["']$/g, "").trim() : void 0;
	if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
		const message = `Missing Supabase environment variable(s): ${[...!SUPABASE_URL ? ["SUPABASE_URL"] : [], ...!SUPABASE_PUBLISHABLE_KEY ? ["SUPABASE_PUBLISHABLE_KEY"] : []].join(", ")}. Connect Supabase in Lovable Cloud.`;
		console.error(`[Supabase] ${message}`);
		throw new Error(message);
	}
	const request = getRequest();
	if (!request?.headers) throw new Error("Unauthorized: No request headers available");
	const authHeader = request.headers.get("authorization");
	if (!authHeader) throw new Error("Unauthorized: No authorization header provided");
	if (!authHeader.startsWith("Bearer ")) throw new Error("Unauthorized: Only Bearer tokens are supported");
	const token = authHeader.replace("Bearer ", "");
	if (!token) throw new Error("Unauthorized: No token provided");
	const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
		global: { headers: { Authorization: `Bearer ${token}` } },
		auth: {
			storage: void 0,
			persistSession: false,
			autoRefreshToken: false
		}
	});
	const { data, error } = await supabase.auth.getUser(token);
	if (error || !data?.user) throw new Error("Unauthorized: Invalid token");
	if (!data.user.id) throw new Error("Unauthorized: No user ID found in token");
	return next({ context: {
		supabase,
		userId: data.user.id
	} });
});
//#endregion
export { requireSupabaseAuth as t };
