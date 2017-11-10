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
                fallback: "style-loader",
                use: "css-loader"
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
                limit: 50 * 1000,
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