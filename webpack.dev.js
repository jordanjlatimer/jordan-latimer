const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  mode: "development",
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
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  devtool: "eval",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    watchContentBase: true,
    port: 3000,
    inline: true,
    open: true,
    stats: "minimal",
  },
  performance: {
    hints: false,
  },
  plugins: [...pages.pluginObjects],
};
