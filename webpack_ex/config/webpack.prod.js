/**
 * Created by 93659 on 2018/11/22.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: ["./src/js/index.js","./src/index.html",] ,// string | object | array  // 这里应用程序开始执行
  // webpack 开始打包

  output: {
    // webpack 如何输出结果的相关选项

    path: path.resolve(__dirname, "./build"),
    filename: "./js/built.js", // string    // 「入口分块(entry chunk)」的文件名模板（出口分块？）
  },

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '../images',
              outputPath: 'images',
              name: '[hash:10].[ext]'
            }
          }
        ]
      },


      {
        test: /\.js$/, // 涵盖 .js 文件
        enforce: "pre", // 预先加载好 jshint loader
        exclude: /node_modules/, // 排除掉 node_modules 文件夹下的所有文件
        use: [
          {
            loader: "jshint-loader",
            options: {
              camelcase: true,
              emitErrors: true,
              failOnHint: true,
              esversion: 6
            }
          }
        ]
      },


      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      }


    ],

  },


  plugins: [
    // ...
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()

  ],
  devServer: {
    contentBase: './build',
    compress: true,
    port: 3000,
    open:true
  }

}