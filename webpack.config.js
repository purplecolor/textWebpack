const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
	entry:{
		index:'./src/index.js',
	},
	output:{
		chunkFilename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
		new HtmlWebpackPlugin({title:"Code Splitting"}),
		
	],
}