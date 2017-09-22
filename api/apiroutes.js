// Mock data by carry
'use strict'
var express = require('express')
var apiRoutes = express.Router();


/* 解决express缓存问题 */
apiRoutes.use(function (req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});
apiRoutes.all('/*', function (req, res) {
  let source;
  try {
    delete require.cache[require.resolve(`./${req.params['0']}.json`)];
    source = require(`./${req.params['0']}.json`);
  } catch (e){
    var keys = Object.getOwnPropertyNames(req.query);
    try {
      if (keys.length) {
        delete require.cache[require.resolve(`./${req.params['0']}_${req.query[keys[0]]}.json`)];
        source = require(`./${req.params['0']}_${req.query[keys[0]]}.json`);
      }
    } catch (e){
      delete require.cache[require.resolve(`./${req.params['0']}_${req.query[keys[0]]}_${req.query[keys[1]]}.json`)];
      source = require(`./${req.params['0']}_${req.query[keys[0]]}_${req.query[keys[1]]}.json`);
    }
  }
  res.json(source);
});

module.exports = apiRoutes;
