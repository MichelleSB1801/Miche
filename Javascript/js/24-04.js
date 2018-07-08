const wall = $('#estado')

function add() {
	const valor = $('#inp').val()
	const emoji = $('select').val()
	const status = "<div class='statuscontainer'>" + valor + "</div>"+"<div class='emojicontainer'>"+ emoji +"</div> "
	$('#estado').append(status)
	valor = $('#inp').val('')
	emoji = $('select').val('')

}

