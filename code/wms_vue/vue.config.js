const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8888,
      host: '127.0.0.1',
      // 跨域重定向
      proxy: {
        '/api': {
          target: 'https://v.itheima.net',
          changeOrigin: true
        }
      }
    }
  }
})
