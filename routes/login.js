var express = require('express');
var login = express.Router();

/* GET home page. */
login.get('/', function(req, res, next) {
  res.render('login', {
      currentPage: 'login'
  });
});

module.exports = login;
