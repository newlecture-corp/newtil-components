import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";

export default [
	// CSS bundle — dist/index.css
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
	// JS bundle (entry) — dist/js/index.js : 모든 web component 등록
	{
		input: "js/index.js",
		output: {
			file: "dist/js/index.js",
			format: "es",
		},
	},
	// JS individual — dist/js/n-resize-handle.js : 개별 import 용
	{
		input: "js/n-resize-handle.js",
		output: {
			file: "dist/js/n-resize-handle.js",
			format: "es",
		},
	},
];
