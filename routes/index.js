var express = require('express');
var router = express.Router();
let Article = require('../models/articleModel');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
