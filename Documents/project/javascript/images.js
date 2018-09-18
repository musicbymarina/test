const data = [
{
		"name": "Daniel Avery",
		"type": "electro",
		"venue": "Peacock Society",
		"photosPath": [
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/12694544_1266530113380843_4985876799365095477_o.jpg?_nc_cat=0&oh=6f17468d494366a774cc6b9a22ae856b&oe=5C38C229",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/12513567_1266530373380817_5352358043785360024_o.jpg?_nc_cat=0&oh=6ba152bdd02c55c4aed6edde07a116e6&oe=5C29989F"
		]
	},
	{
		"name": "The Black Lips",
		"type": "rock",
		"venue": "La Villette",
		"photosPath": [
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/23632116_1934358369931344_7426729873053806612_o.jpg?_nc_cat=0&oh=d4a0d3b0d6f8d877ed18660d1a1a1591&oe=5C34A018",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/23509258_1934358429931338_2292833924781772992_o.jpg?_nc_cat=0&oh=8367aa7bc48d97abc450e2989704f2e7&oe=5C2DB3F5",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/23517831_1934359216597926_5576395402958645362_n.jpg?_nc_cat=0&oh=74e9c6e16408ffe3d39ddb645a86918a&oe=5C1CF98E"
		]
	},
	{
		"name": "The Jesus and Mary Chain",
		"type": "rock",
		"venue": "La Route du Rock 2017",
		"photosPath": [
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t31.0-8/21054900_1848116595222189_3410498097011115445_o.jpg?_nc_cat=0&oh=ce3ef5832bc1d6f57ccf9ed94bda2d33&oe=5C2DD375",
		"https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/20992966_1848116818555500_4471541284690943894_n.jpg?_nc_cat=0&oh=610a4ddc733871437864844cb5c131d2&oe=5C1F6471"
	]
}
];

/**
Create a new list to get only photos about djs
**/
const electroList = data.filter((photo) => {
	return photo.type === 'electro';
})

/**
Create a new list to get only photos about rock bands
**/
const rockList = data.filter((photo) => {
	return photo.type === 'rock';
})

/**
Show photos in the first section
**/
const showPhotos = (liste, title) => {
	$('#titre').html('');
	$('.slider').html('');
	return liste.map(photo => {
		photo.photosPath.map((unit) => {
			let htmlContent = `
			<figure>
			<img src='${unit}' alt='${photo.name} at ${photo.venue}'>
			<figcaption>${photo.name} at ${photo.venue}</figcaption>
			</figure>
			`;
			$('#titre').html(title);
			$('.slider').prepend(htmlContent);
			// show only the first picture of the list in this slider
			$('.slider figure:first').addClass('active');
			$('.slider figure:first ~ figure').removeClass('active');
	})
		})

}


/*
A function to show the pics of rock bands on the thumbnails and the first picture on the slider
*/
$('#rock').on('click', function() {
	showPhotos(rockList, 'Some pictures of rock and pop bands');
	showThumbnails(rockList);
})

/*
A function to show the pics of djs on the thumbnails and the first picture on the slider
*/
$('#electro').on('click', function() {
	showPhotos(electroList, 'Some pictures of electronic artists');
	showThumbnails(electroList);
})

/*
A function to show all the pics on the thumbnails and the first picture on the slider
*/
$('#all').on('click', function() {
	showPhotos(data, 'Some pictures');
	showThumbnails(data);
})

/*
A function to show the list of pics like a thumbnails, under the slider
*/
const showThumbnails = (liste) => {
	$('#slides').html('');
	return liste.map(photo => {
		photo.photosPath.map((unit) => {
			let htmlContent = `
			<li>
			<picture class='tooltip'>
			<img src='${unit}' alt='${photo.name} at ${photo.venue}'>
			<span class='tooltiptext'>'${photo.name} at ${photo.venue}'</span>
			</picture>
			</li>
			`;
			$('#slides').prepend(htmlContent);
	})
		})
	showPhotos(liste);
}

/*Show by default all the pics in a thumbnails under the slider*/
showThumbnails(data);
showPhotos(data);


/*
If I click on a thumbnail, the pic appears in the slider
*/
$('#slides img').on('click', function(event) {
	$('.slider').html('');
	
	let htmlContent = `
			<figure style='display: block' class='active'>
			<img src='${event.target.src}' alt='${event.target.alt}}'>
			<figcaption>${event.target.alt}</figcaption>
			</figure>
			`;
			$('.slider').prepend(htmlContent);
			$('.slider figure').addClass('active');
})


/*
Function to use arrows next and previous
*/
const nextItem = $('.next');
const previousItem = $('.previous');
const items = $('.slider figure');
const itemCount = items.length;
let count = 0;

const showNextItem = () => {
	console.log('test: combien de toffs en tout', itemCount);
	
	items[count].classList.remove('active');
	if(count < itemCount - 1) {
		count++;
	} else {
		count = 0;
	}
	console.log('Count:', count);
	
	items[count].classList.add('active');
	console.log('Liste des photos', items);
	}
	
const showPreviousItem = () => {
	console.log('test: combien de toffs en tout', itemCount);
	
	items[count].classList.remove('active');
	
	if(count > 0) {
		count--;
	} else {
		count = itemCount - 1;
	}
	console.log('Count:', count);
	items[count].classList.add('active');
	console.log(count);
}

$('.previous').on('click', function(){
	showPreviousItem();
});

$('.next').on('click', function() {
	showNextItem();
})

