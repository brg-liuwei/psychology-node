var express = require('express');
var index = express.Router();

/* GET home page. */
index.get('/', function(req, res, next) {
  res.render('index', {
      currentPage: 'index',
      title: '这里是title',
      content: '这里是内容',
      user: '',
      success: '成功信息',
      error: '失败信息'
  });
});

module.exports = index;
