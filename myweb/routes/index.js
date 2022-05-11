var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Payment' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Payment' });
});

module.exports = router;
