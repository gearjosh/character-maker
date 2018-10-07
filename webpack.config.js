const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index_bundle.js',
    // path: path.resolve(__dirname, 'dist')
    path: __dirname + '/dist'
  },
  {
    plugins: [
      new UglifyJsPlugin(),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'character maker',
        template: './src/index.html'
        favicon: './src/img/favicon.ico'
      })
    ]
  }
  {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        },
        {
          test: /\.scss$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader"
          ]
        }
      ]
    }
  }

};
