var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var mode = process.env.NODE_ENV;
var lessLoader;

if (mode === 'production') {
    lessLoader = ExtractTextPlugin.extract('css!less');
} else {
    lessLoader = 'style!css!less';
}

module.exports = {
    entry: {
        app: './src/modules/main.js'
    },
    output: {
        path: './www',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: false,
            inject: 'body'
        }),
        new CopyWebpackPlugin([
            // 在这里增加需要将src目录下拷贝至wwww目录的文件
            { from: './src/page', to: 'page' },
            { from: './src/img', to: 'img' }
        ])
    ],
    module: {
        loaders: [
            { test: /\.less$/, loader: lessLoader },
            { test: /\.html$/, loader: 'html' },
            { test: /.*\.(gif|png|jpe?g|svg)$/i, loader: 'url' },
            { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf$|\.eot$|\.svg$/, loader: 'file-loader' }
        ]
    }
};
