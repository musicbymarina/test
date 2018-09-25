/*COLORS:
- dark : black (background body + menu hover)
- grey: #57595B (color for buttons)
- light : white (hover menu background + color)
*/

* {
	font-family: Roboto, sans-serif;
	color: white;
}

body {
	background-color: black;
	color: white;
}

/*MENU*/

header {
	display: flex;
	flex-direction:row;
	width: 100%;
	margin: 0 auto;
}

header h3{
	text-transform: uppercase;
	display: none;
}

#logo{
	width: 20%;
	display: flex;
	flex-direction: column;
	margin: 0 1em;
}

#logo h1{
	font-family: 'Notable', sans-serif;
	color: white;
	text-align: center;
}

#burger{
	width: 40%;
	display: none;
	flex-direction: column;
	margin: 1em 0;
	align-content: flex-start;
	justify-content: flex-start;
}

#burger > div {
	width: 50%;
	height: 10px;
	margin: 5px 10%;
	background-color: #E2DCD9;
	
}

h1, h2 {
	text-align: left;
}

h1, li {
	text-transform: uppercase;
}

#titre{
	display: inline-block;
	width: 100%;
	margin: 1em auto;
}

header nav{
	display: block;
	width: 70%;
}

ul.parent-menu, ul.child-menu, ul#insert {
	list-style-type: none;
	font-size: 1em;
	padding: 0;
}

ul.parent-menu {
	padding: 1em;
	display: flex;
	flex-direction: row;
}

ul.parent-menu > li, ul.child-menu > li {
	background-color: black;
	border-bottom: solid 4px white;
	text-align: center;
}

ul.parent-menu > li {
	display: inline-block;
	position: relative;
	width: 18%;
	padding: 0 1em 1em 1em;
	margin-left: 1em;
}

ul.parent-menu > li a, 
ul.child-menu > li a {
	color: white;
	text-decoration: none;
	display: block;
	padding: 1em;
	height: 1em;
}

ul.child-menu {
	display: none;
	position: absolute;
	margin: -4px;
	top: 3em;
	width: 100%;
}

ul.child-menu > li {
	width: inherit;
	margin-top: 30px;
	padding-bottom: 1em;
}


ul.parent-menu > li:hover,
ul.child-menu > li:hover {
	background-color: white;
	border-radius: 50px 20px;
	border-left-color: grey;
}

.parent-menu > li a:hover,
.child-menu > li a:hover{
	color: black;
	font-weight: bold;
}


/*EXTRAIT IMAGES*/

main {
	width: 100%;
	padding: 0 2em;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}

main h2{
	width: 100%;
	text-align: left;
	margin: 1em auto;
}

section {
	border: #E2DCD9;
	width: 100%;
}


#buttons {
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 1em auto;
}

button {
	color: #57595B;
	background-color: white;
	text-transform: uppercase;
	border: 5px solid black;
	border-radius: 50px;
	margin: 0 auto;
	width: 30%;
	height: 60px;
	font-weight: bolder;
	font-size: 1em;
	width: 30%;
	-webkit-box-shadow: -7px 7px 19px 7px rgba(0,0,0,0.75);
	-moz-box-shadow: -7px 7px 19px 7px rgba(0,0,0,0.75);
	box-shadow: -7px 7px 19px 7px rgba(0,0,0,0.75);
}

button:focus{
	outline: 0;
}

button:active{
	background-color: #57595B;
	color: white;
	-webkit-box-shadow: inset -7px 7px 19px 7px rgba(0,0,0,0.75);
	-moz-box-shadow: inset -7px 7px 19px 7px rgba(0,0,0,0.75);
	box-shadow: inset -7px 7px 19px 7px rgba(0,0,0,0.75);
	transform: translateY(4px);
}


.slider {
	display: flex;
	margin: auto;
	padding: 0;
	width: 100%;
}

#slider > figure {
	flex-wrap: wrap;
	width: 100%;
	display: none;
	background-color: white;
	box-shadow: 
	/*Ombre de la 1ere couche:*/
	0 1px 1px rgba(0,0,0,0.15),
	/*2eme couche:*/
	0 10px 0 -5px #eee,
	/*Ombre de la 2eme couche:*/
	0 10px 1px -4px rgba(0,0,0,0.15),
	/*3eme couche:*/
	0 20px 0 -10px #eee,
	/*Ombre de la 3eme couche:*/
	0 20px 1px -9px rgba(0, 0, 0, 0.15);
	padding: 20px;
}

.hidden {
	flex-wrap: wrap;
	margin: auto;
	display: none;
	height: 0;
	opacity: 0;
	overflow: hidden;
	transition: height 350ms ease-in-out, opacity 750ms ease-in-out;
}

#slider img {
	max-width: 100%;
	border: solid 1px #e8e6e6;
}

#slider figure.active {
	display: flex;
	height: auto;
	margin: auto;
	opacity: 1;
	border: solid 1px #eee;
	background-color: white;
	box-shadow: 
	/*Ombre de la 1ere couche:*/
	0 1px 1px rgba(0,0,0,0.15),
	/*2eme couche:*/
	0 10px 0 -5px #eee,
	/*Ombre de la 2eme couche:*/
	0 10px 1px -4px rgba(0,0,0,0.15),
	/*3eme couche:*/
	0 20px 0 -10px #eee,
	/*Ombre de la 3eme couche:*/
	0 20px 1px -9px rgba(0, 0, 0, 0.15);
	padding: 20px;
}


figcaption {
	color: black;
	font-family: 'Indie Flower', cursive;
	text-align: center;
	text-transform: capitalize;
	font-size: 1.2em;
	margin-top: 1em;
}

.slider ul {
	margin: auto;
	width: 100%;
}

/*BOUTONS PREVIOUS ET NEXT*/

.slider-nav {
	margin: 1em auto;
}

.slider-nav ul {
	font-size: xx-large;
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	-webkit-box-pack: center;
	justify-content: center;
}

.slider-nav li {
	font-size: xx-large;
	-webkit-box-flex: 2;
	flex: 2;
	text-align: center;
	display: -webkit-box;
	display: flex;
}

.slider-nav .arrow {
	flex: 0 0 15%;
	font-size: xx-large;
}

.slider-nav a {
	font-size: xx-large;
	flex-basis: 100%;
	display: -webkit-box;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
}

.slider-nav span {
	font-size: 1.5em;
	display: block;
	width: 100%;
	color: white;
}

/*
THUMBNAIL
*/

.thumbnail {
	width: 100%;
}

#thumbnail {
	margin: auto;
	height: auto;
	display: flex;
	flex-direction: row;
	  align-items: center;
  justify-content: center;
}

#thumbnail > li {
	flex-wrap: wrap;
	list-style-type: none;
	margin: 5px;
}

#thumbnail figure {
	margin: auto;
}

#thumbnail li img {
	max-width: 100%;
	width: auto;
	max-height: 100%;
	height: auto;
	margin: auto;
}

/*MODAL*/
#mymodal{
		display: none;
		position: fixed;
		z-index: 1;
		padding-top: 5px;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: black;
		background-color: rgba(0, 0, 0, 0.5);
	}

	.modal-content{
		background-color: black;
		margin: auto;
		padding: 10px;
		border: 1px solid white;
		width: 95%;
	}
	
	.close{
		color: white;
		font-weight: bolder;
		font-size: 1.5em;
		float: right;
	}
	
	.close:hover,
	.close:focus{
		color: black;
		text-decoration: none;
		cursor: pointer;
	}

@media screen and (max-width: 500px) {
	#logo{
		width: 3%;
	}
	
	#burger{
		display: block;
	}
	
	header nav{
		visibility: hidden;
		display: block;
		width: 80%;
	}
	
	ul.parent-menu{
		display: flex;
		flex-direction: column;
		padding: 1em;
		width: 80%;
		box-sizing: content-box;
	}
	
	ul.parent-menu > li{
		display: flex;
		flex-direction: column;
		width: 70%;
		padding: 0 1em 1em 1em;
		margin-left: 1em;
	}
	
	.child-menu{
		flex-direction: column;
		display: flex;
	}
	
	main{
		margin: 1em auto;
	}
	
	#buttons{
		flex-direction: column;
		width: 90%;
		margin: 0 auto;
	}
	
	button{
		width: 100%;
		margin: 0 auto;
		padding: 0;
	}
	
	.active{
		width: 90%;
		padding: 0;
		margin: 0;
	}
	
	.active figure{
		width: 100%;
		margin: 1em 0;
	}
	
	#thumbnail{
		display: none;
	}
	
	.force{
		transform: rotate(-90deg);
		transform-origin: left top;
		width: 100vh;
		height: 100vw;
		overflow-x: hidden;
		position: absolute;
		top: 100%;
		left: 0;
	}
	
}
