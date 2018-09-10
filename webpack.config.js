'use strict';
var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './public/js/app.es6'
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, ".build")
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'public/css' }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.es6$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    mode: "development"
}
