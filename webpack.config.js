const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.ts"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: resolve("dist"),
    inline: true,
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-modules-typescript-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    alias: {
      "@src": resolve("src")
    }
  },
  output: {
    filename: "[name].js",
    path: resolve("dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: resolve("src/index.html"),
      hash: true
    })
  ]
};
