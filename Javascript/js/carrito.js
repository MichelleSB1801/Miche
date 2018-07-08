const listin = $('#list')
const final = $('.total')
var total = 0

$(document).on('click', '.add' , function() {
  const index = $('.add').index(this)
  const title = $('.title').eq(index).html()
  const price = $('.price').eq(index).html()
  const list = "<div class='listin'><span>"+ title +"</span><span class='pricetag'>"+ price +"</span></div>"
  listin.append(list)
  console.log(title,price)
  total += parseInt(price)
  $('.total').html('Tu total a pagar es '+ total)
  console.log(total)
});

