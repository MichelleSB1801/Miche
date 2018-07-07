var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('', function(req, res){
	res.render('index', { title: 'Express' });	
});


let users =[{
  	
  	usuario: 'Jorge',
  	tweets: 8,
  	followers: 58,
  	following: 12,
  	},{

  	usuario: 'Marta',
  	tweets: 80,
  	followers: 45,
  	following: 27,
  	},{

  	usuario: 'Roberto',
  	tweets: 29,
  	followers: 36,
  	following: 16,
  	},{

  	usuario: 'Roberta',
  	tweets: 20,
  	followers: 43,
  	following: 38,
  	}];



router.get('/tweets/:user', function(req, res, next) {
  const user = req.params.user
  for (var i = 0; i < users.length; i++) {
    if (user == users[i].usuario) {
      return res.json(users[i])
    }
}

      return res.sendStatus(404)

  
});












module.exports = router;

