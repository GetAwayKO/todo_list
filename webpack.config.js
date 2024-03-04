const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./public/build"),
    filename: "app_bundle.js",
  },
  target: "web",
  devServer: {
    host: "0.0.0.0",
    port: "5000",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  watchOptions: {
    poll: 1000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new FaviconsWebpackPlugin(path.join(__dirname, "public", "favicon.ico")),
  ],
};
