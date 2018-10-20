/*ALL THE METHODS FOR ELECTRONIC PORTFOLIO PAGE*/

// data where I will fetch the images from portfolio.json
//const imagesUrl = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/portfolio.json";
//const imagesUrl = "https://github.com/musicbymarina/test/raw/master/javascript/portfolio.json";
const imagesUrl = "https://musicbymarina.github.io/test/javascript/portfolio.json";

/**
 * @description Helps to sort my array of objects by the name of the artists
 * @param {string} artist1, artist2
 */
const byDjName = (artist1, artist2) =>{
	if(artist1.name < artist2.name) return 1;
	if(artist1.name > artist2.name) return -1;
	return 0;
}

/**
 * @description Add each letter of the alphabet in an article, 
 * Then add each artist of the data in the right article
 * 
 */
const addLetters = () =>{
	const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	let lettersContent;

	alphabet.map((letter)=>{
		lettersContent = `
		<li id=${letter}>
		<article style='background-color: white; border: solid 5px black'>
		<h4 style='color: black'>${letter.toUpperCase()}</h4>
		<ul class='artistes'>
		${
			// I add each artist in the letter
			fetch(imagesUrl).then(response=>response.json()).then((data)=>{
				const photos = data.photos.sort(byDjName);
				const electroList = photos.filter((photo) => photo.type === 'electro');
				
				electroList.map((photo)=>{
					
				const artistList = `
				<li class='liste-artistes'>
				<h5 id='${photo.name}'>${photo.name}</h5>
				</li>
				`;
				
				// If the letter in the article suits to the first letter of the artist name, I put the name inside
				if(photo.name[0] === letter) {
					$(`#${letter} .artistes`).prepend(artistList);

					// I delete the name of duplicated artists name if there are some
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
		$('#letters').append(lettersContent);
	});	
}

/* @description Add a promise to fetch my letters and dj names.
 Or put an error message
 * @param {string} callback
 */
const verifyLetters = new Promise((resolve, reject) =>{
	const artistTitles = $('.liste-artistes h5');
	if(artistTitles) {
		resolve('Alphabet and djs are filled in boxes');
	} else {
		reject('Check again your addletters function');
	}
})

verifyLetters.then(()=>{
addLetters();
}).catch((error)=>{
	console.warn('Check again your addletters function: ', error);
});