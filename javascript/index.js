/*
When I click on Portfolio in the menu, I can see the submenu
*/
$('#portfolio').on('click', ()=>{
	$(this).css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	
	$('#portfolio a').css({'color': 'black', 'font-weight': 'bold'});
	
	$('#portfolio-child li').children('a').css({'color': 'white', 'font-weight': 'bold'});
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
	$(this).css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	
	$('#works a').css({'color': 'black', 'font-weight': 'bold'});
	
	$('#works-child li').children('a').css({'color': 'white', 'font-weight': 'bold'});
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
	$('nav').toggle();
});

/* Si je hover sur un li du menu principal:
- au lieu d'avoir le color white et background noir,

*/
$('.parent-menu li').on('mouseenter', ()=>{
	$(this).children('a').css({'color': 'black', 'font-weight': 'bold'});
})

$('.child-menu li').on('mouseenter', ()=>{
	$(this).children('a').css({'color': 'black', 'font-weight': 'bold'});
})
