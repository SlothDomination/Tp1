import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //

/* l'élement de la page qui contiendra les éléments créés dynamiquement */
/*let elmSection = document.querySelectorAll('section');
let elmFooter = document.querySelector('footer');
let idImage = document.querySelector('section').id;
//let elmButton = document.querySelector("input[type='button']");
let i = 0;
const lesLettres = '2019 - SlothDomination';
let  monAnimLettre = new AnimLettre(lesLettres, elmFooter);//(truc, conteneur parent, fonction)

console.log("idImage: " + idImage);
elmSection[idImage].onmousedown = function (){	
	if(i == 0){
		console.log(i);
		i++;
		console.log("idImage: " + idImage);
		let intro = new Introduction(contenuIntro, elmSection[idImage]);//intro(truc, truc, suivante anim a jouer)
		
	}

	let elmDiv = document.querySelector("div.introduction");

	if(elmDiv.style.display == "none" || elmDiv.style.display == ""){
		elmDiv.style.display = "block";
	}else{
		elmDiv.style.display = "none";
	}
}*/

/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmSection = document.querySelector('section');
let elmFooter = document.querySelector('footer');
//let elmButton = document.querySelector("input[type='button']");
let i = 0;
const lesLettres = '2019 - SlothDomination';
let  monAnimLettre = new AnimLettre(lesLettres, elmFooter);//(truc, conteneur parent, fonction)

elmSection.onmousedown = function (){	
	if(i == 0){
		console.log(i);
		i++;
		let intro = new Introduction(contenuIntro, elmSection);//intro(truc, truc, suivante anim a jouer)		
	}

	let elmDiv = document.querySelector("div.introduction");

	if(elmDiv.style.display == "none" || elmDiv.style.display == ""){
		elmDiv.style.display = "block";
	}else{
		elmDiv.style.display = "none";
	}
}


/*function finAnim()
{
	console.log('animation terminée');
}*/










	



