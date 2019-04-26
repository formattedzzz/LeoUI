const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin') 配置失败
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
// console.log(Array.isArray(process.argv), process.argv)
console.log(resolve('src/index.js'))
/* 检查process.env.NODE_ENV 取决于node运行时是那个文件引用的base.config */
console.log('process.env.NODE_ENV:', process.env.NODE_ENV)
let isdev = process.env.NODE_ENV === 'development'

/** @基础打包配置 */
module.exports = {
  // mode: process.env.NODE_ENV,
  entry: {
    leoui: isdev ? resolve('demo/main.js') : resolve('src/leoui.js')
    // app: resolve('demo/main.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        include: [resolve('src'), resolve('demo')]
      },
      {
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            
            loaders: {
              stylus: [isdev ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
            }
          }
        }]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [isdev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(styl|stylus)$/,
        use: [isdev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader']
      },
      /** @关于urlloader 因为他是直接打包进js的 所以这个我们用得到 需要import才能触发 */
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
      /** @关于fileloader file-loader的工作只是相当于你使用import去导入一张图片的时候强行拷贝到dist下对应的路径下 所以打包一个库不需要这个 */
      // {
      //   test: /\.(png|jpg|jpeg|svg|gif)$/,
      //   use: 'file-loader'
      // },
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.jsx', '.styl', '.stylus', '.css'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@src': resolve('src'),
      '@demo': resolve('demo'),
      'static': resolve('static')
    }
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `LeoUI v1.0.0 - [filebase], [hash], ${new Date().toLocaleString()} NNCZ (c) 2017-2018 Released under the MIT License.`
    }),
    new VueLoaderPlugin()
  ]
}
