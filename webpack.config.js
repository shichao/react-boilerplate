const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=//localhost:8080/__webpack_hmr&timeout=20000',
      './src/index.tsx',
    ],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sc|c)ss$/i,
        include: /\.module\.(sc|c)ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-modules-typescript-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.(sc|c)ss$/i,
        exclude: /\.module\.(sc|c)ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: false } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    alias: {
      '@src': resolve('src'),
    },
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new ForkTsCheckerNotifierWebpackPlugin({
      title: 'TypeScript',
      excludeWarnings: true,
    }),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: 'index.html',
      template: resolve('src/index.html'),
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
