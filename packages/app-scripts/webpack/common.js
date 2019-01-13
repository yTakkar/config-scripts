const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack');

const { resolvePath, isDev, env } = require('./utils')

module.exports =  {
  entry: resolvePath('src/index.js'),
  output: {
    path: resolvePath('build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.worker\.(js|ts)$/,
        use: {
          loader: 'workerize-loader',
        }
      }
    ]
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: resolvePath('src/index.html')
    }),
    new DotenvPlugin({
      path: resolvePath(`./.env.${env}`),
      systemvars: true
    })
  ]
}
