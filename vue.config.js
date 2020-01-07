const path = require('path')
function resolve (folderName) {
  return path.join(__dirname, folderName)
}

module.exports = {
  devServer: {
    port: 8087
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
  }
}
