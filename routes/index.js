var express = require('express');
var router = express.Router();
const userController = require('../controllers');

router.get('/', userController.baseicAPI);
router.get('/test', userController.testAPI);
router.post('/post_test', userController.postTestAPI);
var test = "";

module.exports = router;
