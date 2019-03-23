const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'index.bundle': './scripts/index.js',
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
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-react-constant-elements',
                            '@babel/plugin-transform-react-inline-elements',
                            '@babel/plugin-transform-react-jsx',
                            '@babel/plugin-transform-runtime',
                        ],
                    },
                },
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
