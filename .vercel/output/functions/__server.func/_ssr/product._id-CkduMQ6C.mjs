import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { n as getSettings, t as getProduct } from "./shop.functions-Cp_jeWFp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._id-CkduMQ6C.js
var $$splitComponentImporter = () => import("./product._id-BQWLROkH.mjs");
var Route = createFileRoute("/product/$id")({
	head: ({ params }) => ({ meta: [{ title: `Product · TrendRush NG` }, {
		name: "description",
		content: `View product ${params.id} on TrendRush NG.`
	}] }),
	loader: async ({ context, params }) => {
		const opts = queryOptions({
			queryKey: ["product", params.id],
			queryFn: () => getProduct({ data: { id: params.id } })
		});
		await Promise.all([context.queryClient.ensureQueryData(opts), context.queryClient.ensureQueryData({
			queryKey: ["settings"],
			queryFn: () => getSettings()
		})]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
