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
    if(article[index-1].style.display === 'block'){
      article[index-1].style.display = 'none';
    } else {
      article[index-1].style.display = 'block';
    }
  }
  })
 
 /**
 * @description Add all the quotes in my section
 * @param {string} the quotes
 */
 const addQuotes = (quotes) =>{
    quotes.map((quote)=>{
      quotesContent = `
      <li>
      <section class="others">
          <h4>${quote.name}</h4>
          <p><quote>"${quote.quote}"</quote></p>
        </section>
      </li>
      `;
      $('.quotes ul').prepend(quotesContent);
    })
 }

/**
 * @description Ask to fill my section of quotes if I have some.
 Or put a message
 * @param {string} the list of quotes
 */
const fetchQuotes = (list) =>{
 const quotes = list.quotes;
  if(quotes) {
    addQuotes(quotes);
  } else {
    console.warn('check if a list of quotes appears in your database');
    quotesContent = `
      <li>
      <section class="others">
          <h4>No quotes yet</h4>
          <p>But you can send me a message and tell me what you think about my photos...</p>
        </section>
      </li>
      `;
      $('.quotes ul').prepend(quotesContent);
  }
}

 /* @description Add a promise to fetch my quotes.
 Or put an error message
 * @param {string} callback
 */
const verifFetch = new Promise((resolve, reject) =>{
 const quotesList = $('.quotes li');
 
  if( quotesList) {
    resolve('Quotes section is filled');
  } else {
    reject('Quotes section is not filled, please check again your function fetchQuotes dude');
  }
})

 /* @description Call the promise*/
verifFetch.then(()=>{
const quotesUrl = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/quotes.json";
fetch(quotesUrl)
.then((response)=>response.json())
.then(fetchQuotes)
}).catch((error)=>{
  console.warn('Quotes section is not filled, please check again your function fetchQuotes dude: ', error);
})