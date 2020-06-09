const { createProxyMiddleware } = require('http-proxy-middleware');

// this is a proxy setup. reuse later
module.exports = function (app) {
  app.use(
    '/v2',
    createProxyMiddleware({
      target: '/https://emailverifierapi.com',
      changeOrigin: true,
      withCredentials: true,
      contentType: 'application/json',
      cacheControl: 'no-cache'
    })
  );
};