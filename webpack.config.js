const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const WorkboxPlugin=require('workbox-webpack-plugin')
module.exports={
		entry:'./src/index.js',
		devtool:'inline-source-map',
		output:{
			filename:'[name].bundle.js',
			path:path.resolve(__dirname,'dist')
		},
		plugins:[
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({title:"Output Management"}),
			new WorkboxPlugin.GenerateSW({
				clientsClaim:true,
				skipWaiting:true
			})
		],
		module:{
			rules:[
				{
					test:/\.tsx?$/,
					use:'ts-loader',
					exclude:/node_modules/
				}
			]
		},
		resolve:{
			extensions:['.tsx','ts','.js']
		}
}