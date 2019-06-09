module.exports = {
  devServer: {
    open: true
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/project' : '/',
  // 设置全局scss变量文件路径
  css: {
    loaderOptions: {
      sass: {
        data: `@import '~@/style/variables.scss';`
      }
    }
  }
}