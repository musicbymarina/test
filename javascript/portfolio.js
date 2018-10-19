/*ALL THE METHODS FOR PORTFOLIO PAGE (rock and electronic) */

/*
 * @description Helps to sort my array of objects by the name of the artists
 * @param {string} artist1, artist2
 */
const byName = (artist1, artist2) =>{
	if(artist1.name < artist2.name) return 1;
	if(artist1.name > artist2.name) return -1;
	return 0;
}

// define some DOM elements for using
const slider = $('#slider');
const thumbnail = $('#thumbnail');

/**
 * @description Helps to display the figures of my slider if it's:
 * - a laptop (for portfolio)
 * - a mobile/tablet (for homepage AND portfolio)
 * @param {string} mobileSize
 */
const WidthChange = (mobileSize) => {
	const cssFigureOrdi = {
				'box-shadow': '0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15), 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15)',
				'padding': '20px', 
				'background-color': 'white', 
				'box-sizing':'border-box',
				'width': '50%',
				'margin': '0 auto'
			}
			
	const cssFigureMobile = {
				'box-shadow': '0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15), 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15)',
				'padding': '20px', 
				'background-color': 'white', 
				'box-sizing':'border-box',
				'width': '90%',
				'margin': '0 auto'
			}
				mobileSize.matches ? $('.active figure').css(cssFigureMobile) : $('.active figure').css(cssFigureOrdi);
}

if(matchMedia) {
	const mobileSize = window.matchMedia("(max-width: 700px)");
	mobileSize.addListener(WidthChange);
	WidthChange(mobileSize);


/**
 * @description Select the image from the thumbnail which appears in the slider too
 * 
 */
const displayThumbnail = () =>{
	const indexSlider = $('#slider').find('li.active').index();
	const thumbnailToDisplay = $('#thumbnail li')[indexSlider];
	thumbnailToDisplay.style.border = 'solid 5px white';
}

 /* @description Hide the current pic in slider when I will click on buttons or on a photo from thumbnail
 *
 */
const hideCurrentPicInSlider = () => {
		$('#slider').find('.active').addClass('hidden');
		$('#slider').find('.active').removeClass('active');
}


 /* @description Remove the html from slider and thumbnail to have no duplicate pics on it
 * When I click on buttons
 */
const cleanMySlider = () =>{
	slider.html('');
	thumbnail.html('');
}

/* @description Show next and previous photo when I click on next/previous buttons 
 Or put an error message
 * @param {integer} whichOne
 */
const showNextOrPreviousPicture = (whichOne) => {
	const activePhotoIndex = $('#slider').find('.active').index();
	const nextPhotoIndex = activePhotoIndex + whichOne;
	const sliderLength = $('#thumbnail li').length;
	const nextPhoto = $('#slider li')[nextPhotoIndex];
	
	if(whichOne === 1 && nextPhotoIndex < sliderLength) {
		hideCurrentPicInSlider();
		$('#info').html('');
		nextPhoto.classList.add('active');
		nextPhoto.classList.remove('hidden');
		displayThumbnail();
		
	} else if(whichOne === -1 && nextPhotoIndex >= 0) {
		hideCurrentPicInSlider();
		$('#info').html('');
		nextPhoto.classList.add('active');
		nextPhoto.classList.remove('hidden');
		displayThumbnail();
		
	}
	else {
		if(whichOne === 1) {
      		$('#info').html('This was the last photo of my slider');
    	} else if(whichOne === -1) {
      		$('#info').html('This was the first photo of my slider'); 
    	}
	}
}

/* @description Open a modal and show a 100% width image
 * when I click on a picture
 */
const openPhoto = () =>{
	console.log('tu cliques sur une photo');
			let image = event.target;
			console.log(image);
			$('.modal-content').html('');
			$('html').addClass('force');
			$('.modal-content').html(`<span class="close">X</span>`);
			$(event.target).clone().appendTo('.modal-content');
			$('.modal-content img').css({'width':'100%'});
			$('#myModal').show();
}

/* @description Close a modal
 * 
 */
const closeModal = () =>{
	$('#myModal').hide();
	$('html').removeClass('force');
}

const showImages = () =>{
	cleanMySlider();
		const artistName = $(event.target).html();
		
		fetch(imagesUrl).then(response=>response.json()).then((data)=>{
			const photos = data.photos.sort(byName);
			const artistChosen = photos.filter((photo) => photo.name === artistName);
	
			if(artistChosen) {
				artistChosen.map(artistData=> {
					artistData.photosPath.map((photo)=>{
						photo.jpg.map((image)=>{
					const content = 
					`<li>
						<h4>${artistData.name}</h4>
						<figure>
							<img src='${image}' alt='${artistData.name}'>
							<figcaption>${artistData.name}</figcaption>
						</figure>
					</li>`;
					slider.prepend(content);
					thumbnail.prepend(content);
					$('.letters').hide();
					$('#hidden').show();
						})

					});
				});
			} else {
			console.warn("You didn't click on an artist name, or you need to fix your function...");
			}
			// If I have more than one picture to show, I show the first, and hide the others
			if($('#slider li').length > 1) {
				const firstLiSlider = $('#slider li:first');
				const autresLiSlider = $('#slider li:first ~li');
				autresLiSlider.addClass('hidden');
				firstLiSlider.addClass('active');
				
				$('#thumbnail').css({'margin': 'auto', 'display': 'flex'});
				$("#thumbnail").show();
				displayThumbnail();
				
				$('#thumbnail figcaption').hide();
				$('#thumbnail h4').hide();
				$('.slider-nav').show();

			// If I have only one pic, I show it
			} else {
				const onlySlider = $('#slider li');
				onlySlider.addClass('active');
				
				$("#thumbnail").hide();
				$('.slider-nav').hide();
				}
				
			WidthChange(mobileSize);
			
			});
}

/* @description Event define all the click events of Portfolio except the menu
 * 
 */ 
$(this).on('click', (event) => {
	const target = $(event.target);
	// I show the images from the artist chosen
	if(target.is(".artistes h5")){
			showImages();
			
	// If I click on my main picture from the slider, I open the modal
	} else if(target.is(".active img")) {
			openPhoto();
			
	// If I click on close, I close the modal
	} else if(target.is(".close")) {
			closeModal();
			
	// If I click on next arrow, I show the next pic
	} else if(target.is('.next i')){
		showNextOrPreviousPicture(+1);
		WidthChange(mobileSize);
	
	// If I click on previous arrow, I show the previous pic
	} else if(target.is('.previous i')){
		showNextOrPreviousPicture(-1);
		WidthChange(mobileSize);
	
	// If I click on back to the artists list, I show the alphabets again and hide the button
	}else if(target.is('#hidden button')){
		$('.letters').toggle();
		$('#hidden').hide();
			
	}
	//If I click on a pic from the thumbnail, I show it in the slider
	else if(target.is('#thumbnail li')){

		const indexPhotoChoisie = $('#thumbnail').find(target).index();
		hideCurrentPicInSlider();
		const photoCorrespondante = $('#slider li')[indexPhotoChoisie];
		photoCorrespondante.classList.add('active');
		photoCorrespondante.classList.remove('hidden');
		displayThumbnail();
		WidthChange(mobileSize);
		
	}
	else {
		return;
	}	
});

} // end watch line 44