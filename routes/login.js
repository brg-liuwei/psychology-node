var express = require('express');
var login = express.Router();

/* GET home page. */
login.get('/', function(req, res, next) {
  res.send('login');
});

module.exports = login;
