const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, './extension/popup'),
  publicPath: '/popup',
  productionSourceMap: false,
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
