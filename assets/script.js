	//Récupérer les images de la page dans un tableau
	const slides = [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]

	//Ajouter les flèches pour faire bouger le carrousel

	const arrowRight = document.querySelector('.arrow_right')
	const arrowLeft = document.querySelector('.arrow_left')

	//Appeler les éléments à bouger image/texte/dot
	//Créer un index

	let dot = document.querySelectorAll('.dot')

	let bannerImg = document.querySelector('.banner-img')
	let bannerTagline = document.querySelector('p')

	let index = 0;

	changeDotActive();

	//Écouter un "événement au clique" sur les "flèches droite et gauche"
	//Changement de dot, ajout dot active
	//Changement image/texte
	arrowRight.addEventListener('click', () =>{
		dot[index].classList.remove("dot_selected");

		index = (index + 1 + dot.length) % dot.length;
		
		changeDotActive();
		changeImage();
	})

	arrowLeft.addEventListener('click', () =>{
		dot[index].classList.remove("dot_selected");

		index = (index - 1 + dot.length) % dot.length;
		
		changeDotActive();
		changeImage();
	})

	//Fonction rajout de la dot active
	function changeDotActive (){
		dot[index].classList.add("dot_selected")
	}

	//Fonction changer d'image
	function changeImage (){
		bannerImg.src = './assets/images/slideshow/' + slides[index].image
		bannerTagline.innerHTML = slides[index].tagLine;
	}