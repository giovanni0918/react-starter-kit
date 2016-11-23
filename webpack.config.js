const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './scripts/index.js',
    output: {
        path: __dirname,
        publicPath: '/static',
        filename: './static/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'es2015', 'react'
                    ],
                    plugins: ['transform-react-constant-elements', 'transform-react-inline-elements']
                }
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.(svg|png|jpg)$/,
                loader: 'url'
            }, {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
    ]
};
