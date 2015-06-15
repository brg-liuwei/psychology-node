var express = require('express');
var logout = express.Router();

/* GET home page. */
logout.get('/', function(req, res, next) {
    res.send('logout');
});

module.exports = logout;
