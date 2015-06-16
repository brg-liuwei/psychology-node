var express = require('express');
var help = express.Router();
help.get('/', function(req, res, next) {
    res.render('help', {
        info: '这里是帮助信息',
        currentPage: 'help'
    });
});

module.exports = help;
