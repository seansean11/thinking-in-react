const webpack = require('webpack');
const path = require('path');

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
	plugins: [
		require('postcss-smart-import'),
		require('precss'),
		require('autoprefixer'),
		require('postcss-css-variables')
	],
	devtool: "cheap-module-eval-source-map",
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
