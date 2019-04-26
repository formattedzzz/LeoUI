
process.env.NODE_ENV = 'development'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
let baseConfig = require('./base.config.js')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// function succeed (...msgs) {
//   let msg = ' ';
//   [].forEach.call(msgs, (item) => { msg += item })
//   console.log('\033[42;30m' + 'success' + '\033[40;32m' + msg + '\033[0m' + '\n')
// }
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    watchOptions: {
      poll: true
    },
    overlay: { warnings: false, errors: true },
    contentBase: resolve('dist'),
    port: 7009,
    historyApiFallback: true,
    setup (app) {
      console.log('your demo app is runing here http://localhost:7009')
      app.get('/some', function (req, res) {
        res.json({
          custom: 'response'
        })
      })
    },
    stats: 'errors-only',
    // quiet: true,
    hot: true,
    progress: true
  },
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.NamedModulesPlugin(),
    
    new webpack.HotModuleReplacementPlugin()
    /** @开发模式没有必要另外提取css */
    // new MiniCssExtractPlugin({
    //   filename: '[name].css'
    // })
  ]
})
