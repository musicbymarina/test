/*
When I click on Portfolio in the menu, I can see the submenu
*/
$('#portfolio').on('click', ()=>{
	$('#portfolio a').css({'color': 'black'});
	if($(window).width() < 700){
	$('#portfolio-child').slideToggle();
	$('#portfolio-child a').css({'color': 'white'});
	$('#works').toggle();
	$('#news').toggle();
	$('#contact').toggle();
	} else {
	$('#works-child').hide();
	$('#portfolio-child').slideToggle();
	}

});

/*
When I click on Works in the menu, I can see the submenu
*/
$('#works').on('click', ()=>{
	$('#works a').css({'color': 'black'});
	if($(window).width() < 700){
	$('#works-child').slideToggle();
	$('#works-child a').css({'color': 'white'});
	$('#news').toggle();
	$('#contact').toggle();
	} else {
	$('#portfolio-child').hide();
	$('#works-child').slideToggle();
	}
});

$('#burger div').on('mouseenter', ()=>{
	$('header h3').show('slow');
});

$('#burger').on('click', ()=>{
	$('nav').toggle();
});

$('.parent-menu li').on('mouseenter', ()=>{
	$(this).css({'background-color': 'white'});
	$(this).children('a').css({'color': 'black'});
})

$('.child-menu li').on('mouseenter', ()=>{
	$(this).css({'background-color': 'white'});
	$(this).children('a').css({'color': 'black'});
})
