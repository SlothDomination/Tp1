/* Contenu intro est un objet litéral qui contiendra 
    les éléments d'introduction
*/
/*let i = 0;
let Auteurs = ["CRISALYS", "Inconnu", "Ilya Kuvshinov", "meyoco", "tofuvi", "Inconnu"];
let idImage;
for(i= 0; i<Auteurs.length; i++){
    idImage= document.querySelectorAll('section')[i].id;
    console.log("contenuIntro: " + idImage);
}

export const contenuIntro = {    
	description : "Auteur: " + Auteurs[idImage]
}*/

let idImage= document.querySelector('section').id;
let Auteurs = ["CRISALYS", "Inconnu", "Ilya Kuvshinov", "meyoco", "tofuvi", "Inconnu"];


export const contenuIntro = {    
	description : "Auteur: " + Auteurs[idImage]
}