let self = {}
let clickController = require('./clickController')

self.home = function(req, res) {

  res.render('index', { 
		frasekey: clickController.posteos,
	});
	
}

module.exports = self