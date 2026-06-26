import { m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { i as listProducts, r as listCategories } from "./shop.functions-DVYv__ag.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-DVxlYb8B.js
var $$splitComponentImporter = () => import("./category._slug-DPE1CcIj.mjs");
var Route = createFileRoute("/category/$slug")({
	head: ({ params }) => ({ meta: [{ title: `${params.slug === "plugmarket" ? "PlugMarket" : "HotPick NG"} — TrendRush NG` }, {
		name: "description",
		content: `Shop ${params.slug} on TrendRush NG.`
	}] }),
	loader: async ({ context, params }) => {
		const opts = queryOptions({
			queryKey: [
				"products",
				"cat",
				params.slug
			],
			queryFn: () => listProducts({ data: {
				categorySlug: params.slug,
				limit: 60
			} })
		});
		const catsOpts = queryOptions({
			queryKey: ["categories"],
			queryFn: () => listCategories()
		});
		await Promise.all([context.queryClient.ensureQueryData(opts), context.queryClient.ensureQueryData(catsOpts)]);
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
