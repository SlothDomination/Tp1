
import {contenuIntro} from './contenuIntro.js' // le contenu de l'intoduction */
import {Introduction} from './Introduction.js' // 
import {AnimLettre} from './AnimLettre.js' //

/* l'élement de la page qui contiendra les éléments créés dynamiquement */
let elmSection = document.querySelector('section');
let elmButton = document.querySelector("input[type='button']");
elmButton.onmousedown = function (){
	let intro = new Introduction(contenuIntro, elmSection, animationLettre);/*intro(truc, truc, suivante anim a jouer) */
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










	



