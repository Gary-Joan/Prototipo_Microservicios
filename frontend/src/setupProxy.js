const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://ejemplo-6m7o73q5pq-uc.a.run.app',
      changeOrigin: true,
    })
  );
};