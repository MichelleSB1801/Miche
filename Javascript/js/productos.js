function product(img, title, price, cat, marca) {
	this.img=img
	this.title=title
	this.price=price
	this.cat=cat
	this.marca=marca
}
var prod1 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod1', '39', 'cel', 'samsung')
var prod2 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod2', '20', 'cel', 'LG')
var prod3 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod3', '17', 'cel', 'apple')
var prod4 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod4', '17', 'cel', 'apple')
var prod5 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod5', '17', 'tv', 'samsung')
var prod6 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod6', '17', 'cel', 'LG')
var prod7 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod7', '17', 'cel', 'samsung')
var prod8 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod8', '17', 'tv', 'LG')
var prod9 = new product ('<img class="imag" src = "samsungj7.jpg">', 'Prod9', '17', 'tv', 'apple')

var productos = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9];



for (var i = 0; i < productos.length; i++) {
	
	var img = productos[i].img //busca la variable de cada indice dentro de el array
	var titu = productos[i].title
	var prec = productos[i].price
	var prodd = '<div class="product">'+ img +'<span class="tit">'+titu +'</span><span class="pric">'+ prec +'<span></div>'
	$('.productcontainer').append(prodd)
}


$(document).on('change', '#Apple' , function() {
  for (var i = 0; i < productos.length; i++) {  
  	if($(this).is(':checked') && productos[i].marca != "apple"){
  		$('.product').eq(i).addClass('hide') 
  		//el eq define el indice exacto de los divs con la clase producto a los que se le agregará la clase
  	}else{
  		$('.product').eq(i).removeClass('hide')
  	}
  }
});

$(document).on('change', '#Samsung', function(){
	for (var i = 0; i < productos.length; i++) {
		if ($(this).is(':checked') && productos[i].marca != "samsung"){
			$('.product').eq(i).addClass('hide')
		}else{
  		$('.product').eq(i).removeClass('hide')
  	}
	}
});

$(document).on('change', '#LG', function(){
	for (var i = 0; i < productos.length; i++) {
		if ($(this).is(':checked') && productos[i].marca != "LG"){
			$('.product').eq(i).addClass('hide')
		}else{
  		$('.product').eq(i).removeClass('hide')
  	}
	}
});

$(document).on('change', '#Cel', function(){
	for (var i = 0; i < productos.length; i++) {
		if ($(this).is(':checked') && productos[i].cat != "cel"){
			$('.product').eq(i).addClass('hide')
		}else{
  		$('.product').eq(i).removeClass('hide')
  	}
	}
});

$(document).on('change', '#tv', function(){
	for (var i = 0; i < productos.length; i++) {
		if ($(this).is(':checked') && productos[i].cat != "tv"){
			$('.product').eq(i).addClass('hide')
		}else{
  		$('.product').eq(i).removeClass('hide')
  	}
	}
});


var cart = [];

$(document).on('click', '.product', function(){
	const addtocart = {
		imagen: $(this.imag),
		titulo: $(this.tit),
		precio: $(this.pric),
	}


	cart.push(addtocart)
	console.log(cart)

	//a = JSON.stringify(addtocart)
	//localStorage.setItem("productos", a) 
	//console.log(a)

})







//const index = $('.add').index(this)
//	const title = $('.title').eq(index).html()
//	const price = $('.price').eq(index).html()
//	const list = "<div class='listin'><span>"+ title +"</span><span class='pricetag'>"+ price +"</span></div>"
//	listin.append(list)
//  console.log(title,price)
//  total += parseInt(price)
//  $('.total').html('Tu total a pagar es '+ total)
//  console.log(total)