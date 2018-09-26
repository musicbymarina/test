/*
When I click on Portfolio in the menu, I can see the submenu
*/
$('#portfolio').on('mouseenter', ()=>{

	if($(window).width() < 700){
		$('#portfolio-child').show();
		$('#works').toggle();
		$('#contact').toggle();
	} else {
		$('#works-child').hide();
		$('#portfolio-child').show();
	}
	
	$('#portfolio').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	$('#portfolio-a').css({'color': 'black', 'font-weight': 'bold'});
	
	$('#works').css({'background-color': 'black',
	'border-radius': '0', 'border-left-color': 'black'});
	$('#work-a').css({'color': 'white', 'font-weight': 'normal'});
});

/*
When I click on Works in the menu, I can see the submenu
*/
$('#works').on('mouseenter', ()=>{
	
	if($(window).width() < 700){
		$('#works-child').show();
		$('#contact').toggle();
	} else {
		$('#portfolio-child').hide();
		$('#works-child').show();
	}
	
	$('#works').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	$('#work-a').css({'color': 'black', 'font-weight': 'bold'});
	
	$('#portfolio').css({'background-color': 'black',
	'border-radius': '0', 'border-left-color': 'black'});
	$('#portfolio-a').css({'color': 'white', 'font-weight': 'normal'});
	
});

$('#works').on('mouseenter', ()=>{
	
	if($(window).width() < 700){
		$('#works-child').slideToggle();
		$('#contact').toggle();
	} else {
		$('#portfolio-child').hide();
		$('#works-child').slideToggle();
	}
	
	$('#works').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	$('#work-a').css({'color': 'black', 'font-weight': 'bold'});
	
	$('#portfolio').css({'background-color': 'black',
	'border-radius': '0', 'border-left-color': 'black'});
	$('#portfolio-a').css({'color': 'white', 'font-weight': 'normal'});
	
});

$('#burger div').on('mouseenter', ()=>{
	$('header h3').show('slow');
});

$('#burger').on('click', () => {
	$('header nav').css('visibility', $('header nav').css('visibility') == 'hidden' ? 'visible' : 'hidden');
});


