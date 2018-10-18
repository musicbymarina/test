/**
 * @description Check if browser can use serviceworker and register
**/
if('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('sw.js')
	.then(()=>{
		console.log('[ServiceWorker] wake up.');
	});
}