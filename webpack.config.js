const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babelEnvOptions = {
	targets: {
		chrome: '63', // released 12/5/2017
		firefox: '57', // released 11/13/2017
	},
};

module.exports = {
	mode: 'production',
	entry: {
		'js/background': './js/background/entry.js',
		'js/gmail-injection': './js/gmail-injection/entry.js',
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'extension'),
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: [ /node_modules\// ],
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', babelEnvOptions],
						],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					// see https://webpack.js.org/plugins/mini-css-extract-plugin/
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
				]
			},
		],
	},
	plugins: [
		// see https://webpack.js.org/plugins/mini-css-extract-plugin/
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	],
	optimization: {
		// Mozilla Addons discourages minification:
		// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Source_Code_Submission
		minimize: false,
		namedModules: true,
	},
	stats: {
		builtAt: true,
		colors: true,
		entrypoints: false,
		hash: false,
		modules: false,
		publicPath: false,
		version: false,
	},
};
