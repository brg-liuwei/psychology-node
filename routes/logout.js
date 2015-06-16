var express = require('express');
var logout = express.Router();

/* GET home page. */
logout.get('/', function(req, res, next) {
    res.render('logout', {
        currentPage: 'logout'
    });
});

module.exports = logout;
