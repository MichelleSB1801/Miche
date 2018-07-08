let self = {}
const externalDataService = require('../services/userService')




self.vista = function (req, res){
	res.render('index', { title: 'Express' });

}


self.index = function(req, res){
  const user = req.params.user


  externalDataService.getTwitterData(user).then(function(twitterData) {
    return res.render('index', {
      twitterData: twitterData,
    })
  }).catch(function(err) {
    console.log('Miche', err)
  })
}

module.exports = self