/*ALL THE METHODS FOR ABOUT PAGE*/

// I will use the quotesContent to fill it later in my functions
let quotesContent = ``;

/**
 * @description Open each article when I click on a h3 ('accordion')
 * @param {string} callback
 */

$(this).on('click', (event) => {
  const target = $(event.target);
  const parents = target.parent();
  if(target.is(".accordion")){
    target.toggleClass('open');

    const index = parents.find(target).index('h3');
    const article = $('.cover article');
    if(article[index].style.display === 'block'){
      article[index].style.display = 'none';
    } else {
      article[index].style.display = 'block';
    }
  }
  })
 
 