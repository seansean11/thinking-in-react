const webpack = require('webpack');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'client'),
	entry: {
		app: './app'
	},
	output: {
    filename: '[name].bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'client')
	},
	devtool: "cheap-module-eval-source-map",
	plugins: [
		new StyleLintPlugin({
			configFile: '.stylelintrc',
			files: '**/*.css',
			failOnError: false,
			quiet: false
		}),
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader'
			},
			{
				test: /\.css?$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.css/,
				use: [
					{
						loader: 'postcss-loader'
					}
				]
			}
		]
	}
};
