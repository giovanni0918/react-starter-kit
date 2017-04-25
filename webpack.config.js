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
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
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
