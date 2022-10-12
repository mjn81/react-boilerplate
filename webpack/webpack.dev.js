const webpack = require('webpack');
const reactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		open: true,
	},
	devtool: 'cheap-module-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development'),
		}),
		new reactRefreshWebpackPlugin(),
	],
};
