import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin'

export default {
  entry: "./js/src/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /.css$/, exclude: /node_modules/,  use: ["style-loader", {
          loader: MiniCssExtractPlugin.loader,
          options: {
              hmr: true
          }
      } ,"css-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: false,
      favicon: "./favicon.ico",
      filename: "./index.html",
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
        filename: 'main.[contenthash].css'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: "./build/",
    hot: true
  }
};
