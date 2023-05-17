const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            inject: 'body'
        })
    ],
    mode: 'development',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        static: './dist',
        open: true
    },
    devtool: 'eval-source-map'
}