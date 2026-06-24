import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getSettings } from "./shop.functions-Cp_jeWFp.mjs";
import { r as getOrderById } from "./orders.functions-CcdhgWnp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout._orderId-CXxdkbjv.js
var $$splitComponentImporter = () => import("./checkout._orderId-DQQYK2B6.mjs");
var Route = createFileRoute("/checkout/$orderId")({
	head: () => ({ meta: [{ title: "Checkout — TrendRush NG" }, {
		name: "robots",
		content: "noindex"
	}] }),
	loader: async ({ context, params }) => {
		await Promise.all([context.queryClient.ensureQueryData({
			queryKey: ["order", params.orderId],
			queryFn: () => getOrderById({ data: { id: params.orderId } })
		}), context.queryClient.ensureQueryData({
			queryKey: ["settings"],
			queryFn: () => getSettings()
		})]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
