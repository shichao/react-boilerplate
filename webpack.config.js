const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve('dist'),
    inline: true,
    host: 'localhost',
    port: 8080,
    stats: 'errors-only',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { modules: true } },
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
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@src': resolve('src'),
      '~': resolve('node_modules'),
    },
  },
  output: {
    filename: '[name].js',
    path: resolve('dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('index.html'),
      hash: true,
    }),
  ],
};
