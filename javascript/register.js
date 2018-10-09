if('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('sw.js')
	.then(()=>{
		console.log('Ton serviceWorker est bien enregistré');
	});
}