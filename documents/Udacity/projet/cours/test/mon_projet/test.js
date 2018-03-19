document.addEventListener('mouseup', event =>{
	const sauvegardes = [];
if(window.getSelection) {
	const fromWindow = window.getSelection().toString();
	console.log('From window:' + fromWindow);
	sauvegardes.push(fromWindow);
}

const copie = document.getElementById("sauvegarde");
sauvegardes.map(sauvegarde => {
	const paragraphes = document.createElement("p");
	paragraphes.textContent = sauvegarde;
	paragraphes.style.color = "red";
	paragraphes.style.backgroundColor = "yellow";
	copie.append(paragraphes);
});
});

