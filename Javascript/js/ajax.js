

function add() {
	var titulo = $('title').val()
	var bod= $('body').val()

	if ($('body').val('') || $('title').val('')) {
		$('.mensajeError').removeClass('hide')
	}else{
		$.ajax({
		  url: "https://jsonplaceholder.typicode.com/posts" ,
		  method: "POST" ,
		  data: {title: 'titulo', body: 'bod'}
		}).done(function(msg) {
			alert("Data saved!");
		});
		$('.mensajeError').addClass('hide')
	}
}

/* $.ajax({
  url: "https://jsonplaceholder.typicode.com/posts"
}).done(function(msg) {
	var contenedor = $('.maincontainer');
  for (var i = 0; i < msg.length; i++) { 
  	var subirinfo = "<div class='todo'> <div class='titu'>"+ msg[i].title 
  	+ "</div> <div class='bod'>"
  	+ msg[i].body + "</div> </div>"
  	contenedor.append(subirinfo)
  	console.log(msg[i])
  }
});*/