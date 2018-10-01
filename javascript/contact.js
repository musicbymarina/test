const download = () =>{
	
	const text = `
BEGIN:VCARD
VERSION:4.0
N:Sellimoutou;Marina
FN:SELLIMOUTOU Marina
ORG:MUSIC BY MARINA
TITLE:Photographer
ADR;TYPE=WORK:;;;Paris;;;France
EMAIL;TYPE=PREF, INTERNET:info@musicbymarina.fr
REV:${Date.now()}
END:VCARD
	`;
	
	const buttonDownload = `<a href='data:text/plain;charset=utf-8, encodeURIComponent(${text})' download='Music_by_Marina.vcf'> + me in your contacts</a>`;	
	$('#downloadVCF').prepend(buttonDownload);
}

// Si je suis sur mon tel, un lien pour télécharger mon vcf apparait, je récupère ma carte vcf

const downloadContact = (mobileSize) => {
	download();
	mobileSize.matches ?  $('#downloadVCF').hide(): $('#downloadVCF').show();
}

if(matchMedia) {
	const mobileSize = window.matchMedia("(max-width: 400px)");
	mobileSize.addListener(downloadContact);
	downloadContact(mobileSize);
	
}

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





