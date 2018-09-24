/*
When I click on Portfolio in the menu, I can see the submenu
*/
$('#portfolio').on('click', ()=>{
	if($(window).width() < 700){
	$('#portfolio-child').slideToggle();
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
	if($(window).width() < 700){
	$('#works-child').slideToggle();
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
	$('.parent-menu').toggle();
		$('.parent-menu').show();
});

