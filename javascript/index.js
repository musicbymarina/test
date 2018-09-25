/*
When I click on Portfolio in the menu, I can see the submenu
*/
$('#portfolio').on('click', ()=>{

	if($(window).width() < 700){
		$('#portfolio-child').slideToggle();
		$('#works').toggle();
		$('#contact').toggle();
	} else {
		$('#works-child').hide();
		$('#portfolio-child').slideToggle();
	}
	
	/*$('#portfolio').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	$('#portfolio-child li > a').css({'color': 'white'});
		$('#portfolio a').css({'color': 'black', 'font-weight': 'bold'});
		*/
});

/*
When I click on Works in the menu, I can see the submenu
*/
$('#works').on('click', ()=>{
	
	if($(window).width() < 700){
		$('#works-child').slideToggle();
		$('#contact').toggle();
	} else {
		$('#portfolio-child').hide();
		$('#works-child').slideToggle();
	}
	
	/*$('#works').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	$('#works-child li > a').css({'color': 'white'});
	$('#works a').css({'color': 'black', 'font-weight': 'bold'});
	*/
});

$('#burger div').on('mouseenter', ()=>{
	$('header h3').show('slow');
});

$('#burger').on('click', () => {
	$('header nav').css('visibility', $('header nav').css('visibility') == 'hidden' ? 'visible' : 'hidden');
});


