const restler = require('restler')

let self = {}


self.getTwitterData = function(user) {
  return new Promise(function(resolve, reject){
    restler.get('http://localhost:8080/tweets/' + user).on('complete', function(result) {
      resolve(result)
    }).on('fail', function(err) {
      reject(err)
    })
  })
}


module.exports = self