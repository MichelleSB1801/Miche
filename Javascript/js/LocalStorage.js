/*localStorage.setItem("Hola", "Chau");

localStorage.removeItem('Hola')

let saludo = localStorage.getItem('Hola')

console.log(saludo)

localStorage.setItem("Hola", "Juani")

saludo= localStorage.getItem('Hola')

console.log(saludo)
*/

const human = {
	nombre: 'Juani',
	edad: 23,
}

a = JSON.stringify(human) //convierte el objeto en un string

localStorage.setItem("human", a) 
//el primero es la clave y el segundo es lo que se va a subir
console.log(a)

b=localStorage.getItem('human')

c=JSON.parse(b)

console.log(c)
