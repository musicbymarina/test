 /*ALL THE METHODS FOR CONTACT PAGE*/
 
 /* @description Create a VCF card and download it*/
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
	const buttonDownload = `<a href='data:text/plain;charset=utf-8, encodeURIComponent(${text})' download='Music_by_Marina.vcf'> <i class="flaticon-agenda" aria-label='Add me on your phone' title="Add me on your phone">Add me on your phone</i></a>`;	
	$('#downloadVCF').prepend(buttonDownload);
}

/**
 * @description Display if mobile phone: add a VCF download button
 * @param {string} mobileSize
 */
const downloadContact = (mobileSize) => {
	download();
	mobileSize.matches ?  $('#downloadVCF').show(): $('#downloadVCF a:first').hide();
}

if(matchMedia) {
	const mobileSize = window.matchMedia("(max-width: 500px)");
	mobileSize.addListener(downloadContact);
	downloadContact(mobileSize);
	
}

/**
 * @description Event : If I click on Send an email, It opens default email client to send me a message
 I added in the default email a subject and a first sentence.
 (I've hidden my email address from my html code for the spambot)
 **/
$('#downloadVCF a').last().on('click', ()=>{
	$('.way a').last().attr({"href": "mailto:info@musicbymarina.fr?subject=Mail%20from%20your%20website&body=Hi%20Marina%0A%0AI%20swear%20I%20read%20the%20article%20Before%20Contacting%20Marina.%0A%0A", "target": "_blank"});
});

/**
 * @description Event : If I click on each heading titles, I open its article
 **/
$(this).on('click', (event) => {
	const target = $(event.target);
	const parents = target.parent();

	if(target.is(".accordion")){
		target.toggleClass('open');

		const index = parents.find(target).index('h3');
		const article = $('.contact article');
		if(article[index-1].style.display === 'block'){
			article[index-1].style.display = 'none';
		} else {
			article[index-1].style.display = 'block';
		}
	}
})