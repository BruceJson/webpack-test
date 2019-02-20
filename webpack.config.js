const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            }, {
                loader: 'postcss-loader'
            }]
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
            }
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: path.posix.join('static', 'css/[name].[contenthash].css'),
            chunkFilename: path.posix.join('static', 'css/[id].[contenthash].css')
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.vue', '.json']
    },
    mode: 'development'
};