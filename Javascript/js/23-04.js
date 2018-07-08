const input={
	esp: {
		generalError: 'Soy un error',
		todoPiola: 'Todo Good',
		Hola: 'Chau',
	},
	eng: {
		generalError: "I'm an error",
		todoPiola: "All Piola",
		Hola: "Bye",
	}
}

function tradd() {
	const trad = $('.ingreso').val()
	$('.ingreso').val('')

	if (input['esp'] != undefined) {
		$("#result").html('El código es: '+ input["esp"][trad]
		 + '<br>'+ 'La traducción es: ' + input['eng'][trad])
	}else{
		$("#result").html('No existo')

	}
}

$('#in').on('keypress', function(e) {
  if(e.keyCode == 13) {
 	tradd()
 	$('.ingreso').val('')
  }
})

//generar 3 divs vacios que dentro se cargue el valor de la trafuccion(ingles y español). En cada uno se debe mostrar los resultados dependiendo del valor del data, si en el data se pone ingles se coloca en ingles si se coloca español se coloca español.