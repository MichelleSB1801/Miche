$.ajax({
	url: "https://api.github.com/users/MichelleSB1801",
}).done(function(a) {
	$('img').attr('src', a.avatar_url)
	$('#avtr').attr('href', a.html_url)
	$('#nombre').html(a.name)
	$('#empresa').html(a.company)
	$('p').html(a.bio)
	$('#fing').html(a.following)
	$('#fers').html(a.followers)
	$('#repos').html(a.public_repos)
	$('#repos').attr('href', a.html_url+'?tab=repositories')
});

$.ajax({
	url: "https://api.github.com/users/MichelleSB1801/repos",
}).done(function(a){
	$(document).on('click', ('.repshow') function(){

	})
})


