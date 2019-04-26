
process.env.NODE_ENV = 'production'
// const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const rimraf = require('rimraf')
let baseConfig = require('./base.config.js')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
rimraf(resolve('dist'), (err) => {
  if (err) {
    console.log(err)
  }
})
module.exports = merge(baseConfig, {
  mode: 'production',
  // devtool: 'source-map',
  devtool: false,
  // vue应该剔除为扩展依赖
  externals: {
    'vue': {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  output: {
    path: resolve('dist'),
    filename: '[name].umd.js',
    library: 'leoui',
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  // output: {
  //   filename: '[name].[chunkhash:5].js',
  //   filename: '[name].js',
  //   publicPath: '/'
  //   // 指定了publicPath所有资源的引用路径就会变为拼接上
  //   // '/' 包括注入到模版html的路径 src="app.hash.js" --> src="/app.hash.js"
  //   // 所以指定了的话 打包出来的路径必须放到服务端环境才能访问
  // },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: '[name].min.css'
    }),
    new OptimizeCSSPlugin({
      /** @开启样式压缩同时咱写的是小库需要开启map */
      // cssProcessorOptions: {
      //   safe: true,
      //   map: { inline: false }
      // }
    }),
    // new CopyWebpackPlugin([
    //   /** @打包一个库肯定是不会用到这个的先写上 */
    //   {
    //     from: resolve('static'),
    //     to: resolve('dist/static'),
    //     ignore: ['.*']
    //   }
    // ]),
    new BundleAnalyzerPlugin()
  ]
})
