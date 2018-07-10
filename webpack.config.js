var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractStyles = new ExtractTextPlugin({
    filename: 'main.css',
});

module.exports = {
    entry: __dirname + '/app/index.js',
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:/(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: extractStyles.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader',
                options: {
                    limit: 10240
                }
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        extractStyles
    ]
};