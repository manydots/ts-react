var webpack = require('webpack');
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var vendor = ['react', 'react-dom']
module.exports = {
    entry: {
        index: './src/index.tsx',
        //vendor: vendor
    },
    output: {
        path: path.resolve(__dirname, '../build'), //输出文件的绝对路径
        filename: '[name].js',
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            components: path.join(__dirname, 'components'),
            utils: path.join(__dirname, 'utils')
        }
    },
    devServer: {
        contentBase: "./",
        host: 'localhost',
        port: 8088,
        inline: true,
        compress: true
    },
    module: {
        rules: [{
            test: /\.(tsx|jsx|ts|js)?$/,
            exclude: /node_modules/,
            loader: "awesome-typescript-loader"
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }, {
            test: /\.(css|less)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader', 'less-loader']
        }, {
            test: /\.(css|scss)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, 'css-loader', 'sass-loader']
        }]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            })
        ],
    }
};