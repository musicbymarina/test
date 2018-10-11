/* Si je clique sur un h3:
- lui ajouter la classe active pour avoir le + qui se transforme en -
- récuperer son index et l'utiliser dans l'article
- mettre cet article en SlideDown et ajouter un toggleClass active(qui aura un display block)
(De base les articles sont cachés)
*/

$('.press article').hide();
$(this).on('click', (event) => {
	const target = $(event.target);
	const parents = target.parent();

	if(target.is(".accordion")){
		target.toggleClass('active');

		const index = parents.find(target).index('h3');
		const article = $('.press article');
		if(article[index-1].style.display === 'block'){
			article[index-1].style.display = 'none';
		} else {
			article[index-1].style.display = 'block';
		}
	} else if(target.is(".agrandir")) {
		console.log('tu cliques sur une photo');
			let image = event.target;
			console.log(image);
			$('.modal-content').html('');
			$('html').addClass('force');
			$('.modal-content').html(`<span class="close">X</span>`);
			$(event.target).clone().appendTo('.modal-content');
			$('.modal-content img').css({'width':'100%'});
			$('#myModal').show();
			
	// Si je clique sur le bouton close, je ferme la photo agrandie
	} else if(target.is(".close")) {
			console.log('tu cliques sur le bouton pour fermer la photo agrandie');
			$('#myModal').hide();
			$('html').removeClass('force');
			
			// Si je clique pas sur le nom d'un artiste dans ma boite, je fais rien
	} else {
		console.log('ca ne sert à rien de cliquer, ca fonctionnera pas');
		return;
	}	
	})


// Remplir l'article digital avec le nom du magazine, l'article et le lien correspondant
const presse = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/press.json";

// Je cree les titres 
const addMagazines = (data) => {
	let content = ``;
	const digital = data.digital;
	
	digital.map((magazine)=> {
		content = `<h4>${magazine.name}</h4>`;

	$('#digital ul').prepend(content);
	
});
	const paper = data.paper;
	paper.map((magazine)=>{
		content = `<h4>${magazine.name}</h4>`;

		$('#print ul').prepend(content);
	})
	
	const social = data.social;
	social.map((images)=>{
		content = `<li class='pile'><h4>${images.artiste}</h4></li>`;

		$('#social ul').prepend(content);
	})
	
}

// Je rentre les liens pour chaque titre digital
const addDigitalLinks = () =>{
	const titres = $('#digital h4');
			$('#digital h4').each((index)=> {
				const titre = titres[index];
				fetch(presse).then(response=>response.json()).then((data)=>{
					const listeMagazine = data.digital.filter((magazine) => magazine.name === titre.innerHTML);
					listeMagazine.map((mag)=>{
						const liens = mag.links;
						liens.map((lien)=>{

							const content = `<li><p>Subject: <a href=${lien.url} target='_blank'>${lien.artiste}</a></p></li>`;
							titre.innerHTML = titre.innerHTML + `<ul>${content}</ul>`;
						})
					})
				});
			})
}

// Je rentre les liens pour chaque titre papier
const addPrintLinks = () =>{
		const titres = $('#print h4');
			$('#print h4').each((index)=> {
				const titre = titres[index];
				fetch(presse).then(response=>response.json()).then((data)=>{
					const listeMagazine = data.paper.filter((magazine) => magazine.name === titre.innerHTML);
					listeMagazine.map((mag)=>{
						const files = mag.images;
						files.map((file)=>{
							if(file.src.endsWith('.png') || file.src.endsWith('.webp')){
								const content = `<li>
								<figure>
									<picture>
										<source media='(min-width: 501px)' srcset=${file.src}>
										<source media='(max-width: 500px)' srcset=${file.webp}>
										<img src=${file.src} alt=${mag.name} class='agrandir'>
									</picture> 
								 	<figcaption>${file.artiste}</figcaption>
								 </figure>
								</li>`;
								titre.innerHTML = titre.innerHTML + `<ul>${content}</ul>`;
							} else if(file.src.endsWith('.pdf')){
								const content = `<li><p>Subject: <a href=${file.src} target='_blank'>${file.artiste}</a></p></li>`;
								titre.innerHTML = titre.innerHTML + `<ul>${content}</ul>`;
							}
							})
						})
					});
				});
}

// Je rentre les liens pour chaque post instagram
const addSocialLinks = () =>{
			const titres = $('#social li');
			$('#social li').each((index)=> {
				const titre = titres[index];
				fetch(presse).then(response=>response.json()).then((data)=>{
					const socialPosts = data.social.filter((post) => post.artiste === $('#social h4')[index].innerHTML);
					socialPosts.map((socialPost)=>{
						const pictures = socialPost.pic;
						const picturesOptimized = socialPost.webp;
						pictures.map((pic)=>{
								const content = `<figure>
								<picture>
								<source media='(min-width: 501px)' srcset=${pic}>
								<source media='(max-width: 500px)' srcset=${picturesOptimized}>
								<img src=${pic} alt=${socialPost.artiste} class='agrandir'>
								</picture> 
								<figcaption>${socialPost.artiste}</figcaption>
								</figure>`;
								titre.innerHTML += content;
							
							})
						})
					});
				});
}

// Je remplis la page
fetch(presse).then((response)=>response.json()).then(addMagazines).then(()=>{
	addDigitalLinks();
	addPrintLinks();
	addSocialLinks();
});

/*SI JE CLIQUE SUR UNE PHOTO DU SLIDER :
- un modal s'ouvre
- dans le modal (modal-content), j'ai l'image en grand écran
- si je clique sur le close (.close), le modal se ferme
*/
const agrandirPhoto = () => {
$('.agrandir img').on('click', (event) => {
	console.log($(event.target));
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

// Tester si c'est parce que le DOM est loadé ou parce que j'ai déplacé les events listeners
$(function() {
    agrandirPhoto();
  }); // fin function quand le DOM est loadé