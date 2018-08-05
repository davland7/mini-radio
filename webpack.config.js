const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const env = process.env;

module.exports = {
  entry: {
    popup: path.join(__dirname, 'src/popup.js')
  },
  output: {
    path: path.join(__dirname, env.NODE_ENV === 'production' ? 'dist/js' : 'extension/js'),
    filename: '[name].js'
  },
  watch: env.NODE_ENV !== 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '../style.css',
      disable: env.NODE_ENV !== 'production'
    })
  ]
}

if (env.NODE_ENV === 'production') {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
