const path = require('path');

module.exports = {
    entry: __dirname + '/app/js/app.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "app.js"
    },

    resolve: {
        modules: [
            path.join(__dirname, 'app'),
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '.json', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: [
                            'es2015',
                            'react'
                        ],
                        plugins: []
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }]
            }
        ]
    }
};
