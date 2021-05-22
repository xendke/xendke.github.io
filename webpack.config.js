const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(css|sass|scss)$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(ico|txt)$/,
				loader: 'file-loader?name=[name].[ext]', // <-- retain original file name
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),
	],
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			assets: path.resolve(__dirname, 'src/assets/'),
		},
	},
}
