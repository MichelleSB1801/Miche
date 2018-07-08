let self = {}
// let homeController = require('./homeController')

self.posteos = []

self.postear = function(req, res) {

	self.posteos.push(req.body.frase)
	console.log(posteos)
	res.json(self.posteos)

}

module.exports = self