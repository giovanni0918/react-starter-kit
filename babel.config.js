module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-transform-react-constant-elements',
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-transform-runtime',
    ],
};
