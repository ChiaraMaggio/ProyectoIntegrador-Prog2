var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

router.get('/', mainController.main);

module.exports = router;
