/*
When I mouseenter about, works and portfolio are displayed if they were clicked before
*/
$('#about').on('mouseenter', ()=>{
	$('#works-child').hide();
	$('#portfolio-child').hide();
	
	$('#works').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#work-a').css({'color': 'white', 'font-weight': 'bold'});
	
	$('#portfolio').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#portfolio-a').css({'color': 'white', 'font-weight': 'bold'});
});

/*
When I mouseenter contact, works and portfolio are displayed if they were clicked before
*/
$('#contact').on('mouseenter', ()=>{
	$('#works-child').hide();
	$('#portfolio-child').hide();
	
	$('#works').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#work-a').css({'color': 'white', 'font-weight': 'bold'});
	
	$('#portfolio').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#portfolio-a').css({'color': 'white', 'font-weight': 'bold'});
});

/*
When I click on Portfolio in the menu, I can see the submenu
*/
$('#portfolio').on('click', ()=>{

	if($(window).width() < 869){
		$('#portfolio-child').toggle();
		$('#works').toggle();
		$('#contact-me').toggle();

	} else {
		$('#works-child').hide();
		$('#portfolio-child').toggle();
	}
	
	$('#portfolio').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	$('#portfolio-a').css({'color': 'black', 'font-weight': 'bold'});
	
	$('#works').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#work-a').css({'color': 'white', 'font-weight': 'bold'});
});

/*
When I click on Works in the menu, I can see the submenu
*/
$('#works').on('click', ()=>{
	
	if($(window).width() < 869){
		$('#works-child').toggle();
		$('#contact-me').toggle();
	} else {
		$('#portfolio-child').hide();
		$('#works-child').toggle();
	}
	
	$('#works').css({'background-color': 'white',
	'border-radius': '50px 20px', 'border-left-color': 'grey'});
	$('#work-a').css({'color': 'black', 'font-weight': 'bold'});
	
	$('#portfolio').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#portfolio-a').css({'color': 'white', 'font-weight': 'bold'});
	
});



$('#burger div').on('mouseenter', ()=>{
	$('header h3').show('slow');
});

$('#burger').on('click', () => {
	$('header nav').css('visibility', $('header nav').css('visibility') == 'hidden' ? 'visible' : 'hidden');
});

