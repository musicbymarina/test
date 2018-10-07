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
console.log('target is: ', target);
console.log('parents is ', parents);
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