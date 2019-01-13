const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { resolvePath } = require('./utils')

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: resolvePath("build")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}