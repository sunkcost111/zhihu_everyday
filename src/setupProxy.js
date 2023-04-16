const { createProxyMiddleware } = require('http-proxy-middleware')
//中间件处理跨域
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://127.0.0.1:7100',
      changeOrigin: true,
      ws: true,
      pathRewrite: { '/^api': '' },
    })
  )
}
