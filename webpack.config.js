const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

let mode = 'development'

if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

module.exports = {
    mode: mode,

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.(s[a|c]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(?:ico|svg|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },

    plugins: [
        new HTMLWebpackPlugin({
            title: 'test-relog',
            template: path.resolve(__dirname, './src/index.html'),
            favicon: path.resolve(__dirname, './src/favicon.svg'),
        }),
        new MiniCssExtractPlugin(),
    ],

    devServer: {
        open: true,
        hot: true,
        port: 8080,
    },
}
