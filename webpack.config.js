const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'app.js'),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  plugins: [
    ...(isProduction ? [new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])] : []),
    new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src', 'index.html')}),
  ],
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
};
