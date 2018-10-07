/* Si je clique sur un h3:
- lui ajouter la classe active pour avoir le + qui se transforme en -
- récuperer son index et l'utiliser dans l'article
- mettre cet article en SlideDown et ajouter un toggleClass active(qui aura un display block)
(De base les articles sont cachés)
*/

$('.about article').hide();
$(this).on('click', (event) => {
	const target = $(event.target);
	const parents = target.parent();
	if(target.is(".accordion")){
		target.toggleClass('active');

		const index = parents.find(target).index('h3');
		const article = $('.about article');
		if(article[index-1].style.display === 'block'){
			article[index-1].style.display = 'none';
		} else {
			article[index-1].style.display = 'block';
		}
	}
	})

/*Ajouter les quotes des artistes etc*/

 const quotesUrl = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/quotes.json";
 
 const addQuotes = (quotes) =>{
 		quotes.map((quote)=>{
 			const quotesContent = `
 			<li>
 			<section class="others">
					<h4>${quote.name}</h4>
					<p><quote>${quote.quote}</quote></p>
				</section>
 			</li>
 			`;
 			$('.quotes ul').prepend(quotesContent);
 		})
 }
 
 const quotesList = $('.quotes li');
 
const displayQuotes = () =>{
	$('.quotes li').each((index, element)=>{
		$(element).show(20000);
	})
}

const fetchQuotes = (liste) =>{
	const quotes = liste.quotes;
	if(quotes) {
		addQuotes(quotes);
	} else {
		console.warn('check si une liste apparait dans fetchQuotes et/ou addQuotes');
	}
}



// Creer une promise pour ensuite fetcher par defaut tous mes quotes
const verifFetch = new Promise((resolve, reject) =>{

	if( quotesList) {
		resolve('Quotes remplis');
	} else {
		reject('Pas bien rempli, recheck ta fonction fetchQuotes meuf ');
	}
})

verifFetch.then(()=>{
fetch(quotesUrl).then((response)=>response.json()).then(fetchQuotes).then(displayQuotes)
}).catch((error)=>{
	console.warn('Check ton erreur dans la fonction fetchQuotes: ', error);
})