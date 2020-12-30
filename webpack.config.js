const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index.bundle': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'static/bundles/'),
        filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg)$/,
                use: {
                    loader: 'url',
                },
            },
            {
                test: /\.json$/,
                use: {
                    loader: 'json',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
            },
        ],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors.bundle',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
};
