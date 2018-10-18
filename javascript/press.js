/*ALL THE METHODS FOR PRESS PAGE*/

// data where I will fetch the images from press.json
const presse = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/press.json";


/**
 * @description Helps to sort my array of objects by the name of the media
 * @param {string} media1, media2
 */
const byName = (media1, media2) =>{
  if(media1.name < media2.name) return 1;
  if(media1.name > media2.name) return -1;
  return 0;
}

/**
 * @description Helps to sort my array of objects by the name of the artists
 * @param {string} name1, name2
 */
const byArtist = (name1, name2) =>{
  if(name1.artiste < name2.artiste) return 1;
  if(name1.artiste > name2.artiste) return -1;
  return 0;
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


 /* @description Event define all the click events of Press page except the menu
 * 
 */ 
$(this).on('click', (event) => {
	const target = $(event.target);
	const parents = target.parent();

/* If I click on a h3 heading(accordion):
-I add an .open class to change the + content in minus
- I take its index and use it to get the article
- I slidedown this article and I show it
*/
	if(target.is(".accordion")){
		target.toggleClass('open');
		const index = parents.find(target).index('h3');
		const article = $('.press article');
		if(article[index-1].style.display === 'block'){
			article[index-1].style.display = 'none';
		} else {
			article[index-1].style.display = 'block';
		}
		
	} else if(target.is(".open-photo")) {
		openPhoto();
			
	} else if(target.is(".close")) {
		closeModal();
	} else {
		/*If I click elsewhere on this page, it won't work*/
		return;
	}	
	})

/**
 * @description Create the titles of each magazines 
 * (for digital and printing) or artist (for social)
 * @param {string} data
 */
const addMagazines = (data) => {
	let content = ``;
	const digital = data.digital.sort(byName);
	const paper = data.paper.sort(byName);
	const social = data.social.sort(byArtist);
	
	// I add the titles in digital article
	digital.map((magazine)=> {
		content = `<h4>${magazine.name}</h4>`;
		$('#digital ul').prepend(content);
	});

	// I add the titles in printing article
	paper.map((magazine)=>{
		content = `<h4>${magazine.name}</h4>`;
		$('#print ul').prepend(content);
	});
	
	// I add the titles in social article
	social.map((images)=>{
		content = `<li class='pile'><h4>${images.artiste}</h4></li>`;
		$('#social ul').prepend(content);
	});
}

/**
 * @description Add my links for each digital magazine title
**/
const addDigitalLinks = () =>{
	const headings = $('#digital h4');
			$('#digital h4').each((index)=> {
				const title = headings[index];
				fetch(presse).then(response=>response.json()).then((data)=>{
					const listeMagazine = data.digital.filter((magazine) => magazine.name === title.innerHTML);
					listeMagazine.map((mag)=>{
						const liens = mag.links;
						liens.map((lien)=>{
							const content = `<li><p>Subject: <a href=${lien.url} target='_blank'>${lien.artiste}</a></p></li>`;
							title.innerHTML = title.innerHTML + `<ul>${content}</ul>`;
						});
					});
				});
			});
}

/**
 * @description Add my links for each print magazine title
**/
const addPrintLinks = () =>{
	const headings = $('#print h4');
	$('#print h4').each((index)=> {
		const title = headings[index];
		fetch(presse).then(response=>response.json()).then((data)=>{
			const listeMagazine = data.paper.filter((magazine) => magazine.name === title.innerHTML);
			listeMagazine.map((mag)=>{
				const files = mag.images;
				files.map((file)=>{
					const webpFile = file.webp;
					const otherFile = file.src;
					// If my link is .webp and png, I check if the browser accepts webp
					if(webpFile && otherFile) {
						Modernizr.on('webp', (result)=>{
							if(result){
								console.log('Your browser loves webp files, that increases the performance of my website');
								// If yes I add ONLY webp files to increase the performance
								let content = `
								<li>
									<figure>
										<picture>
											<source media='(min-width: 0px)' srcset=${webpFile} type='image/webP'>
											<img src=${webpFile} alt=${mag.name} class='open-photo'>
										</picture> 
								 		<figcaption>${file.artiste}</figcaption>
									</figure>
								</li>`;
								title.innerHTML = title.innerHTML + `<ul>${content}</ul>`;
							} else if(otherFile.endsWith('.png')) {
								// If not I verify the other file is a png file to use it
								let content = `
								<li>
									<figure>
										<picture>
											<img src=${otherFile} alt=${mag.name} class='open-photo'>
										</picture> 
										<figcaption>${file.artiste}</figcaption>
									</figure>
								</li>`;
								title.innerHTML = title.innerHTML + `<ul>${content}</ul>`;
							}
						})
					} else if(file.src.endsWith('.pdf')){
						// If the other file is a pdf file, I add a link instead of an image
						const content = `<li><p>Subject: <a href=${file.src} target='_blank'>${file.artiste}</a></p></li>`;
						title.innerHTML = title.innerHTML + `<ul>${content}</ul>`;
					}
				})
			})
		});
	});
}

/**
 * @description Add my links for each artist/promoter title
**/
const addSocialLinks = () =>{
	const headings = $('#social li');
	$('#social li').each((index)=> {
		const title = headings[index];
		fetch(presse).then(response=>response.json()).then((data)=>{
			const socialPosts = data.social.filter((post) => post.artiste === $('#social h4')[index].innerHTML);
			socialPosts.map((socialPost)=>{
				if(socialPost.png || socialPost.webp){
					const pictures = socialPost.png;
					const webpFiles = socialPost.webp;
					let content =``;
					
					// If my images are .webp or png, I check if the browser accepts webp
					Modernizr.on('webp', (result)=>{
						if(result){
							// If yes I add ONLY webp images to increase the performance
							console.log('Your browser loves webp files, that increases the performance of my website');
							webpFiles.map((webFile)=>{
							content = `
							<figure>
								<picture>
									<source srcset=${webFile} media='(min-width: 0px)' type='image/webp'>
									<img src=${webFile} alt=${socialPost.artiste} class='open-photo'> 
								</picture> 
								<figcaption>${socialPost.artiste}</figcaption>
							</figure>`;
							title.innerHTML += content;
							});
						} else {
							// If not I will use the png file
							pictures.map((picture)=>{
							content = `
							<figure>
								<picture>
									<img src=${picture} alt=${socialPost.artiste} class='open-photo'> 
								</picture> 
								<figcaption>${socialPost.artiste}</figcaption>
							</figure>`;
							title.innerHTML += content;
							});
						}
					});
				}
			});
		});
	});
}

/**
 * @description Fill all the titles, links and images in my articles
**/
fetch(presse).then((response)=>response.json()).then(addMagazines).then(()=>{
	addDigitalLinks();
	addPrintLinks();
	addSocialLinks();
});

