var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Nube'});
});

router.get('/home', function(req, res, next) {
	res.render('home', { title: 'Home'});
});

router.get('/hola', function(req, res, next) {
	res.render('hola', { title: 'Juani'});
});

module.exports = router;
