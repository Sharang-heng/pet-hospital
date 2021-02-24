module.exports = {
    devServer: {
      host: 'localhost',
      port: 8080,
      proxy: {
        '': {
          target: 'http://localhost:8081/',// 要跨域的域名
          changeOrigin: true, // 是否开启跨域
          pathRewrite: {
            '^/': ''//请求的时候使用这个api就可以
        }
        }
      }
    }
  }