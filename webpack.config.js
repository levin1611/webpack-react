const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:'./src/main.js',
    output:{
        path:__dirname +'/build',
        filename:'build.js'
    },
    devtool:'evel-source-map',
    devServer:{
        open:true,
        port:9999,
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:["@babel/preset-env","@babel/react"]
                    }
                }],
                exclude: /node_modules/

            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:[{
                    loader: "style-loader", // creates style nodes from JS strings
                   
                }, {
                    loader: "css-loader", // translates CSS into CommonJS
                    
                }, {
                    loader: "less-loader", // compiles Less to CSS

                }]
            },
            {
                test:/\.(png|jpe?g|svg|git)$/,
                loader:'url-loader',
                options:{
                    limit:32000
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html'
        })
    ]
}