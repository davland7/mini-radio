const path = require("path")
const webpack = require('webpack')

module.exports = {
  outputDir: path.resolve(__dirname, './extension/popup'),
  publicPath: '/popup',
  productionSourceMap: false,
  configureWebpack: {
    devtool: 'cheap-module-source-map',
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
      })
    ]
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  }
}
