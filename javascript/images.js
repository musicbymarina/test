const data = [
{
		"name": "Daniel Avery",
		"type": "electro",
		"venue": "Peacock Society",
		"photosPath": [
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/12694544_1266530113380843_4985876799365095477_o.jpg?_nc_cat=0&oh=6f17468d494366a774cc6b9a22ae856b&oe=5C38C229",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/12513567_1266530373380817_5352358043785360024_o.jpg?_nc_cat=0&oh=6ba152bdd02c55c4aed6edde07a116e6&oe=5C29989F"
		]
	},
	{
		"name": "The Black Lips",
		"type": "rock",
		"venue": "La Villette",
		"photosPath": [
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/23632116_1934358369931344_7426729873053806612_o.jpg?_nc_cat=0&oh=d4a0d3b0d6f8d877ed18660d1a1a1591&oe=5C34A018",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/23509258_1934358429931338_2292833924781772992_o.jpg?_nc_cat=0&oh=8367aa7bc48d97abc450e2989704f2e7&oe=5C2DB3F5",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/23517831_1934359216597926_5576395402958645362_n.jpg?_nc_cat=0&oh=74e9c6e16408ffe3d39ddb645a86918a&oe=5C1CF98E"
		]
	},
	{
		"name": "The Jesus and Mary Chain",
		"type": "rock",
		"venue": "La Route du Rock 2017",
		"photosPath": [
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/21054900_1848116595222189_3410498097011115445_o.jpg?_nc_cat=0&oh=ce3ef5832bc1d6f57ccf9ed94bda2d33&oe=5C2DD375",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/20992966_1848116818555500_4471541284690943894_n.jpg?_nc_cat=0&oh=610a4ddc733871437864844cb5c131d2&oe=5C1F6471"
	]
}
];

/**
Je crÃ©e une nouvelle liste pour rÃ©cupÃ©rer les photos des djs seulement
**/
const electroList = data.filter((photo) => {
	return photo.type === 'electro';
})

/**
Je crÃ©e une nouvelle liste pour rÃ©cupÃ©rer les photos des groupes de rock seulement
**/
const rockList = data.filter((photo) => {
	return photo.type === 'rock';
})

/*
Je cree un titre
*/
const creerTitre = (liste) =>{
	switch(liste) {
		case 'electroList':
		$('#titre').html('Photographer for DJs');
		break;
		
		case 'rockList':
		$('#titre').html('Photographer for Rock bands');
		break;
		
		default:
		$('#titre').html('Photographer');
	}
}


/**
Je montre les photos de la liste choisie dans le slider et le thumbnail en mÃªme temps
paramÃ¨tre: la liste
**/
const slider = $('#slider');
const thumbnail = $('#thumbnail');

function fetchPhotos(liste){
if(liste) {
	liste.map(artiste=> {
		artiste.photosPath.map((photo)=>{
			const content = 
			`<li>
				<figure style='box-shadow: 0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15), 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15); padding: 20px; background-color: white'>
					<img src='${photo}' alt='${artiste.name} at ${artiste.venue}' style='border: solid 1px #e8e6e6'>
					<figcaption>${artiste.name} at ${artiste.venue}</figcaption>
				</figure>
			</li>`;
		slider.prepend(content);
		thumbnail.prepend(content);
		});
	});
} else {
	console.warn('check si une liste apparait dans fetchPhotos');
}
// je ne montre que la premiÃ¨re image dans le slider, je cache les autres
const firstLiSlider = $('#slider li:first');
const autresLiSlider = $('#slider li:first ~li');
firstLiSlider.addClass('active');
autresLiSlider.addClass('hidden');

// j'arrange l'image du slider pour qu'elle soit au milieu
$('#slider').css({'margin': 'auto', 'list-style-type' : 'none'});

// je fais un effet avec le figcaption
$('#slider figcaption').fadeIn('slow');

// j'arrange la liste de mon thumbnail
$('#thumbnail').css({'margin': 'auto'});

// je calcule le width de chaque li selon la largeur de mon ul
if(thumbnail !== undefined) {
	console.log(thumbnail);
}

$('#thumbnail li').css({'margin': '5px', 'width': 'auto'});
$('#thumbnail figure').css({'margin': '1em'});
	
//je cache le figcaption du thumbnail
$('#thumbnail figcaption').hide();
$('#thumbnail figure').css({'box-shadow': 'none', 'padding':'0', 'background-color':'black'});

// Je crÃ©e mon titre
creerTitre(liste);
}

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


// Creer une promise pour ensuite fetcher par dÃ©faut toutes mes photos dans le slider et le thumbnail
const verifFetch = new Promise((resolve, reject) =>{

	if( slider.length > 0 && slider.length === thumbnail.length) {
		resolve('Photos remplis dans le slider et le thumbnail');
	} else {
		reject('Pas bien rempli, recheck ta fonction fetchPhotos meuf ');
	}
})

verifFetch.then(()=>{
fetchPhotos(data);
displayThumbnail();
}).catch((error)=>{
	console.warn('Check ton erreur dans la fonction fetchPhotos: ', error);
})

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
	// je rÃ©cupÃ¨re l'index de la photo actuellement active dans le slider
	const indexPhotoActive = $('#slider').find('.active').index();
	// Je prÃ©pare l'index de ma prochaine photo
	const indexProchainePhoto = indexPhotoActive + whichOne;
	// Je vÃ©rifie si c'est pas la derniere toff du thumbnail
	const longueurSlider = $('#thumbnail li').length;
	if(whichOne === 1 && indexProchainePhoto < longueurSlider) {
		cacherPhotoActuelleSlider();
		// je rÃ©cupÃ¨re la prochaine photo du slider et je la montre
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
	}
}

$('.next span').on('click', () =>{
	showNextOrPreviousPicture(+1);
});

$('.previous span').on('click', () =>{
	showNextOrPreviousPicture(-1);
});

/*
SI JE CLIQUE SUR LE BOUTON ELECTRO:
Je montre les photos correspondantes a ma liste dans le slider et thumbnail
*/
$('#electro').click(()=>{
	// je nettoie d'abord mon thumbnail et mon slider:
	cleanMySlider();
	// je montre les photos du slider et thumbnail correspondantes aux djs
	fetchPhotos(electroList);
	// je mets mon fameux border blanc sur le thumbnail
	displayThumbnail();
});

/*
SI JE CLIQUE SUR LE BOUTON ROCK:
Je montre les photos correspondantes a ma liste dans le slider et thumbnail
*/
$('#rock').click(()=>{
	// je nettoie d'abord mon thumbnail et mon slider:
	cleanMySlider();
	// je montre les photos du slider et thumbnail correspondantes aux rock bands
	fetchPhotos(rockList);
	// je mets mon fameux border blanc sur le thumbnail
	displayThumbnail();
});

/*
SI JE CLIQUE SUR LE BOUTON SHOW ALL:
Je montre toutes les photos dans le slider et thumbnail
*/
$('#all').click(()=>{
	// je nettoie d'abord mon thumbnail et mon slider:
	cleanMySlider();
	// je montre les photos du slider et thumbnail correspondantes aux djs
	fetchPhotos(data);
	// je mets mon fameux border blanc sur le thumbnail
	displayThumbnail();
});

/*
SI JE CLIQUE SUR LA PHOTO dans le thumbnail:
1/ la photo correspondante doit avoir un border blanc
2/ l'index de la photo doit correspondre a l'index de la photo du slider pour etre concordant
parametre: event (pour rÃ©cupÃ©rer la zone choisie)
*/

const choosePhoto = (event) =>{
	const photoChoisie = $(event.target);
	console.log('la photo choisie est: ', photoChoisie);
	if(photoChoisie.is('li')) {
		// Je change le titre h2 par le figcaption de la photo
		const titrePhotoChoisie = photoChoisie.find('figcaption').html();
		$('#titre').html(`You chose to see ${titrePhotoChoisie}`);
		// je trouve l'index de ma photo choisie dans le thumbnail
		const indexPhotoChoisie = $('#thumbnail').find(photoChoisie).index();
		// je cache la photo actuelle du slider
		cacherPhotoActuelleSlider();
		// je rÃ©cupÃ¨re l'index de la photo du slider qui correspond a la photo choisie et je la montre
		const photoCorrespondante = $('#slider li')[indexPhotoChoisie];
		photoCorrespondante.classList.add('active');
		photoCorrespondante.classList.remove('hidden');
		// je mets un border blanc sur la photo choisie dans le thumbnail
		displayThumbnail();
	}
}

$('#thumbnail').click(choosePhoto);

/*SI JE CLIQUE SUR UNE PHOTO DU SLIDER EN MODE ACTIVE:
- un modal s'ouvre
- dans le modal (modal-content), j'ai l'image en grand écran
- si je clique sur le close (.close), le modal se ferme
*/

$('#slider img').on('click', (event) => {
	const image = event.target;
	console.log('the image is: ', image);
	console.log('the src of the image is', image.src);
	console.log('the alt of the image is', image.alt);
	const contenu = `
	<img src=${image.src} alt=${image.alt}>
	<figcaption>${image.alt}</figcaption>
	`;
	$('#modal-figure').prepend(contenu);
	$('#myModal').show();
});

$('.close').on('click', () =>{
		$('#myModal').hide();
});
