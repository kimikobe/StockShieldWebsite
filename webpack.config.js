const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { 
        main: './src/index.js' 
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
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
    plugins: [ 
        // new CleanWebpackPlugin('dist', {} ),
        new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: './src/index.html',
        filename: 'index.html'
        }),
        // new WebpackMd5Hash()
    ]
};