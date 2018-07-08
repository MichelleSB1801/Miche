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
http.createServer(function(req, res){
	const endpoint = req.url
	console.log(endpoint)
	if (endpoint== '/doble/3') {
		res.write('6')
	}else if(endpoint=='/doble/10'){
		res.write('20')
	}

	res.end()


}).listen(8080)