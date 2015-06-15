var express = require('express');
var user = express.Router();

/* GET users listing. */
user.get('/:user', function(req, res, next) {
    res.send("user is " + req.params.user);
});

module.exports = user;
