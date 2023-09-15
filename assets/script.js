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

	//Créer un index

	let index = 0;

	let dot = document.querySelectorAll('.dot')

	//Écouter un "événement au clique" sur les "flèches droite et gauche"

	arrowRight.addEventListener('click', () =>{
		dot[index].classList.remove("dot_selected");
		if (index < 4) {
			index++;
		}
		changeDotActive();
		console.log(changeDotActive)
	})

	arrowLeft.addEventListener('click', () =>{
		dot[index].classList.remove("dot_selected");
		if (index >= 0) {
			index--;
		}
		changeDotActive();
		console.log(changeDotActive)
	})

	//Quand on change de slide, on change de dot
	function changeDotActive (){
		dot[index].classList.add("dot_selected")
	}











	// //Fonction pour changer d'image
	// FONCTION "changer image clique droit" ()
	// 	Parcourir le tableau où sont rangé les images et textes

	// 	for (let i = 0; i < slides.length; i++)

	// 	Si on change de slide avec un clique droit
	// 		Passer à une autre boucle du tableau 
	// 	Sinon 
	// 		Revenir à la boucle arrière
	// 	FIN Si
	// FIN FONCTION

	// //Fonction pour changer d'image
	// FONCTION "changer image clique gauche"
	// 	Parcourir le tableau où sont rangé les images et textes	

	// 	for (let i = 0; i < slides.length; i++)

	// 	Si on change de slide avec un clique gauche
	// 		Passer à une boucle arrière du tableau
	// 	Sinon 
	// 		Revenir à la boucle avant 
	// 	FIN SI 
	// FIN FONCTION

	// //

