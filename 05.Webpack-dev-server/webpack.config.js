const path = require('path');

const config = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 1984,

    },
    module: {
        rules: [{
            //Loaders Zone

            test: /\.css$/ /*file type*/,
            use: ['style-loader', 'css-loader'] /*loader of file*/

        }]
    }
}

module.exports = config