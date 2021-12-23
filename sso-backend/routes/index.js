var express = require('express');
var verifyRequest = require('../middlewares/verifyRequest');
var { indexController } = require('../controllers/index.controller');
var router = express.Router();

/* GET */
router.get('/', verifyRequest, async function (req, res, next) {
  await indexController(req, res);
});

module.exports = router;
