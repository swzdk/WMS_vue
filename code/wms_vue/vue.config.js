const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      open: true,
      port: 8080,
      host: '127.0.0.1',
      // 跨域重定向
      proxy: {
        '/api': {
          target: 'http://www-wms-java.itheima.net/',
          changeOrigin: true
        },
        '/ips': {
          target: 'http://www-wms-java.itheima.net/',
          changeOrigin: true
        }
      }
    }
  }
})
