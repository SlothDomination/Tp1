import {
    Util
} from './Util.js'

//console.log("anim");

export class AnimLettre {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} lesLettres - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.lesLettres = lesLettres;
        console.log("lettres =" + lesLettres);
        this.elmParent = elementParent;
        this.Anim_lettres(this.lesLettres);//permet de lancer l'animation
        this.fonction = fonction;
    }
    
   

    Anim_lettres(lesLettres) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        //console.log('mot');
        let elmConteneur = this.creerElement(this.elmParent,
            'section'/*balise*/,
            '',/*contenu*/
            'mot'/*classe*/);
            let i = 0;
            let nbLettres = lesLettres.length;

            //console.log("yay");

            //boucle for
            for (let uneLettre of lesLettres){	
                let elmLettre = this.creerElement(elmConteneur, 'div', uneLettre, 'mot');//creer une balise div pour les lettres du string les ajoutant une à la fois au div et leur donnant une classe mot quand on les ajoute au div.		
                elmLettre.style.animationDelay = (i * 0.5) + "s";      
                i++;//incremente pour aller a la prochaine lettre du string         
            }
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise);
        let noeud = document.createElement(balise);
        if (contenu != '') {
            noeud.innerHTML = contenu;
        };
        if(classCSS != ''){
            noeud.classList.add(classCSS);
        }

        elmParent.appendChild(noeud);
        return noeud;
    }
}