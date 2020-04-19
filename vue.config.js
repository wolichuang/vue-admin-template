module.exports = {
  devServer: {
    port: '8080',
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'https://www.liulongbin.top:8888/',
        changeOrigin: true,
        wx: true
      }
    }
  }
}
