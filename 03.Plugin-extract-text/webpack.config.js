const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
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
        rules: [{
            //Loaders Zone

            test: /\.css$/ /*file type*/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            }, 'css-loader'
            ]
        }]
    }
}

module.exports = config