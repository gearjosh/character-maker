const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index_bundle.js',
    // path: path.resolve(__dirname, 'dist')
    path: __dirname + '/dist'
  },
  {
    plugins: [
      new HtmlWebpackPlugin();
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
