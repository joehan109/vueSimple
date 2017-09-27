var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = {
  env: merge(prodEnv, {
    NODE_ENV: '"development"'
  }),
  openMock: true,
  proxyTable: {
    // proxy all requests starting with /api to /mock
    '/api/**': {
      target: 'http://localhost:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/mock'
      }
    }
  }
}
