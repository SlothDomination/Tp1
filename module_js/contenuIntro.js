/* Contenu intro est un objet litéral qui contiendra 
    les éléments d'introduction
*/
let idImage = document.querySelector('section').id;
let Auteurs = ["CRISALYS", "Inconnu", "Ilya Kuvshinov", "meyoco", "tofuvi", "Inconnu"];


export const contenuIntro = {
	description : "Auteur: " + Auteurs[idImage]

}