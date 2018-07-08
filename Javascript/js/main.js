


//var nombre="Juani";
//var edad=24;


//console.log(nombre+" tiene " + edad + " años.")


/*var edad=-16;
	if(edad>=18){
		console.log("Mayor de edad");
	}else if(edad<0){
		console.log("Inexistente");
	}else{
		console.log("Menor de edad");
	}*/

/*var luz="rojo";
if(luz=="rojo"){
	console.log("rojo");
	luz="verde";
}if(luz=="verde") {
	console.log("verde")
	luz="rojo";
}if(luz=="rojo"){
	console.log("rojo");
	luz="verde";
}if(luz=="verde") {
	console.log("verde")
	luz="rojo";
}*/

/*Array


var humanos= ["h1","h2","h3","h23"];
console.log(humanos[0]);
humanos.push("h24");
console.log(humanos);
*/

/*var edad=16;

if(edad>=18&&edad<=65){
	console.log("Pasa");
}else{
	console.log("No pasa")
}*/
/*
var ruedas=6;
var largo=5;
var conductor="Juani";
if((ruedas==4 && largo<=2) || (conductor=="Juani" && largo<=2)){
	console.log("Auto");
}else if(ruedas==4 && largo>2){
	console.log("Camioneta");
}else{
	console.log("No es un vehículo válido de 4 ruedas");
}

if(ruedas==2){
	console.log("Moto");
}else{
	console.log("No es un vehículo válido de 2 ruedas")
}*/

/*
for(var i=1; i<=10; i++){
	console.log(i);
}*/
/*
var arr=[1,2,3]
console.log(arr);
console.log(arr.length);
arr.push(23);
console.log(arr.length);
*/

/*var humanos=["Juan", "Pedro", "Carlos"]
for (var i = 0; i < humanos.length; i++) {
	console.log(humanos[i]);
}*/

/*
var sureños=["v","v"];
var occidentales=["r","r"];
for (var i = 0; i < sureños.length; i++) {
	console.log(sureños[i]);
	console.log(occidentales[i]);
}*/


/*usar if, dentro del "for" podemos
 escribir el codigo que queramos, juani 
 lo solucionó con un solo "for", aprox 14 lineas*/
/*
var randomIzq = Math.ceil(Math.random() * 100);
var randomAbajo = Math.ceil(Math.random() * 100);

var izq = [];
var aba = [];

for (var i = 0; i < randomIzq; i++) {
 izq.push("verde");
}

for (var i = 0; i < randomAbajo; i++) {
 aba.push("rojo");
}


console.log(izq);
console.log(aba);

for (var i = 0; i < izq.length; i++) {
		if (izq[i]!=undefined){
			console.log(izq[i]);
		}if (aba[i]!=undefined){
			console.log(aba[i]);
		}
}*/
/*

for (var i = 0; i <= 100; i++) {
	if ((i%3==0)&&(i%5==0)) {
		console.log("Fizz", i);
	}else if (i%5==0) {
		console.log("Buzz", i);
	}else if (i%3==0) {
		console.log("FizzBuzz", i);
	}else{
		console.log("Chimichanga");
	}
}*/
/*
var nombre ='Juani'
switch (nombre){
	case "Pedro":
		console.log('Soy Pedro');
		break;
	case "Juani":
		console.log('Soy Juani');
		break;
	default:
		console.log('No se quien soy')
}
*/

/*
var dia = 10
switch(dia){
	case 0:
		console.log('Lunes');
		break;
	case 1:
		console.log('Martes');
		break;
	case 2:
		console.log('Miercoles');
		break;
	case 3:
		console.log('Jueves');
		break;
	case 4:
		console.log('Viernes');
		break;
	case 5:
		console.log('Sabado');
		break;
	case 6:
		console.log('Domingo');
		break;
	default:
		console.log('Chimichanga')
}*/


// While: Mientras que suceda algo se cumple esto, es otra manera de hacer loops.

/*var conteo = 100
while (conteo>0){
	console.log(conteo)
	if (conteo==23) {
		break;
	}
	conteo--
}*/

//dado un numero hay que determinar si ese numero es primo
/*
var monto = 1;
if  ((monto==2) || (monto==3) || (monto==5)){
	console.log("Primo", monto);
}else if((monto%2==0)||(monto%3==0)||(monto%5==0)) {
		console.log("No Primo", monto);
}else{
	console.log("Primo", monto)
}

definir si una palabra es un palindromo o no

a=hola
c.log(a.length 4)
*/

/*var palabra = 'neuquen'
var palabrainvertida =''
var longitud= palabra.length

for (var i = longitud-1; i >=0; i--) {
	palabrainvertida=palabrainvertida+palabra[i]
}
if (palabrainvertida==palabra) {
	console.log('Palindromo')
}else{
	console.log('No!')
}*/

//2 arrays de numeros ordenados y queremos 
//saber que numeros se repiten en los 2 arrays
/*
var x=[2,4,6,8,15]
var y=[3,6,9,15]

for (var i = 0; i < x.length; i++) {
	for (var j = 0; j < y.length; j++) {
	if (x[i]==y[j]) {
				console.log(x[i])
	}
	}
}
*/
//dada una cadena de texto debemos imprimir
//la inversa

/*var palabra='Juani'
var palabrainv=''
for (var i = palabra.length-1; i >= 0; i--) {
	palabrainv=palabrainv+palabra[i]
}
console.log(palabrainv)*/
/*
var sec=[2, 4, 1, 8, 16, 5, 23]
var grande=0
var menosgrande=0

for (var i = 0; i < sec.length; i++) {
	console.log(sec[i])
	if (grande<sec[i]) {
		menosgrande=grande
		grande=sec[i]
	}
	if (menosgrande<sec[i]) {
		menosgrande==sec[i]
	}
}
console.log(grande,menosgrande)*/

/*function datos(nombre,edad) {
console.log("Mi nombre es "+ nombre + " y mi edad es "+edad)
}

function validacion(argument) {
	// body...
}

function suma(a,b) {
	if ((a>=0 || a<0) && (b>=0 || b<0)) {
		console.log(a+b)
	}else{
	console.log("Hubo un error")
	}
}
function resta(a,b){
	console.log(a-b)
}
function multiplicar(a,b) {
	console.log(a*b)
}
function dividir(a,b) {
	console.log(a/b)
}*/
/*
function suma(a,b) {
	return a+b
}
var sum = suma(5,12)
console.log(sum)*/
/*
function operacion(a,b) {
	var resultado = 1
	for (var i = 0; i < b; i++) {
		resultado = resultado*a
	}
	return resultado
}
*/
/*
function tilde(word) {
	
	var vocales=["á","é","í","ó","ú"]
	var llevatilde="No tiene tilde"
	for (var i = 0; i < word.length; i++) {
		for (var z = 0; z < vocales.length; z++) {
			if (word[i]==vocales[z]) {
				llevatilde="Tiene tilde"
				break
			}
		}
	}
	console.log(llevatilde)
}*/
//si una 
//mas de 6 caracteres letras y numeros

/*
function Contraseña(pas) {
	var pass= "Contraseña inválida"
	for (var i = 0; i < pas.length; i++) {
		if ((pas.length>6) && ([i]>=0)) {
			pass="Contraseña válida" 
			break
		}
	}
	console.log(pass)
}
*/

// +6 caracteres
// 1 numero
// 1 letra

//JuaniGallo
//JuaniGallo2


/*function validatePassword(pwd) {
   var numeros = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
   var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
   var hasLetters = false
   var hasNumbers = false
   
  if (pwd.length < 6) { 
    console.log('Contraseña incorrecta')
  } else {
    for (var i = 0; i < pwd.length; i++) {
      if (numeros.indexOf(pwd[i]) > -1) {
        hasNumbers = true
      }

      if (letras.indexOf(pwd[i]) > -1) {
        hasLetters = true
      }

      if (hasNumbers == true && hasLetters == true) {
        console.log('Ok')
        break; 
      }
    }
  }
}*/


//Objetos

/*var persona = {
	nombre:'Juani',
	apellido:'Gallo',
	numero: 23,
	espelado: true,
	colorespreferidos: ['rojo', 'negro']
}

console.log(persona.nombre)*/

/*
var miembros = [{
	nombre:'Malena',
	edad:'19',
	altura:'40',
	piernas:'12',
	brazos:'9',
	ojos:'72',
},{
	nombre:'Bel',
	edad:'19',
	altura:'18',
	piernas:'7',
	brazos:'7',
	ojos:'7',
},{
	nombre:'Den',
	edad:'19',
	altura:'19',
	piernas:'8',
	brazos:'10',
	ojos:'0',
},{
	nombre:'Miche',
	edad:'18',
	altura:'20',
	piernas:'4',
	brazos:'4',
	ojos:'4',
},{
	nombre:'Juani',
	edad:'20',
	altura:'21',
	piernas:'2',
	brazos:'2',
	ojos:'1',
},
{
	nombre:'Carla',
	edad:'17',
	altura:'20',
	piernas:'3',
	brazos:'4',
	ojos:'6',
}
]

function autorizacion(miembros) {
	var puedenentrar=[]
	var nopuedenentrar=[]

		for (var i = 0; i < miembros.length; i++) {
			if (((miembros[i].edad>17)
				&&(miembros[i].edad<21)) 
				&& (miembros[i].altura<=40)
				&&((miembros[i].piernas>=3||miembros[i].brazos>=4))) {
				console.log(miembros[i])
				console.log("Puede entrar")
				puedenentrar.push(miembros[i])
			}else if (miembros[i].nombre=="Carla" && miembros[i].edad==17) {
				miembros[5].edad=18
				console.log(miembros[i])
				console.log("Puede entrar")
				puedenentrar.push(miembros[i])
			}else{
				console.log(miembros[i])
				console.log("No puede entrar")
				nopuedenentrar.push(miembros[i])
			}
	}
}*/


//si tiene 200 pesos podemos hacer la vista gorda con la edad, pero debe cumplir las otras condiciones
//tenemos que hacer que en nuestro bolsillo hayan 200 pesos mas por persona que entre y estas deben
//tener 200 pesos menos en los suyos. Deben de entrar minimo 2.


//var A ={
//	nombre: 'Juani',
//	saludar: function(){
//		console.log('Hola, mi nombre es ' + this.nombre)
//	}
//A.saludar()
//}








/*var miembros = [{
	nombre:'Malena',
	edad:'19',
	altura:'40',
	piernas:'12',
	brazos:'9',
	ojos:'72',
	plata:'500',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Bel',
	edad:'19',
	altura:'18',
	piernas:'7',
	brazos:'7',
	ojos:'7',
	plata:'500',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Den',
	edad:'19',
	altura:'19',
	piernas:'8',
	brazos:'10',
	ojos:'0',
	plata:'500',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Miche',
	edad:'18',
	altura:'20',
	piernas:'4',
	brazos:'4',
	ojos:'4',
	plata:'500',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Juani',
	edad:'20',
	altura:'21',
	piernas:'2',
	brazos:'2',
	ojos:'1',
	plata:'500',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Carla',
	edad:'17',
	altura:'20',
	piernas:'3',
	brazos:'4',
	ojos:'6',
	plata:'500',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Beru',
	edad:'36',
	altura:'35',
	piernas:'3',
	brazos:'5',
	ojos:'3',
	plata:'260',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
			console.log('Puede entrar')
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Vari',
	edad:'40',
	altura:'39',
	piernas:'9',
	brazos:'10',
	ojos:'2',
	plata:'100',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
			console.log('Puede entrar')
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Bull',
	edad:'22',
	altura:'24',
	piernas:'6',
	brazos:'4',
	ojos:'9',
	plata:'350',
	pagar:function(){
		if ((this.edad>20||this.edad<18) && (this.plata>=200)) {
			this.plata==this.plata-200
			console.log('Puede entrar')
		}else{
			console.log("Sos pobre")
		}
	}
},
{
	nombre:'Ros',
	edad:'30',
	altura:'25',
	piernas:'8',
	brazos:'6',
	ojos:'7',
	plata:'200',
	pagar:function(){
		if (this.plata>=200) {
			this.plata==this.plata-200
			console.log('Puede entrar')
		}else{
			console.log("Sos pobre")
		}
	}
}
]

function autorizacion(miembros) {
	var puedenentrar=[]
	var nopuedenentrar=[]

		for (var i = 0; i < miembros.length; i++) {
			if (((miembros[i].edad>17)
				&&(miembros[i].edad<21)) 
				&& (miembros[i].altura<=40)
				&&((miembros[i].piernas>=3||miembros[i].brazos>=4))) {
					console.log(miembros[i])
					console.log("Puede entrar")
					puedenentrar.push(miembros[i])
			}
			else if (miembros[i].nombre=="Carla" && miembros[i].edad==17) {
				miembros[5].edad=18
				console.log(miembros[i])
				console.log("Puede entrar")
				puedenentrar.push(miembros[i])
			}
			else if (miembros[i].edad>20||miembros[i].edad<18) {
				miembros[i].edad=18
				miembros[i].pagar()
				console.log(miembros[i])
			}
			else{
				console.log(miembros[i])
				console.log("No puede entrar")
				nopuedenentrar.push(miembros[i])
			}
	}
}*/



/*var plataDelChorro = 0

function Persona(nombre, apellido, edad, plata) {
    this.name = nombre
    this.surname = apellido
    this.age = edad
    this.money = plata
    this.pagarPlata = function() {
        if (this.money >= 200) {
            this.money = this.money - 200
            plataDelChorro += 200
            return true
        } else {
            return false
        }
    }
}

var persona1 = new Persona('Juani', 'Gallo', 23, 9999999999999);
var persona2 = new Persona('Juani2', 'Gallo', 17, 210);

var personas = [persona1, persona2]

for (var i = 0; i < personas.length; i++) {
    if (personas[i].age >= 18 && personas[i].age <= 20) {
        console.log(personas[i].name, ' puede entrar')
    } else {
        var puedePasar = personas[i].pagarPlata()
        if (puedePasar) {
            console.log(personas[i].name + ' puede pasar porque pago la coima')
        } else {
            console.log(personas[i].name + ' no puede pasar porque no pudo pagar la coima')
        }
    }
}*/

