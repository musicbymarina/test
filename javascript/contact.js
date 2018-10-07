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
	
	const buttonDownload = `<a href='data:text/plain;charset=utf-8, encodeURIComponent(${text})' download='Music_by_Marina.vcf'> +ME IN YOUR CONTACTS</a>`;	
	$('#downloadVCF').prepend(buttonDownload);
}

// Si je suis sur mon tel, un lien pour télécharger mon vcf apparait, je récupère ma carte vcf

const downloadContact = (mobileSize) => {
	download();
	mobileSize.matches ?  $('#downloadVCF').show(): $('#downloadVCF a:first').hide();
}

if(matchMedia) {
	const mobileSize = window.matchMedia("(max-width: 400px)");
	mobileSize.addListener(downloadContact);
	downloadContact(mobileSize);
	
}

$('#downloadVCF a').last().on('click', ()=>{
	$('.way a').last().attr({"href": "mailto:info@musicbymarina.fr", "title": "Send an email"});
});


/* Si je clique sur un h3:
- lui ajouter la classe active pour avoir le + qui se transforme en -
- récuperer son index et l'utiliser dans l'article
- mettre cet article en SlideDown et ajouter un toggleClass active(qui aura un display block)
(De base les articles sont cachés)
*/

$('.contact article').hide();
$(this).on('click', (event) => {
	const target = $(event.target);
	const parents = target.parent();

	if(target.is(".accordion")){
		target.toggleClass('active');

		const index = parents.find(target).index('h3');
		const article = $('.contact article');
		if(article[index-1].style.display === 'block'){
			article[index-1].style.display = 'none';
		} else {
			article[index-1].style.display = 'block';
		}
	}
	})




