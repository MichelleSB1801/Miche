var express = require('express');
var router = express.Router();


const homeController = require('../controllers/homeController')
const clickController = require('../controllers/clickController')

/* GET home page. */


router.get('/', homeController.home)

router.get('/frases', function(req, res, next) {
  let frases =[{
  	
  	id: 1,
  	frase: 'hola1'
  	},{

  	id: 2,
  	frase: 'hola2'
  	},{

  	id: 3,
  	frase: 'hola3'
  	},{

  	id: 4,
  	frase: 'hola4'
  	},{

  	id: 5,
  	frase: 'hola5'
  	},{

  	id: 6,
  	frase: 'hola6'
  	},{

  	id: 7,
  	frase: 'hola7'
  	},{

  	id: 8,
  	frase: 'hola8'
  	},{

  	id: 9,
  	frase: 'hola9'
  	},{

  	id: 10,
  	frase: 'hola10'
  	}];


  	function shuffle(frases) {
	frases = frases.sort(function() {return Math.random() - 0.5});
	return frases
	}
	frases = shuffle(frases)


	res.json(frases[0])
});


router.post('/lista', clickController.postear);


module.exports = router;
