import { o as __toESM } from "../_runtime.mjs";
import { s as require_react } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { _ as useNavigate, g as Link, v as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { y as LoaderCircle } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as supabase } from "./client-Bv7kkfwx.mjs";
import { t as useAuth } from "./use-auth-xTw4pcBa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BmjMCESw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/auth.tsx?tsr-split=component";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "mx-auto flex max-w-md flex-col px-4 py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
				to: "/",
				className: "text-xs text-muted-foreground hover:text-foreground",
				children: "← Back"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 72,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-2 font-display text-3xl font-black",
				children: mode === "signup" ? "Create account" : mode === "forgot" ? "Reset password" : "Welcome back"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-sm text-muted-foreground",
				children: mode === "forgot" ? "Enter your email and we'll send you a link to reset your password." : "Sign in to track your orders. Or skip — you can checkout as a guest."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 78,
				columnNumber: 7
			}, this),
			mode !== "forgot" && /* @__PURE__ */ (void 0)("div", {
				className: "my-5 flex items-center gap-3 text-xs text-muted-foreground",
				children: /* @__PURE__ */ (void 0)("div", { className: "h-px flex-1 bg-border" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 13
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 29
			}, this),
			forgotSent ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 rounded-md border border-neon/30 bg-neon/10 p-4 text-sm text-neon",
				children: "Check your inbox for a password-reset link."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 86,
				columnNumber: 21
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
				onSubmit: handleEmail,
				className: "space-y-3",
				children: [
					mode === "signup" && /* @__PURE__ */ (void 0)("input", {
						placeholder: "Full name",
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "w-full rounded-md border border-input bg-input px-3 py-2.5 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 33
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
						type: "email",
						required: true,
						placeholder: "Email",
						value: email,
						onChange: (e) => setEmail(e.target.value),
						className: "w-full rounded-md border border-input bg-input px-3 py-2.5 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 90,
						columnNumber: 11
					}, this),
					mode !== "forgot" && /* @__PURE__ */ (void 0)("input", {
						type: "password",
						required: true,
						minLength: 6,
						placeholder: "Password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						className: "w-full rounded-md border border-input bg-input px-3 py-2.5 text-sm"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 91,
						columnNumber: 33
					}, this),
					mode === "signin" && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => {
							setMode("forgot");
							setError(null);
						},
						className: "text-right text-xs text-muted-foreground hover:text-foreground",
						children: "Forgot password?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 33
					}, this),
					error && /* @__PURE__ */ (void 0)("div", {
						className: "text-sm text-destructive",
						children: error
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 98,
						columnNumber: 21
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						disabled: busy,
						className: "flex w-full items-center justify-center gap-2 rounded-md bg-neon px-4 py-3 font-bold text-neon-foreground shadow-neon disabled:opacity-50",
						children: [busy && /* @__PURE__ */ (void 0)(LoaderCircle, { className: "h-4 w-4 animate-spin" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 100,
							columnNumber: 22
						}, this), mode === "signup" ? "Create account" : mode === "forgot" ? "Send reset link" : "Sign in"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 99,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 88,
				columnNumber: 18
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				onClick: () => {
					setMode(mode === "signin" ? "signup" : "signin");
					setError(null);
					setForgotSent(false);
				},
				className: "mt-4 text-center text-sm text-muted-foreground hover:text-foreground",
				children: mode === "signin" ? "New here? Create an account" : mode === "forgot" ? "Remember your password? Sign in" : "Already have an account? Sign in"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 105,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 71,
		columnNumber: 10
	}, this);
}
//#endregion
export { AuthPage as component };
