/* @description Event: When I mouseenter about or contact:
 * works and portfolio are displayed if they were clicked before
 */ 
const remainWorksPortfolioMenu = () =>{
	$('#works-child').hide();
	$('#portfolio-child').hide();
	$('#works').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#work-a').css({'color': 'white', 'font-weight': 'bold'});
	$('#portfolio').css({'background-color': 'transparent',
	'border-radius': '50px 20px', 'border-left-color': 'black'});
	$('#portfolio-a').css({'color': 'white', 'font-weight': 'bold'});
}

/* @description Event: When I click on Portfolio in the menu, the submenu is open
 * if they were clicked before
 */ 
const openPortfolioMenu = () =>{
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
} 

/* @description Event: When I click on Works in the menu, the submenu is open
 * if they were clicked before
 */  
const openWorksMenu = ()=>{
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
}

 /* @description Event define all the hover events of the menu
 * 
 */ 
$(this).on('mouseenter', (event)=>{
	let hoverTarget = $(event.target);
	if(hoverTarget.is('#about') || hoverTarget.is('#contact')){
		remainWorksPortfolioMenu();
	} else if(hoverTarget.is('#burger div')){
		$('header h3').show('slow');
	} else{
		return;
	}
})

 /* @description Event define the click event of the menu for portfolio
 * 
 */ 
$('#portfolio').on('click', ()=>{
	openPortfolioMenu();
});

 /* @description Event define the click event of the menu for works
 * 
 */ 
$('#works').on('click', ()=>{
	openWorksMenu();
});

 /* @description Event define the click events of the menu for burger
 * 
 */ 
$('#burger').on('click', () => {
	$('header nav').css('visibility', $('header nav').css('visibility') == 'hidden' ? 'visible' : 'hidden');
});