/*ALL THE METHODS FOR HOME PAGE*/

// data where I will fetch the images from images.json
const imagesUrl = "https://raw.githubusercontent.com/musicbymarina/test/master/javascript/images.json";

// define some DOM elements for using
const slider = $('#slider');
const thumbnail = $('#thumbnail');

/**
 * @description Helps to sort my array of objects by the name of the artists
 * @param {string} artist1, artist2
 */
const byName = (artist1, artist2) =>{
  if(artist1.name < artist2.name) return -1;
  if(artist1.name > artist2.name) return 1;
  return 0;
}

/**
 * @description Helps to display the figures of my slider if it's:
 * - a laptop (for portfolio)
 * - a mobile/tablet (for homepage AND portfolio)
 * @param {string} mobileSize
 */
const widthChange = (mobileSize) => {
  
  const cssFigureOrdi = {
        'box-shadow': '0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15), 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15)',
        'padding': '20px', 
        'background-color': 'white', 
        'box-sizing':'border-box',
        'width': '50%',
        'margin': '0 auto'
      }
      
  const cssFigureMobile = {
        'box-shadow': '0 1px 1px rgba(0,0,0,0.15), 0 10px 0 -5px #eee, 0 10px 1px -4px rgba(0,0,0,0.15), 0 20px 0 -10px #eee, 0 20px 1px -9px rgba(0, 0, 0, 0.15)',
        'padding': '20px', 
        'background-color': 'white', 
        'box-sizing':'border-box',
        'width': '90%',
        'margin': '0 auto'
      }

  mobileSize.matches ? $('.active figure').css(cssFigureMobile) : $('.active figure').css(cssFigureOrdi);
  }



/**
 * @description Helps to display my pictures in the laptop, as I won't use a slider 
 * but a changing background image with some of my favorite black and white pictures
**/
const displayLaptop = () => {
  
  const adRock = {
    name: 'rock',
    text: 'Check the pictures of Rock bands',
    link: "./html/rock.html"
  }
  
  const adElectro = {
    name: 'electro',
    text: 'Check the pictures of djs',
    link: "./html/electronic.html"
  }
  
  const favoritePics = [
  {
    type: 'electro',
    nom: 'Daniel Avery',
    delay: '0s',
    photosPath:
    [
      {
        jpg: ["./images/electronic/andrew_weatherall-daniel_avery-musicbymarina.jpg"],
        webp: ["./images/electronic/andrew_weatherall-daniel_avery-musicbymarina.webp"]
      }
    ]
  },
  {
    type: 'electro',
    nom: 'Maceo Plex',
    delay: '6s',
    photosPath:
    [
      {
      jpg: ["./images/electronic/maceo_plex-musicbymarina.jpg"],
      webp: ["./images/electronic/maceo_plex-musicbymarina.webp"]
      }
    ]
  },
  {
    type: 'electro',
    nom: 'TEED',
    delay: '12s',
    photosPath:
    [
      {
      jpg: ["./images/electronic/teed-musicbymarina.jpg"],
      webp: ["./images/electronic/teed-musicbymarina.webp"]
      }
    ]
  },
  {
    type: 'electro',
    nom: 'Sisy Ey',
    delay: '18s',
    photosPath:
    [
      {
        jpg: ["./images/electronic/sisy_ey-musicbymarina2.jpg"],
        webp: ["./images/electronic/sisy_ey-musicbymarina2.webp"]
      }
    ]
  },
  {
    type: 'rock',
    nom: 'The Black Lips',
    delay: '24s',
    photosPath:
    [
      {
      jpg: ["./images/rock/the_black_lips-musicbymarina5.jpg"],
      webp: ["./images/rock/the_black_lips-musicbymarina5.webp"]
      }
    ]
  },
  {
    type: 'rock',
    nom: 'Jagwar Ma',
    delay: '30s',
    photosPath:
    [
      {
      jpg: ["./images/rock/jagwar_ma-musicbymarina2.jpg"],
      webp: ["./images/rock/jagwar_ma-musicbymarina2.webp"]
      }
    ]
  },
    {
    type: 'rock',
    nom: 'The Black Lips',
    delay: '36s',
    photosPath:
    [
      {
      jpg: ["./images/rock/the_black_lips-musicbymarina8.jpg"],
      webp: ["./images/rock/the_black_lips-musicbymarina8.webp"]
      }
    ]
  }];
  
  favoritePics.map((favorite)=>{
    const photos = favorite.photosPath;
    let content = ``;
    photos.map((photo)=>{
       const jpg = photo.jpg;
      if(!photo.webp){
        content = `<li>
    <span style='background-image: url("${jpg}"); animation-delay: ${favorite.delay}; -webkit-animation-delay: ${favorite.delay};
      -moz-animation-delay: ${favorite.delay}; -o-animation-delay: ${favorite.delay}; -ms-animation-delay: ${favorite.delay};'>${favorite.type}</span>
    <div>
    <h2 style='text-align:right; text-transform: uppercase'>
    <a href="${adRock.link}"> ${adRock.text}</a>
    </h2>
    <h2 style='text-align:right; text-transform: uppercase'>
    <a href="${adElectro.link}"> ${adElectro.text}</a>
    </h2>
    </div>
    </li>`;
    $('.pub').prepend(content);
    return content;
      } else {
        const webp = photo.webp;
        Modernizr.on('webp', (result)=>{
          if(result){
            content = `<li>
    <span style='background-image: url("${webp}"); animation-delay: ${favorite.delay}; -webkit-animation-delay: ${favorite.delay};
      -moz-animation-delay: ${favorite.delay}; -o-animation-delay: ${favorite.delay}; -ms-animation-delay: ${favorite.delay};'>${favorite.type}</span>
    <div>
    <h2 style='text-align:right; text-transform: uppercase'>
    <a href="${adRock.link}"> ${adRock.text}</a>
    </h2>
    <h2 style='text-align:right; text-transform: uppercase'>
    <a href="${adElectro.link}"> ${adElectro.text}</a>
    </h2>
    </div>
    </li>`;
    
    $('.pub').prepend(content);
    return content;
          }
        })
      } 
    })
  })
  
     $('#buttons').hide();
     $('.slider').hide();
     $('#arrows').hide();
     $('footer').hide();
     $('#thumbnail li').each(()=>{
       $(this).removeClass('hidden');
     })
     $('main').css({'height': '100vh'});
}

/**
 * @description Helps to display my pictures in the laptop, as I won't use a slider 
 * but a changing background image with some of my favorite black and white pictures
**/
const displayMobile = () =>{
      $('#buttons').show();
     $('.slider').show();
     $('#arrows').show();
     $('footer').show();
     $('.thumbnail').show();
     $('main').css({'height': 'auto'});
}

/**
 * @description Helps to show 
 * -the background images if laptop 
 * -the buttons etc in mobile/tablet
 * @param {string} laptopSize
 */
  const hidePictures = (laptopSize) => {
    laptopSize.matches ? displayLaptop() : displayMobile();
  }

// I need to watch all my functions dependending on the size of my screen
  if(matchMedia) {
    const mobileSize = window.matchMedia("(max-width: 869px)");
    mobileSize.addListener(widthChange);
    widthChange(mobileSize);
    
    const laptopSize = window.matchMedia("(min-width:870px)");
    laptopSize.addListener(hidePictures);
    hidePictures(laptopSize);

/**
 * @description Add the photos in the slider (and thumbnail for portfolio)
 * @param {string} photos
 */
  const addPhotos = (photos) =>{
    let sliderContent;  
    let thumbnailContent = ``;
    const firstWebp = photos[0].photosPath[0].webp[0];
    const firstJpg = photos[0].photosPath[0].jpg[0];
  
    photos.map(artiste=> {    
      artiste.photosPath.map((photoPath)=>{
     
        if(photoPath.webp){
        
          Modernizr.on('webp', (result)=>{
            if(result){
              photoPath.webp.map((imageWebp)=>{
              // Make appears the first webp picture of the list
                if(imageWebp === firstWebp){
                  sliderContent = 
                `<li class='active'>
                  <figure>
                    <picture>
                      <source srcset=${imageWebp} media='(min-width: 0px)' type='image/webp'>
                      <img src='${imageWebp}' alt='${artiste.name}' style='border: solid 1px #e8e6e6'>
                    </picture>
                    <figcaption>${artiste.name}</figcaption>
                  </figure>
                </li>`;
                }
                else{
                  sliderContent = 
                `<li class='hidden'>
                  <figure>
                    <picture>
                      <source srcset=${imageWebp} media='(min-width: 0px)' type='image/webp'>
                      <img src='${imageWebp}' alt='${artiste.name}' style='border: solid 1px #e8e6e6'>
                    </picture>
                    <figcaption>${artiste.name}</figcaption>
                  </figure>
                </li>`;
                }
                
                thumbnailContent = 
                `<li>
                  <figure>
                  <picture>
                    <source srcset=${imageWebp} media='(min-width: 0px)' type='image/webp'>
                    <img src='${imageWebp}' alt='${artiste.name}' style='border: solid 1px #e8e6e6'>
                  </picture>
                  <figcaption>${artiste.name}</figcaption>
                  </figure>
                </li>`;
                        
          slider.prepend(sliderContent);
          thumbnail.prepend(thumbnailContent);
            })
          } else{
          photoPath.jpg.map((imageJpg)=>{
            // Make appears the first img picture of the list
            if(imageJpg === firstJpg) {
              sliderContent = 
                `<li class='active'>
                    <figure>
                      <picture>
                        <source srcset=${imageJpg} media='(min-width: 0px)' type='image/jpeg'>
                        <img src='${imageJpg}' alt='${artiste.name}' style='border: solid 1px #e8e6e6'>
                      </picture>
                      <figcaption>${artiste.name}</figcaption>
                    </figure>
                </li>`;
            }else{
              sliderContent = 
                `<li class='hidden'>
                  <figure>
                    <picture>
                      <source srcset=${imageJpg} media='(min-width: 0px)' type='image/jpeg'>
                      <img src='${imageJpg}' alt='${artiste.name}' style='border: solid 1px #e8e6e6'>
                    </picture>
                    <figcaption>${artiste.name}</figcaption>
                  </figure>
                </li>`;
            }
            
            thumbnailContent = 
                `<li>
                  <figure>
                    <picture>
                      <source srcset=${imageJpg} media='(min-width: 0px)' type='image/jpeg'>
                      <img src='${imageJpg}' alt='${artiste.name}' style='border: solid 1px #e8e6e6'>
                    </picture>
                    <figcaption>${artiste.name}</figcaption>
                  </figure>
                </li>`;
          slider.prepend(sliderContent);
          thumbnail.prepend(thumbnailContent);
          })
        }
        })
      } 
      return slider;
    });
  });
}

/**
 * @description Display my pictures in the mobile/tablet
 *
**/
const displayElwhenFetch = () => {
  widthChange(mobileSize);
  $('#slider figcaption').show();
  $('#thumbnail figcaption').hide();
}

/**
 * @description Fetch the photos if list
 * @param {string} list
 */
const fetchPhotos = (list) =>{
  const photos = list.photos.sort(byName);
  if(photos) {
    addPhotos(photos);
  } else {
    console.warn('check si une liste apparait dans fetchPhotos');
  }
}

/* @description Add a promise to fetch all the pics in the slider and thumbnail.
 Or put an error message
 * @param {string} callback
 */
const verifFetch = new Promise((resolve, reject) =>{
  if( slider.length > 0 && slider.length === thumbnail.length) {
    resolve('Photos filled in the slider and thumbnail');
  } else {
    reject('You need to check again your fetchPhotos function');
  }
})

 /* @description Hide the current pic in slider when I will click on buttons or on a photo from thumbnail
 *
 */
const hideCurrentPicInSlider = () => {
    $('#slider').find('.active').addClass('hidden');
    $('#slider').find('.active').removeClass('active');
}

 /* @description Remove the html from slider and thumbnail to have no duplicate pics on it
 * When I click on buttons
 */
const cleanMySlider = () =>{
  slider.html('');
  thumbnail.html('');
}

/* @description Show next and previous photo when I click on next/previous buttons 
 Or put an error message
 * @param {integer} whichOne
 */
const showNextOrPreviousPicture = (whichOne) => {
  const activePhotoIndex = $('#slider').find('.active').index();
  const nextPhotoIndex = activePhotoIndex + whichOne;
  //const sliderLength = $('#thumbnail li').length;
  const sliderLength = $('#slider li').length;
  const nextPhoto = $('#slider li')[nextPhotoIndex];
  
  if(whichOne === 1 && nextPhotoIndex < sliderLength) {
    hideCurrentPicInSlider();
    $('#info').html('');
    nextPhoto.classList.add('active');
    nextPhoto.classList.remove('hidden');
    widthChange(mobileSize);

  } else if(whichOne === -1 && nextPhotoIndex >= 0) {
    hideCurrentPicInSlider();
    $('#info').html('')
    
    nextPhoto.classList.add('active');
    nextPhoto.classList.remove('hidden');
    widthChange(mobileSize);
  }
  else {
    if(whichOne === 1) {
      $('#info').html('This was the first photo of my slider');     
    } else if(whichOne === -1) {
      $('#info').html('This was the last photo of my slider');
    }
  }
}

/* @description Open a modal and show a 100% width image
 * when I click on a picture
 */
  const openPhoto = () => {
    $('.pub').remove();
    $('.modal-content').html('');
    $('html').addClass('force');

    $('.modal-content').html(`<span class="close">X</span>`);
    $(event.target).clone().appendTo('.modal-content');
    $('.modal-content img').css({'width':'100%'});
    $('#myModal').show();
}

/* @description Close a modal
 * 
 */
const closeModal = () =>{
    $('#myModal').hide();
    $('html').removeClass('force');
  }
  
 /* @description Fetch only the djs data
 * 
 */ 
const showMeRock = () =>{
  cleanMySlider();
    $('#info').html('');
    fetch(imagesUrl).then(response=>response.json()).then((data)=>{
      const photos = data.photos.sort(byName);
      const rockList = photos.filter((photo) => photo.type === 'rock');
      addPhotos(rockList);
  })
  .then(displayElwhenFetch)
}

 /* @description Fetch only the rock bands data
 * 
 */ 
const showMeElectro = () =>{
  cleanMySlider();
    $('#info').html('');
    fetch(imagesUrl).then(response=>response.json()).then((data)=>{
      const photos = data.photos.sort(byName);
      const electroList = photos.filter((photo) => photo.type === 'electro');
      addPhotos(electroList);
  })
  .then(displayElwhenFetch)
}

 /* @description Fetch all the data
 * 
 */ 
const showMeAll = () =>{
  cleanMySlider();
    $('#info').html('');
    fetch(imagesUrl).then(response=>response.json()).then((data)=>{
      const photos = data.photos.sort(byName);
      addPhotos(photos);
  })
  .then(displayElwhenFetch)
}

 /* @description Event define all the click events of Homepage except the menu
 * 
 */ 
$(this).on('click', (event)=>{
  const target = $(event.target);
  if(target.is('.active img')){
    openPhoto();
    
  } else if(target.is('.close')){
    closeModal();
    
  } else if(target.is('#electro')){
    showMeElectro();

  } else if(target.is('#rock')){
    showMeRock();

  } else if(target.is('#all')){
    showMeAll();
    
  } else if(target.is('.next span')){
      $('.next span').animate({'color':'#eee'}, 'slow');
      showNextOrPreviousPicture(-1);
      
  } else if(target.is('.previous span')){
      $('.previous span').animate({'color':'#eee'}, 'slow');
      showNextOrPreviousPicture(+1);
  }
  else {
    return;
  }
});

/* @description Fetch the images and display the elements
*
*/
const imagesParade = () => {
  verifFetch
  .then(()=>{
    fetch(imagesUrl)
    .then((response)=>response.json())
    .then(fetchPhotos)
  })
  .then(displayElwhenFetch)
  .catch((error)=>{
  console.warn('Check your error in fetchPhotos function: ', error);
})
}


if(matchMedia) {
  const mobileSize = window.matchMedia("(max-width: 869px)");
  mobileSize.addListener(imagesParade);
  imagesParade(mobileSize);
}

const showCarousel = (mobileSize) => {
  mobileSize.matches ?  imagesParade() : console.log("it's a computer") ;
}

/* @description Wait the DOM is loaded to display elements after the fetch and increase the photos
*
*/
$(function() {
  displayElwhenFetch();
  });



 } // I stop watching the elements - line 234