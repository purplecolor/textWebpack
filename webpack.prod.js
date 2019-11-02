const merge =require('webpack-merge');
const UglifyJSPlugin=require('uglifyjs-webpack-plugin');
const common=require('./webpack.common.js');
const webpack=require('webpack')
console.log('1111111122222')
console.log(process.env)
module.exports=merge(common,{
    devtool:'source-map',
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
})