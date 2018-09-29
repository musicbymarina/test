/**
Je montre les photos de la liste choisie dans le slider et le thumbnail en mÃªme temps
paramÃ¨tre: la liste
**/
const slider = $('#slider');
const thumbnail = $('#thumbnail');

/* J'ajoute un border blanc dans le thumbnail qui correspond a la photo du slider
A chaque fois qu'une photo sera vue dans le slider, chaque photo vue aura ce border
Et je cache le figcaption dedans (pas esthetique)
(comme ca on sait celles qu'on a pas vu)
*/
const displayThumbnail = () =>{
	// je rÃ©cupÃ¨re l'index du li du slider qui est actif
	const indexSlider = $('#slider').find('li.active').index();
	
	// je rÃ©cupere le li du thumbnail qui a le meme index que le li du slider actif
	const thumbnailToDisplay = $('#thumbnail li')[indexSlider];
	thumbnailToDisplay.style.border = 'solid 5px white';
}
/* utile pour cacher la photo actuelle du slider
 quand je clique dans le thumbnail ou sur les boutons next/previous
 */
const cacherPhotoActuelleSlider = () => {
		$('#slider').find('.active').addClass('hidden');
		$('#slider').find('.active').removeClass('active');
}


/*
FONCTION POUR NETTOYER MES ANCIENNES PHOTOS DU SLIDER ET THUMBNAIL
Utile si je clique sur le bouton electro, rock et All
*/
const cleanMySlider = () =>{
	slider.html('');
	thumbnail.html('');
}

/*
SI JE CLIQUE SUR LE BOUTON NEXT DU SLIDER:
1/ Je montre dans le thumbnail (border blanc) la photo sÃ©lectionnÃ©e (+1) sauf si c'est la derniÃ¨re photo du thumbnail
2/ Je montre la photo correspondante dans le slider sauf si c'est la derniere toff du thumbnail
*/
const showNextOrPreviousPicture = (whichOne) => {
	// je recupere l'index de la photo actuellement active dans le slider
	const indexPhotoActive = $('#slider').find('.active').index();
	console.log('index de ma photo active', indexPhotoActive);
	// Je prepare l'index de ma prochaine photo
	const indexProchainePhoto = indexPhotoActive + whichOne;
	console.log('index de ma prochaine photo', indexProchainePhoto);
	// Je verifie si c'est pas la derniere toff du thumbnail
	const longueurSlider = $('#thumbnail li').length;
	console.log('la longueur de mon slider est ', longueurSlider);
	if(whichOne === 1 && indexProchainePhoto < longueurSlider) {
		cacherPhotoActuelleSlider();
		// je recupere la prochaine photo du slider et je la montre
		const prochainePhoto = $('#slider li')[indexProchainePhoto];
		prochainePhoto.classList.add('active');
		prochainePhoto.classList.remove('hidden');
		// je mets un border blanc sur la photo choisie dans le thumbnail
		displayThumbnail();
	} else if(whichOne === -1 && indexProchainePhoto >= 0) {
		cacherPhotoActuelleSlider();
		// je rÃ©cupÃ¨re la prochaine photo du slider et je la montre
		const prochainePhoto = $('#slider li')[indexProchainePhoto];
		prochainePhoto.classList.add('active');
		prochainePhoto.classList.remove('hidden');
		
		// je mets un border blanc sur la photo choisie dans le thumbnail
		displayThumbnail();
	}
	else {
		console.log('ceci etait la derniere toff du slider');
		if($('.active') === $('#slider li:last-child')) {
			$('.active figure').css({'box-shadow': '0 1px 1px rgba(0,0,0,0.15)'});
		} else {
			$('.active figure').css({'box-shadow': '0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15), 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15)',
	'padding': '20px', 'background-color': 'white'});
		}
		
	}
}


$(this).on('click', (event) => {
	const target = $(event.target);
	if(target.is(".artistes h5")){
		
		// je clean le slider et le thumbnail de mon historique
		cleanMySlider();
		
		// je récupère le nom du dj choisi
		const nomDj = $(event.target).html();
		
		// je fetch dans mon json et je filtre ma liste pour avoir que les données du dj seulement
		fetch(imagesUrl).then(response=>response.json()).then((data)=>{
			const photos = data.photos.sort(ordreAlphabetique);
			const artistChosen = photos.filter((photo) => photo.name === nomDj);
	
			/* si c'est bien le nom d'un dj ou j'ai cliqué, je récupère toutes ses toffs et je 
			les mets dans un slider et un thumbnail */
			if(artistChosen) {
				artistChosen.map(artistData=> {
					artistData.photosPath.map((photo)=>{
					const content = 
					`<li>
						<h4>${artistData.name}</h4>
						<figure>
							<img src='${photo}' alt='${artistData.name} at ${artistData.venue}'>
							<figcaption>${artistData.name} at ${artistData.venue}</figcaption>
						</figure>
					</li>`;
					slider.prepend(content);
					thumbnail.prepend(content);
					$('.electronic').hide();
					$('#hidden').show();
					});
				});
			} else {
			console.warn("T'as pas du cliquer sur un nom de dj, ou bien ta fonction a un probleme...");
			}
			// Si le dj a plusieurs toffs, je ne montre que la premiere dans le slider, je cache les autres
			if($('#slider li').length > 1) {
				const firstLiSlider = $('#slider li:first');
				const autresLiSlider = $('#slider li:first ~li');
				autresLiSlider.addClass('hidden');
				firstLiSlider.addClass('active');
				
				// j'arrange mes toffs
				$('#thumbnail li').css({'margin': '10px', 'width': '15%'});
				$('#thumbnail figure').css({'margin': '1em'});
	
				// j'arrange la liste de mon thumbnail
				$('#thumbnail').css({'margin': 'auto'});
				$("#thumbnail").show();
				displayThumbnail();
				
				//je cache le figcaption et le titre h4 du thumbnail
				$('#thumbnail figcaption').hide();
				$('#thumbnail h4').hide();
				// je montre les boutons previous et next
				$('.slider-nav').show();

			// si j'ai qu'une seule photo, je la montre:
			} else {
				const onlySlider = $('#slider li');
				onlySlider.addClass('active');
				
				// Je cache le thumbnail et les boutons previous/next
				$("#thumbnail").hide();
				$('.slider-nav').hide();
				}
				
			//FINALEMENT POUR TOUS, j'arrange l'image du slider pour qu'elle soit au milieu
			$('#slider').css({'margin': 'auto', 'list-style-type' : 'none'});
			$('.active figure').css({'box-shadow': '0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15), 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15)',
			'padding': '20px', 'background-color': 'white'});
			$('.active img').css({'border': 'solid 1px #e8e6e6'});
			});
	
	// Si je clique pas sur le nom d'un artiste dans ma boite, je fais rien
	} else {
		return;
	}	
});

// Si je clique sur le bouton next
$('.next span').on('click', () =>{
	showNextOrPreviousPicture(+1);
});

// si je clique sur le bouton previous
$('.previous span').on('click', () =>{
	showNextOrPreviousPicture(-1);
});

// Si je clique sur le bouton back, je remontre ma boites aux lettres et je cache mon slider
$('#hidden button').on('click', ()=>{
	$('.electronic').toggle();
	$('#hidden').hide();
})