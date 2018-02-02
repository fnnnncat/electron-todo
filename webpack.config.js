var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'app/[name]_[hash:8].js'  // 打包后文件
    },
    module: {
        rules: [

            { test: /\.css$/, use: ['css-loader'] },
            { test: /\.(png|jpg|jpeg|svg|ico)$/, use: ['url-loader'] },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react'],
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.scss', '.less','css', 'jsonp'],
    },

    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        inline: true,
        port: 9000
    }
    ,
    plugins: [
        new HtmlWebpackPlugin({
            title: "This is the result",
            filename: "./index.html",
            template: "./public/index.html",
            inject: "body",
            favicon: "",
            minify: {
                caseSensitive: false,
                collapseBooleanAttributes: true,
                collapseWhitespace: true
            },
            hash: true,
            cache: true,
            showErrors: true,
            chunks: "",
            chunksSortMode: "auto",
            excludeChunks: "",
            xhtml: false
        })
    ]
};

