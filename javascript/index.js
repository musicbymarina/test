/*
When I click on Portfolio in the menu, I can see the submenu
*/
$('#portfolio').on('click', ()=>{
	$('#portfolio').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	
	$('#portfolio a').css({'color': 'black', 'font-weight': 'bold'});
	$('#portfolio-child li > a').css({'color': 'white'});
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
	console.log('the element clicked is: ' + $(this));
	/*$('#works').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	
	$('#works a').css({'color': 'black', 'font-weight': 'bold'});
	*/
	$('#works-child li > a').css({'color': 'white'});
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


