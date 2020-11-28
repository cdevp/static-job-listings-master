const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{ 
	name: 'dev',
	mode: 'development',
	entry: './src/index.tsx',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: ['./dist', './images'],
		publicPath: './dist',
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.sass', '.scss', '.css'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
      inject: 'body',
			template: path.resolve(__dirname, 'src/index.html'),
		}),
	],
	watch: true,
	watchOptions: {
		aggregateTimeout: 200,
		poll: 500,
	}
},
{
	name: 'prod',
	mode: 'production',
	entry: './src/index.tsx',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.sass', '.scss', '.css'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
      inject: 'body',
			template: path.resolve(__dirname, 'src/index.html'),
		}),
	],
}];
