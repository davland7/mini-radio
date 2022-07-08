const path = require("path")
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  outputDir: path.resolve(__dirname, './extension/popup'),
  publicPath: '/popup',
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.devtool = isDev && 'inline-source-map'
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
