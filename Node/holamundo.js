//console.log('Hola mundo')
//for (var i = 0; i < 10; i++) {
//	console.log(i)
//}

//const Nombre = 'Juani';
//const Edad = 16;

//if (Edad >= 18) {
//	console.log('Soy '+ Nombre + ', tengo '+ Edad + ' y soy mayor de edad');
//}else{
//	console.log('Soy '+ Nombre + ', tengo '+ Edad + ' y soy menor de edad');
//}

const http = require('http')
const user = require('./Controllers/userController')
const prod = require('./Controllers/productController')
http.createServer(function(req, res){
	const endpoint = req.url
	
	res.writeHead(200, {"Content-Type": "application/json"});
		let pepe
		if (endpoint == '/Juani') {
			pepe = user()
		}else if (endpoint == '/productos'){
    pepe = prod()
  } else {
    pepe = {
      err: 'Hubo un error'
    }
  }


  		pepe = JSON.stringify(pepe)
  		res.end(pepe)
  
  
}).listen(8080)