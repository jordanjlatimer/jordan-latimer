const path = require("path");
const fs = require("fs");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/*Get all pages ending in .html in the src directory*/
const pageNames = fs
  .readdirSync("./src/slam")
  .filter(filename => path.extname(filename).toLowerCase() === ".js")
  .map(name => path.basename(name, ".js"));

/*Create an object with the entry path and plugin objects for each page.*/
let pages = { entries: {}, pluginObjects: [] };
pageNames.forEach(name => {
  pages.entries[name] = "./src/js/" + name + ".js";
  pages.pluginObjects.push(
    new HtmlWebpackPlugin({
      template: "./src/slam/" + name + ".js",
      filename: name + ".html",
      chunks: [name],
    })
  );
});

module.exports = {
  mode: "production",
  entry: pages.entries,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".sass"],
  },
  module: {
    rules: [
      {
        test: /\.sass?$/,
        exclude: /node_modules/,
        use: [MiniCssWebpackPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    mangleExports: "size",
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pages.pluginObjects,
    new MiniCssWebpackPlugin(),
    new CompressionPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "assets/*",
          context: "./src",
          noErrorOnMissing: true,
        },
      ],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "../dev/report.html",
    }),
  ],
  performance: {
    hints: "warning",
  },
};
