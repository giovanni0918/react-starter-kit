const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: __dirname,
        publicPath: '/public',
        filename: './public/bundle.js'
    },
    module: {
        plugins: [new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            })],
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
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
    }
};
