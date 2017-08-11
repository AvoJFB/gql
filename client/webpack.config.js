const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './client/src/index.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8080,
  },
  resolve: {
    modules: [
      'app',
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
