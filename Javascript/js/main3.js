/*const provincias = ['CABA', 'Cordoba', 'Bs As']
const provinciaElem = document.getElementById('provincia')
const barrios = [
  {
    nombre: 'Villa devoto',
    provincia: 0
  },
  {
    nombre: 'Villa urquiza',
    provincia: 0
  },
  {
    nombre: 'La falda',
    provincia: 1
  },
  {
    nombre: 'Cordoba capital',
    provincia: 1
  },
  {
    nombre: 'Tigre',
    provincia: 2
  },
  {
    nombre: 'San isidro',
    provincia: 2
  }
]

for (var i = 0; i < provincias.length; i++) {
  var option = document.createElement("option");
  option.text = provincias[i];
  option.value = i;
  provinciaElem.appendChild(option);
}

function cargarBarrios() {
  const provId = document.getElementById('provincia').value
  const barrioElem = document.getElementById('barrio')

  for (var i = 0; i < barrioElem.options.length; i++) {
    barrioElem.options[i] = null;
  }

  for (var i = 0; i < barrios.length; i++) {
    if (provId == barrios[i].provincia) {
      var option = document.createElement("option");
      option.text = barrios[i].nombre;
      option.value = i;
      barrioElem.appendChild(option);
    }
  }
}
var send=document.getElementById('enviar')
send.addEventListener('click',function (){
  const nombre = document.getElementById('nombre')
  const apellido = document.getElementById('apellido')
  const actual = new Date().getFullYear();
  const fecha = document.getElementById('nacimiento').value;
  const fechaFormateada = new Date (fecha).getFullYear();
  console.log (actual,fechaFormateada);

  if (isEmpty(nombre.value)) {
    console.log('Nombre vacio')
  }

  if (isEmpty(apellido.value)) {
    console.log('Apellido vacio')
  }

})

function isEmpty(value) {
  if (value == "") {
    return true
  }

  return false
}



const a = document.getElementById('b')
a.addEventListener('mouseover',function () {
  console.log('Hola hola');
});
a.addEventListener('click', function () {
  console.log('Click click');
});
a.addEventListener('mouseout', function () {
  console.log('Chau chau')
});

*/














