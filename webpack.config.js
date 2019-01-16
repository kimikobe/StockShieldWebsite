const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
        {
            test: /\.jsx|js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            },
        },
        {
            test: /\.scss$/,
            use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            }
            ]
        }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src')
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        }),
    ]
};