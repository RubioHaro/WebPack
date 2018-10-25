const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/styles.css",
            //filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                //Loaders Zone

                test: /\.css$/ /*file type*/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                }, 'css-loader'
                ]
            },
            {
                //Loaders Zone

                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/ /*file type*/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                    }
                }
            },
            {
                //Loaders Zone

                test: /\.js$/ /*file type*/,
                use: {loader: 'babel-loader'}
            }
        ]
    }
};

module.exports = config;