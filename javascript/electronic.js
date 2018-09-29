const imagesUrl = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/data.json";
let contenuLettres = $('#letters');

/*Fonction pour mettre dans l'ordre alphabetique les noms des artistes*/
const ordreAlphabetique = (artist1, artist2) =>{
	if(artist1.name < artist2.name) return -1;
	if(artist1.name > artist2.name) return 1;
	return 0;
}


/*Fonction pour ajouter les lettres et les artistes dedans*/
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const addLetters = () =>{
	let lettersContenu;
	// Creer le contenu de mes "boites aux lettres"
	alphabet.map((letter)=>{
		lettersContenu = `
		<li id=${letter}>
		<article style='background-color: white; border: solid 5px black'>
		<h4 style='color: black'>${letter.toUpperCase()}</h4>
		<ul class='artistes'>
		${
			//Fonction pour ajouter chaque artiste dans la lettre associée
			fetch(imagesUrl).then(response=>response.json()).then((data)=>{
				const photos = data.photos.sort(ordreAlphabetique);
				const electroList = photos.filter((photo) => photo.type === 'electro');

				electroList.map((photo)=>{
				const listeArtistes = `
				<li class='liste-artistes'>
				<h5 id='${photo.name}'>${photo.name}</h5>
				</li>
				`;
				const artistes = $(`#${letter} .artistes`);
				// si la lettre de ma boite correspond à la 1ere lettre du nom du dj, je mets le nom dedans
				if(photo.name[0] === letter) {
					$(`#${letter} .artistes`).prepend(listeArtistes);
					// Supprimer les artistes doublons
					$('.liste-artistes').each(function () {					
      					$('.liste-artistes:contains("' + $(this).text() + '"):gt(0)').remove(); 
 					});
				}
				})
			})
		}
		</ul>
		</article>
		</li>
		`;
		$('#letters').append(lettersContenu);
	});	
}


// Creer une promise pour ensuite fetcher par defaut toutes mes lettres et noms de djs dans les boites
const ajouterLettres = new Promise((resolve, reject) =>{
	const listeArtistes = $('.liste-artistes h5');
	if(listeArtistes) {
		resolve('Alphabet et djs bien remplis dans les boites');
	} else {
		reject('Pas bien rempli, recheck ta fonction addLetters meuf ');
	}
})

ajouterLettres.then(()=>{
addLetters();
}).catch((error)=>{
	console.warn('Check ton erreur dans la fonction addLetters: ', error);
});
