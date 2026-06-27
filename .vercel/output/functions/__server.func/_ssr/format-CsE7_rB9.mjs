//#region node_modules/.nitro/vite/services/ssr/assets/format-CsE7_rB9.js
function formatNaira(amount) {
	return new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		maximumFractionDigits: 0
	}).format(amount);
}
//#endregion
export { formatNaira as t };
