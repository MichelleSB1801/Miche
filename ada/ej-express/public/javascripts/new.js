
function texto(){
	$.ajax({
		url: "http://localhost:3000/frases",
	}).done(function(a){
		$('.textFrase').html(a.frase);
		console.log(a)
		//console.log($('.textFrase').html('<div>'+a.frase+'</div>'))
	});
}
texto()

function posteofrase() {
		var frase = $('.textFrase').html()

		$('.posteos').append(frase);
}




$(document).on('click', '.boton', function(){
	var imag = $(this).children().attr('src')
	var fras = $('.textFrase').html()
	console.log(fras)
	console.log(imag)
	texto()
	posteofrase()
	$.ajax({
		method: 'POST',
		url: "http://localhost:3000/lista",
		data: {
			frase: fras,
			imagen: imag
		}
	}).done(function(data) {
    $('.posteos').append()

    console.log(data)
  })

})
