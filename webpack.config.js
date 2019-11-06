const path=require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
module.exports={
		entry:{
			main:'./src/index.js',
			vendor:['lodash']
		},
		output:{
			filename:'[name].[chunkhash].js',
			path:path.resolve(__dirname,'dist')
		},
		plugins:[
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({title:"Caching"}),
			new webpack.HashedModuleIdsPlugin()
		],
		optimization:{
			splitChunks:{
				cacheGroups:{
					commons:{
						name:"lodash",
						chunks:"initial",
						minChunks:1
					}
				}
			}
		}
}