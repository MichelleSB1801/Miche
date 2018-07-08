const list = $('#list')
var hec = 0
var hay = 0

function add() {
  const inputValue = $('#action').val()
  const listItem = "<li>" + inputValue + '</li><input id="tod" type="text" class="hide"><button>M</button><br>'
  list.append(listItem)
  hay = $('ul li').length
  $('#action').val('')
  $('#listadas').html(hay)
};

$('#action').on('keypress' , function(e) {
  if (e.keyCode == 13) {
    add()
  }
});

$(document).on('keypress', '#tod', function(e) {
  if (e.keyCode == 13) {
    const index = $('ul #tod').index(this)
    const valor= $('ul #tod').eq(index).html()
    $('ul li').eq(index).html(valor)
    $('ul li').eq(index).removeClass('hide')
    $('ul button').eq(index).removeClass('hide')
    $('ul input').eq(index).addClass('hide')
  }
});

$(document).on('click', 'li' , function() {
  const index = $('li').index(this)
  if ($('ul li').eq(index).hasClass("tachado")) {
  	$('ul li').eq(index).removeClass("tachado");
  	hec--
  	$('#hechas').html(hec)
  }else{
  	$('ul li').eq(index).addClass("tachado");
  	hec++
  	$('#hechas').html(hec)
  }
});

$(document).on('click', 'ul button' , function() {
  const index = $('ul button').index(this)
  const valor= $('ul li').eq(index).html() 
  if ($('ul input').eq(index).hasClass("hide")) {
  	$('ul input').eq(index).removeClass("hide");
  	$('li').eq(index).addClass("hide");
  	$('ul input').eq(index).val(valor)
  }
});



$(document).on('click', '.all' , function() {
  const index = $('.all').index(this)
  $('ul li').addClass("tachado");
  hec=hay;
  $('#hechas').html(hec);
});

$(document).on('click', '.not' , function() {
  const index = $('.not').index(this)
  $('ul li').removeClass("tachado");
  hec=0;
  $('#hechas').html(hec);
});


//$('div').eq(i).data('nombre')