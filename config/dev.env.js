var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = {
  env: merge(prodEnv, {
    NODE_ENV: '"development"'
  }),
  openMock: true,
  proxyTable: {
    // proxy all requests starting with /api to jsonplaceholder
    '/api/**': {
      target: 'http://localhost:8080/mock',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
