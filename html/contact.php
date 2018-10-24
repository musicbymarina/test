<?php 

$response = '';
if(isset($_POST['name']) && isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['message'])){
	$name = htmlspecialchars($_POST['name']);
$fname = htmlspecialchars($_POST['fname']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$response = 'Hello ' . $name . ' :) .I will check and answer your message as soon as possible.</p><p>Your message:<br/>'. $message;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html" charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="application-name" content="Music by Marina, artist photographer">
	<meta name="description" content="Music by Marina, artist photographer">
	<title>Music by Marina, photographer</title>
	
	<!-- Favicon and compatibility for IE-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
  	<link rel="icon" type="image/png" href="../images/favicon.png" sizes="192x192">
  	<link rel="icon" type="image/png" href="../images/favicon.png" sizes="512x512">

	<!-- Manifest and its theme color to add the app in the homescren -->
	<link rel="manifest" href="../manifest.json">
	<meta name="theme-color" content="#000000">

	 <!-- Stylesheets for desktop, mobiles and tablets-->
	 <!--TODO: add 3 differents stylesheet for responsive-->
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" type="text/css" href="../css/contact.css">
	<link rel="stylesheet" type="text/css" href="../css/flaticon.css">
	<link rel="stylesheet" type="text/css" href="../css/imagesHome.css">
  	<link href="https://fonts.googleapis.com/css?family=Indie+Flower|Roboto|Notable" rel="stylesheet">



</head>
<body>
	<div data-role="page">
	<section id="myModal">
		<div class="modal-content">

		</div>
	</section>
<header data-role="header">
	<section id="logo">
		<a href="../index.html" title="Home">
		<h1>
		<span>M</span>
		<span>U</span>
		<span>S</span>
		<span>I</span>
		<span>C</span>
	</h1>
	<h1>
		<span>B</span>
		<span>Y</span>
	</h1>
	<h1>
		<span>M</span>
		<span>A</span>
		<span>R</span>
		<span>I</span>
		<span>N</span>
		<span>A</span>
	</h1>
	</a>
	</section>
		<nav>
	<ul class="parent-menu">

		<li id="about"><a href="about.html">About Marina</a></li>
		<li id="portfolio"><a href="#" id="portfolio-a">Portfolio</a>
			<ul class="child-menu" id="portfolio-child">
				<li><a href="electronic.html">Electronic music</a></li>
				<li><a href="rock.html">Rock/Pop</a></li>
			</ul>
		</li>
		<li id="works"><a href="#" id="work-a">Other works</a>
		<ul class="child-menu" id="works-child">
			<li><a href="press.html">Publications</a></li>
			<li><a href="cover.html">Art cover</a></li>
		</ul>
		</li>
		<li id="contact-me"><a href="contact.html" id="contact">Contact</a></li>
	</ul>
</nav>
	<h3>Menu</h3>
	<section id="burger">
		<div></div>
		<div></div>
		<div></div>
	</section>
</header>
<main data-role="main" class="ui-content">
	<h2 id="titre">Photographer</h2>
	<section class="contact">
		<h3 class="accordion">Before contacting Marina</h3>
		<article>
			<figure>
				<img src="../images/about/musicbymarina-portrait.jpg" alt="A portrait of Marina">
				<figcaption> Me :) </figcaption>
			</figure>
			<p>I live in Paris, France. But I can move abroad too.</p>
			<p>You can contact me if you:</p>
			<ul>
				<li>want to buy a photo</li>
				<li>want to make an exhibition</li>
				<li>want to support me</li>
				<li>want to use my photo</li>
				<li>want an interview</li>
				<li>have a project for me</li>
				<li>like or hate my (home made) website </li>
			</ul>
			<p>If you want a picture of you:</p>
			<ol>
				<li>I need to like your music</li>
				<li>If you're a dj but not a producer, I'm not interested</li>
				<li>You have to be cool and kind with me</li>
				<li>You have to pay before the session</li>
			</ol>
		</article>
		<h3 class="accordion">Contact Marina</h3>
		<article class="way">
			<p id='downloadVCF'><a title="Send an email"><i class="flaticon-mail" aria-label='Send an email'> Send an email </i></a></p>
			<p>
			<form method="POST" action="<?php $_SERVER['PHP_SELF'] ?>">
				<label for="name">Surname:
					<input type="text" name="name" autocomplete="given-name" required>
				</label>
				<label for="fname">Name:
					<input type="text" name="fname" autocomplete="family-name" required>
				</label>
				<label for="email">Email:
					<input type="email" name="email" autocomplete="email" required>
				</label>
				<label for="message">Message:
					<textarea name="message">
						
					</textarea>
				</label>
				<input type="submit" name="submit" value="Send the message">
			</form>	
			</p>
			<article id='response' style="display: block;"><p><?php echo $response; ?></p></article>
		</article>
	</section>
</main>
<footer data-role="footer">
  <p>Copyright 2018. </p>
  <p>By Marina Sellimoutou. All Rights Reserved.</p>
  <p>All content and graphics on this web site are the property of Marina Sellimoutou.</p>
 <ul>
  		<li><a href="https://www.instagram.com/musicbymarina/" target='_blank' title="Follow Marina on Instagram"><i class="flaticon-instagram"></i></a></li>
  	<li><a href="https://www.facebook.com/musicbymarina/" target='_blank' title="Follow Marina on Facebook"><i class="flaticon-facebook"></i></a></li>

  </ul>
</footer>
</div>
  	<!--Scripts for Jquery et Jquery mobile-->
	<script src="../javascript/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="../javascript/menu.js"></script>
<script type="text/javascript" src="../javascript/contact.js"></script>
<!--SCRIPT POUR JASMINE TDD-->

</body>
</html>