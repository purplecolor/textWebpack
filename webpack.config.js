const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const webpack=require('webpack')
module.exports={
		entry:{
			app:'./src/index.js',
		},
		devServer:{
			contentBase:"./dist"
		},
		output:{
			filename:'[name].bundle.js',
			path:path.resolve(__dirname,'dist'),
			publicPath:'/'
		},
		plugins:[
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({title:"Output Management"}),
			new webpack.NamedModulesPlugin(),
			new webpack.HotModuleReplacementPlugin()
		]
}