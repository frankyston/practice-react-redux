const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    module: {
        "loaders": [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            // solution: https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/580
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader"
                }],
                // use style-loader in development 
                fallback: "style-loader"
            })
            // loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }]
    }
}