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
	
	const buttonDownload = `<p><a href='data:text/plain;charset=utf-8, encodeURIComponent(${text})' download='Music_by_Marina.txt'>Save my contact</a><p>`;	
$('.way').prepend(buttonDownload);
}

// Si je suis sur mon tel, un lien pour télécharger mon vcf apparait, je récupère ma carte vcf

const downloadContact = (mobileSize) => {
				mobileSize.matches ? $('.way').prepend(download); : console.log('tu es sur un ordi');
			}

			if(matchMedia) {
				const mobileSize = window.matchMedia("(max-width: 400px)");
				mobileSize.addListener(downloadContact);
				downloadContact(mobileSize);

}

downloadContact(mobileSize);