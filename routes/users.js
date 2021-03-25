var express = require('express');
var router = express.Router();
var p = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  p += 1;
  res.send(`users accesses are: ${p}`);
});

module.exports = router;
