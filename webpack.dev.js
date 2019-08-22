const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    devEntry: './src/devEntry.js',
    indexEntry: './src/indexEntry.js',
    cursosEntry: './src/cursosEntry.js'
  },//[path.resolve(__dirname,'src/entry.js'),path.resolve(__dirname,'src/devEntry.js')],
  mode: 'development',
  devServer: {
    host: '0.0.0.0',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|svg|png|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname,'src/index.html'),
      chunks: ['indexEntry','devEntry']
    }),
    new HtmlWebpackPlugin({
      filename: 'cursos.html',
      template: path.resolve(__dirname,'src/cursos.html'),
      chunks: ['cursosEntry','devEntry']
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      Swiper: 'swiper'
    })
  ]
};
