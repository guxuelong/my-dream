var merge = require('webpack-merge')
var prodEnv = require('./prod.env')


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  apiHost: '"https://qmobile.hdfax.com/"'
  // apiHost: '"/api/"'
})
