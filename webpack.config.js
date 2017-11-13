const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, {
                    loader: 'postcss-loader',
                    options: { // 如果没有options这个选项将会报错 No PostCSS Config found
                        plugins: (loader) => [
                            require('postcss-import')({
                                root: loader.resourcePath
                            }),
                            require('autoprefixer')(), //CSS浏览器兼容
                            require('cssnano')() //压缩css
                        ]
                    }
                }]
            })
        }, {
            test: /\.(png|jpg|ico)$/,
            loader: "url-loader?limit=8&name=./static/img/[name].[ext]"
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
            }
        }, {
            test: /\.mp3(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10,
                name: './static/mp3/[name].[ext]'
            }
        }]
    },
    plugins: [
        new extractTextPlugin("[name].css"),
        new htmlWebpackPlugin({
            title: "flappybird",
            favicon: './src/Images/flappybird.ico',
            filename: __dirname + '/dist/index.html',
            chunks: ['main'],
            template: './src/template/index.ejs',
        })
    ],

}