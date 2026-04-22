import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

export default [
	{
		input: "css/index.css",
		output: {
			file: "dist/index.css",
			format: "es",
		},
		plugins: [
			postcss({
				extract: true,
				minimize: false,
				plugins: [postcssImport({ path: ["node_modules"] })],
			}),
		],
	},
];
