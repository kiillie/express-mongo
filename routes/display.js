var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/twitter/:search', function(req, res, next) {
  console.log(req.params);
});

module.exports = router;
