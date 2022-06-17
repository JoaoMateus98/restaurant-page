const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: {
            import: './src/index.js',
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        client: {
            reconnect: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: `Carne No Fogo`,
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
    },
    optimization: {
        runtimeChunk: 'single',
    },
}