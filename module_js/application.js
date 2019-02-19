
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //

/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmSection = document.querySelector('section');
let elmButton = document.querySelector("input[type='button']");
let i = 0;


elmButton.onmousedown = function (){	
	if(i == 0){
		console.log(i);
		i++;
		let intro = new Introduction(contenuIntro, elmSection, animationLettre);//intro(truc, truc, suivante anim a jouer)
	}

	let elmDiv = document.querySelector("div.introduction");

	if(elmDiv.style.display == "none" || elmDiv.style.display == ""){
		elmDiv.style.display = "block";
	}else{
		elmDiv.style.display = "none";
	}

}

// debutQuestionnaire()

function animationLettre()
{
    /* Une fois que l'animation des mots est terminé la fonction animLettre s'exécutera */ 
	console.log('debut animation lettre');
	const lesLettres = 'Veille-technologique';
 	let  monAnimLettre = new AnimLettre(lesLettres, elmSection, finAnim);/*(truc, conteneur parent, fonction)*/
}


function finAnim()
{
	console.log('animation terminée');
}










	



