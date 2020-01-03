/*
 * @Author: last order
 * @Date: 2019-08-18 20:40:03
 * @LastEditTime : 2019-12-24 20:23:02
 */
const webpack = require('webpack')
const path = require('path')
const env = require('./env')
const webpackBaseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const devConfig = merge(webpackBaseConfig, {
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    host: 'localhost',
    port: 8080,
    hot: true,
    compress: true,
    noInfo: true,
    overlay: {
      warnings: true,
      errors: true
    },
    clientLogLevel: 'none'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['项目成功启动，地址是localhost:8080']
      }
    })
  ]
})
module.exports = devConfig
