const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env']
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/,
          use: ['file-loader']
        },
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: path.resolve('./public/index.html'),
          favicon: './public/favicon.ico'
        })
    ]
};
