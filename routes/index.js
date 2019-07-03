var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/player', function (req, res, next) {
  res.render('player');
});

router.get('/editPlayer/:PlayerId', function (req, res, next) {
  res.render('editplayer');
});

module.exports = router;