var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.vista)


router.get('/:user', userController.index)


module.exports = router;