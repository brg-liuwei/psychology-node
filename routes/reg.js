var express = require('express');
var reg = express.Router();

/* GET home page. */
reg.get('/', function(req, res, next) {
  res.render('reg', {
      currentPage: 'reg'
  });
});

module.exports = reg;
