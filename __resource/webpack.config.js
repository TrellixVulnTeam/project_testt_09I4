const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtraPlugin = require("mini-css-extract-plugin");
// const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        app: ['babel-polyfill', './js/app.js']
    },
    output: {
        path:path.resolve('../dist/'),
        filename: "[name].js",
    },
    module: {
        rules : [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtraPlugin.loader, 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "../index.html",
        }),
        new MiniCssExtraPlugin ({
            filename: "/js/common.css",
        }),
        // new CleanWebpackPlugin(),

        // new HtmlWebpackPlugin({
        //     filename: 'output.pug',
        //     minify: false
        // }),
    ],
    devServer: {
        static: {
            directory: path.resolve('../dist')
        },
        port: 8020,
    }
};