const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use: [
                "style-loader", 
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        historyApiFallback: true,
        disableHostCheck: true
    },
};