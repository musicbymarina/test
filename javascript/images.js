//const imagesUrl = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/data.json";
const imagesUrl = "https://musicbymarina.github.io/test/javascript/images.json";

/*Fonction pour mettre dans l'ordre alphabetique les noms des artistes*/
const ordreAlphabetique = (artist1, artist2) =>{
	if(artist1.name < artist2.name) return -1;
	if(artist1.name > artist2.name) return 1;
	return 0;
}


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
			
	const WidthChange = (mobileSize) => {
		mobileSize.matches ? $('.active figure').css(cssFigureMobile) : $('.active figure').css(cssFigureOrdi);
	}
	
const displayLaptop = () => {
	
	const pubRock = {
		nom: 'rock',
		texte: 'Check the pictures of Rock bands',
		image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/23509258_1934358429931338_2292833924781772992_o.jpg?_nc_cat=0&oh=8367aa7bc48d97abc450e2989704f2e7&oe=5C2DB3F5",
		lien: "./html/rock.html"
	}
	
	const pubElectro = {
		nom: 'electro',
		texte: 'Check the pictures of djs',
		image: "https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/1909220_740926665941193_790709462_o.jpg?_nc_cat=108&oh=671bc7010f581ca8b13a3ac3efcfb0a5&oe=5C591C13",
		lien: "./html/electronic.html"
	}
	//const contenuPub = [pubRock, pubElectro];
	
	const favoritePics = [
	{
		type: 'electro',
		nom: 'Daniel Avery',
		delay: '0s',
		url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/20023964_1804355119598337_76681915083011696_o.jpg?_nc_cat=101&oh=91e03dd302c3121df543e31624c45f7a&oe=5C617BAE'
	},
	{
		type: 'electro',
		nom: 'Erol Alkan',
		delay: '6s',
		url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/1492737_700998713267322_859434998_o.jpg?_nc_cat=109&oh=31297e01ceacb418f7007014832d8711&oe=5C23FCE7'
	},
	{
		type: 'electro',
		nom: 'Maceo Plex',
		delay: '12s',
		url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/22459168_1896246913742490_963753968985645795_o.jpg?_nc_cat=105&oh=4ba6ebb095cb9707ad6dfc21b012b47b&oe=5C2BC1EC'
	},
	{
		type: 'electro',
		nom: 'TEED',
		delay: '18s',
		url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/1888839_764353863598473_1992132639_o.jpg?_nc_cat=103&oh=0495bf997d50b322083e4d750ade90b0&oe=5C5654AA'
	},
	{
		type: 'electro',
		nom: 'Sisy Ey',
		delay: '24s',
		url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/1909220_740926665941193_790709462_o.jpg?_nc_cat=108&oh=671bc7010f581ca8b13a3ac3efcfb0a5&oe=5C591C13'
	},
	{
		type: 'rock',
		nom: 'The Black Lips',
		delay: '30s',
		url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/23509258_1934358429931338_2292833924781772992_o.jpg?_nc_cat=0&oh=8367aa7bc48d97abc450e2989704f2e7&oe=5C2DB3F5'
	},
		{
		type: 'rock',
		nom: 'The Black Lips',
		delay: '36s',
		url: 'https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/23632116_1934358369931344_7426729873053806612_o.jpg?_nc_cat=0&oh=d4a0d3b0d6f8d877ed18660d1a1a1591&oe=5C34A018'
	}];
	
	favoritePics.map((favorite)=>{
		const content = `<li>
		<span style='background-image: url("${favorite.url}"); animation-delay: ${favorite.delay}; -webkit-animation-delay: ${favorite.delay};
    	-moz-animation-delay: ${favorite.delay}; -o-animation-delay: ${favorite.delay}; -ms-animation-delay: ${favorite.delay};'>${favorite.type}</span>
		<div>
		<h2 style='text-align:right; text-transform: uppercase'>
		<a href="./html/rock.html"> Check the pictures of Rock bands</a>
		</h2>
		<h2 style='text-align:right; text-transform: uppercase'>
		<a href="./html/electronic.html"> Check the pictures of djs</a>
		</h2>
		</div>
		</li>`;
		
		$('.pub').prepend(content);
	})
	
		 $('#buttons').hide();
		 $('.slider').hide();
		 $('#arrows').hide();
		 $('.thumbnail').hide();
		 $('main').css({'height': '100vh'});
		 
}


	
	const hidePictures = (laptopSize) => {
		laptopSize.matches ? displayLaptop() : $('main section').show();
	}

	if(matchMedia) {
		const mobileSize = window.matchMedia("(max-width: 700px)");
		mobileSize.addListener(WidthChange);
		WidthChange(mobileSize);
		
		const laptopSize = window.matchMedia("(min-width:870px)");
		laptopSize.addListener(hidePictures);
		hidePictures(laptopSize);
	

/**
Je montre les photos de la liste choisie dans le slider et le thumbnail en mÃªme temps
paramÃ¨tre: la liste
**/
const slider = $('#slider');
const thumbnail = $('#thumbnail');

const addPhotos = (photos) =>{
	photos.map(artiste=> {
		artiste.photosPath.map((photo)=>{
			const photosContent = 
			`<li>
				<figure>
					<img src='${photo}' alt='${artiste.name} at ${artiste.venue}' style='border: solid 1px #e8e6e6'>
					<figcaption>${artiste.name} at ${artiste.venue}</figcaption>
				</figure>
			</li>`;
		slider.prepend(photosContent);
		thumbnail.prepend(photosContent);
		});
	});
}

const displaySliderwhenFetch = () => {
	// je ne montre que la premiÃ¨re image dans le slider, je cache les autres
	const firstLiSlider = $('#slider li:first');
	const autresLiSlider = $('#slider li:first ~li');
	firstLiSlider.addClass('active');
	autresLiSlider.addClass('hidden');

	// j'arrange l'image du slider pour qu'elle soit au milieu et soit responsive
	$('#slider').css({'margin': 'auto', 'list-style-type' : 'none'});
	WidthChange(mobileSize);

	// je fais un effet avec le figcaption
	$('#slider figcaption').fadeIn('slow');

	// j'arrange la liste de mon thumbnail
	$('#thumbnail').css({'margin': 'auto'});

	// je calcule le width de chaque li selon la largeur de mon ul
	if(thumbnail !== undefined) {
		console.log('My thumbnail is ', thumbnail);
	}

	$('#thumbnail li').css({'margin': '10px', 'width': '15%'});
	$('#thumbnail figure').css({'margin': '1em'});
	
	//je cache le figcaption du thumbnail
	$('#thumbnail figcaption').hide();
	$('#thumbnail figure').css({'width': 'auto', 'padding':'0', 'background-color':'black'});
}


const fetchPhotos = (liste) =>{
	const photos = liste.photos;
	if(photos) {
		addPhotos(photos);
	} else {
		console.warn('check si une liste apparait dans fetchPhotos');
	}
		displaySliderwhenFetch();
}

/* J'ajoute un border blanc dans le thumbnail qui correspond a la photo du slider
A chaque fois qu'une photo sera vue dans le slider, chaque photo vue aura ce border
Et je cache le figcaption dedans (pas esthetique)
(comme ca on sait celles qu'on a pas vu)
*/
const displayThumbnail = () =>{
	// je recupere l'index du li du slider qui est actif
	const indexSlider = $('#slider').find('li.active').index();
	
	// je recupere le li du thumbnail qui a le meme index que le li du slider actif
	const thumbnailToDisplay = $('#thumbnail li')[indexSlider];
	thumbnailToDisplay.style.border = 'solid 5px white';
	
}


// Creer une promise pour ensuite fetcher par defaut toutes mes photos dans le slider et le thumbnail
const verifFetch = new Promise((resolve, reject) =>{

	if( slider.length > 0 && slider.length === thumbnail.length) {
		resolve('Photos remplis dans le slider et le thumbnail');
	} else {
		reject('Pas bien rempli, recheck ta fonction fetchPhotos meuf ');
	}
})

/*verifFetch.then(()=>{
fetch(imagesUrl).then((response)=>response.json()).then(fetchPhotos).then(displayThumbnail)
}).catch((error)=>{
	console.warn('Check ton erreur dans la fonction fetchPhotos: ', error);
})*/

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
	// Je prepare l'index de ma prochaine photo
	const indexProchainePhoto = indexPhotoActive + whichOne;
	// Je verifie si c'est pas la derniere toff du thumbnail
	const longueurSlider = $('#thumbnail li').length;
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
		// je recupere la prochaine photo du slider et je la montre
		const prochainePhoto = $('#slider li')[indexProchainePhoto];
		prochainePhoto.classList.add('active');
		prochainePhoto.classList.remove('hidden');
		
		// je mets un border blanc sur la photo choisie dans le thumbnail
		displayThumbnail();
		WidthChange(mobileSize);
	}
	else {
		console.log('This is the last photo of my slider');
	}
}

$('.next span').on('click', () =>{
	$('.next span').animate({'color':'#eee'}, 'slow');
	showNextOrPreviousPicture(+1);
	WidthChange(mobileSize);
});

$('.previous span').on('click', () =>{
	showNextOrPreviousPicture(-1);
	WidthChange(mobileSize);
});



/*
SI JE CLIQUE SUR LA PHOTO dans le thumbnail:
1/ la photo correspondante doit avoir un border blanc
2/ l'index de la photo doit correspondre a l'index de la photo du slider pour etre concordant
parametre: event (pour rÃ©cupÃ©rer la zone choisie)
*/

const choosePhoto = (event) =>{
	const photoChoisie = $(event.target);
	if(photoChoisie.is('li')) {
		// Je change le titre h2 par le figcaption de la photo
		const titrePhotoChoisie = photoChoisie.find('figcaption').html();
		$('#titre').html(`You chose to see ${titrePhotoChoisie}`);
		// je trouve l'index de ma photo choisie dans le thumbnail
		const indexPhotoChoisie = $('#thumbnail').find(photoChoisie).index();
		// je cache la photo actuelle du slider
		cacherPhotoActuelleSlider();
		// je recupere l'index de la photo du slider qui correspond a la photo choisie et je la montre
		const photoCorrespondante = $('#slider li')[indexPhotoChoisie];
		photoCorrespondante.classList.add('active');
		photoCorrespondante.classList.remove('hidden');
		// je mets un border blanc sur la photo choisie dans le thumbnail
		displayThumbnail();
		WidthChange(mobileSize);
	}
}

$('#thumbnail').click(choosePhoto);

/*SI JE CLIQUE SUR UNE PHOTO DU SLIDER :
- un modal s'ouvre
- dans le modal (modal-content), j'ai l'image en grand écran
- si je clique sur le close (.close), le modal se ferme
*/
const agrandirPhoto = () => {
$('#slider img').on('click', (event) => {
	$('.modal-content').html('');
	$('html').addClass('force');
	$('.modal-content').html(`<span class="close">X</span>`);
	$(event.target).clone().appendTo('.modal-content');
	$('.modal-content img').css({'width':'100%'});
	$('#myModal').show();
	
	$('.close').on('click', () =>{
		$('#myModal').hide();
		$('html').removeClass('force');
});
});
}



const defiler = () => {
	verifFetch.then(()=>{
fetch(imagesUrl).then((response)=>response.json()).then(fetchPhotos).then(displayThumbnail)
}).catch((error)=>{
	console.warn('Check ton erreur dans la fonction fetchPhotos: ', error);
})
}



// Si je suis sur mon ordi, un lien pour télécharger mon vcf apparait, je récupère ma carte vcf
if(matchMedia) {
	const mobileSize = window.matchMedia("(max-width: 869px)");
	mobileSize.addListener(defiler);
	defiler(mobileSize);
	
}

const showCarousel = (mobileSize) => {
	mobileSize.matches ?  defiler() : console.log("it's a computer") ;
}


// Tester si c'est parce que le DOM est loadé ou parce que j'ai déplacé les events listeners
$(function() {
    agrandirPhoto();
  }); // fin function quand le DOM est loadé


/*
SI JE CLIQUE SUR LE BOUTON ELECTRO:
Je montre les photos correspondantes a ma liste dans le slider et thumbnail
*/

$('#electro').click(()=>{
	// je nettoie d'abord mon thumbnail et mon slider:
	cleanMySlider();
	// je montre les photos du slider et thumbnail correspondantes aux djs
	fetch(imagesUrl).then(response=>response.json()).then((data)=>{
		const photos = data.photos;
		const electroList = photos.filter((photo) => photo.type === 'electro');
		addPhotos(electroList);
		displaySliderwhenFetch();
	}).then(displayThumbnail).then(agrandirPhoto)
});

/*
SI JE CLIQUE SUR LE BOUTON ROCK:
Je montre les photos correspondantes a ma liste dans le slider et thumbnail
*/
$('#rock').click(()=>{
	// je nettoie d'abord mon thumbnail et mon slider:
	cleanMySlider();
	// je montre les photos du slider et thumbnail correspondantes aux djs
	fetch(imagesUrl).then(response=>response.json()).then((data)=>{
		const photos = data.photos;
		const rockList = photos.filter((photo) => photo.type === 'rock');
		addPhotos(rockList);
		displaySliderwhenFetch();
	}).then(displayThumbnail).then(agrandirPhoto)
});

/*
SI JE CLIQUE SUR LE BOUTON SHOW ALL:
Je montre toutes les photos dans le slider et thumbnail
*/
$('#all').click(()=>{
	// je nettoie d'abord mon thumbnail et mon slider:
	cleanMySlider();
	// je montre les photos du slider et thumbnail correspondantes aux djs
	fetch(imagesUrl).then(response=>response.json()).then((data)=>{
		const photos = data.photos;
		addPhotos(photos);
		displaySliderwhenFetch();
	}).then(displayThumbnail).then(agrandirPhoto)
});

}



