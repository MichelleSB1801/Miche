let recetas=[]

function search() {
	for (var i = 0; i <= recetas.length-1; i++) {
		let recetascontainer =  $('#recipescontainer')
		if ($('#buscador').val() == recetas[i]['titulo']) {
			let ponertitulo = recetas[i]['titulo']
			let prec = recetas[i]['precio']
			let ingred = recetas[i]['ingredientes']
			let recetario = '<p> Titulo </p>'
			+ '<p>'+ponertitulo+'</p>'
			+ '<p> Precio </p>'
			+ '<p>'+prec+'</p>'
			+ '<p> Ingredientes </p>'
			+ '<p>'+ingred+'</p>'
			recetascontainer.append(recetario)
			console.log(recetario)
			$('.newrecipe').addClass('hide')
			$('#recipescontainer').removeClass('hide')
		}
	}
	console.log('hola')
}



function addinput() {
	const inglist = $('#ingredients')
	const newinp = '<input class="ing" type="text" />'
	inglist.append(newinp)
}



function save() {
	let titulo = $('#tittle').val()
	let presu = $('#budget').val()
	let ingre = []
	var cadareceta={
	titulo:'',
	precio:'',
	ingredientes:[''],
	}
	if ($(".ing").val()!='') {
		$(".ing").each(function(){
	  ingre.push($(this).val())
		});
	}
	cadareceta['titulo']=titulo
	cadareceta['precio']=presu
	cadareceta['ingredientes']=ingre
	recetas.push(cadareceta)
	clean()
	console.log(recetas)

}

function clean() {
	$('#tittle').val('')
	$('#budget').val('')
	$('.ing').val('')
	$('.ing').remove()
	
}

	
