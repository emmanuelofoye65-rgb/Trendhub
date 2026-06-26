import { o as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as useNavigate, g as Link, v as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as supabase } from "./client-Dj_uQScw.mjs";
import { t as useAuth } from "./use-auth-BN2qcMpl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-Doi8CF9R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthPage() {
	const navigate = useNavigate();
	const { user } = useAuth();
	const { redirect } = useSearch({ from: "/auth" });
	const [mode, setMode] = (0, import_react.useState)("signin");
	const [forgotSent, setForgotSent] = (0, import_react.useState)(false);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (user) navigate({
			to: redirect || "/",
			replace: true
		});
	}, [
		user,
		navigate,
		redirect
	]);
	async function handleEmail(e) {
		e.preventDefault();
		setError(null);
		setBusy(true);
		try {
			if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						data: { full_name: name },
						emailRedirectTo: window.location.origin
					}
				});
				if (error) throw error;
			} else if (mode === "forgot") {
				const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/reset-password` });
				if (error) throw error;
				setForgotSent(true);
			} else {
				const { error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
			}
		} catch (e) {
			setError(e?.message ?? "Authentication failed");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto flex max-w-md flex-col px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "text-xs text-muted-foreground hover:text-foreground",
				children: "← Back"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-black",
				children: mode === "signup" ? "Create account" : mode === "forgot" ? "Reset password" : "Welcome back"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: mode === "forgot" ? "Enter your email and we'll send you a link to reset your password." : "Sign in to track your orders. Or skip — you can checkout as a guest."
			}),
			mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-5 flex items-center gap-3 text-xs text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
			}),
			forgotSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 rounded-md border border-neon/30 bg-neon/10 p-4 text-sm text-neon",
				children: "Check your inbox for a password-reset link."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleEmail,
				className: "space-y-3",
				children: [
					mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: "Full name",
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "w-full rounded-md border border-input bg-input px-3 py-2.5 text-sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "email",
						required: true,
						placeholder: "Email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "w-full rounded-md border border-input bg-input px-3 py-2.5 text-sm"
					}),
					mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						required: true,
						minLength: 6,
						placeholder: "Password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "w-full rounded-md border border-input bg-input px-3 py-2.5 text-sm"
					}),
					mode === "signin" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setMode("forgot");
							setError(null);
						},
						className: "text-right text-xs text-muted-foreground hover:text-foreground",
						children: "Forgot password?"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-destructive",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						disabled: busy,
						className: "flex w-full items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon disabled:opacity-50",
						children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Sign in"]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setMode(mode === "signin" ? "signup" : "signin");
					setError(null);
					setForgotSent(false);
				},
				className: "mt-4 text-center text-sm text-muted-foreground hover:text-foreground",
				children: mode === "signin" ? "New here? Create an account" : mode === "forgot" ? "Remember your password? Sign in" : "Already have an account? Sign in"
			})
		]
	});
}
//#endregion
export { AuthPage as component };
