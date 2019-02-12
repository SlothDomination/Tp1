import {
    Util
} from './Util.js'


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
      
        this.elmParent = elementParent;
        this.Anim_lettres(this.lesLettres);//permet de lancer l'animation
        this.fonction = fonction;
    }


    Anim_lettres(lesLettres) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('mot');
        let elmConteneur = this.creerElement(this.elmParent,
            'section'/*balise*/,
            '',/*contenu*/
            'mot'/*classe*/);

            console.log("yay")

            //boucle for
            for (let uneLettre of lesLettres){			
                uneLettre.style.animationDelay = (i * 0.5) + "s";               
            }

        /* On garde une référence sur la fonction terminerIntro */
        let refTerminerIntro = this.terminerIntro.bind(this);
        elmBouton.addEventListener('mousedown', this.terminerIntro.bind(this));
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        console.log(balise);
        let noeud = document.createElement(balise);
        if (contenu != '') {
            noeud.innerHTML = contenu
        };
        noeud.classList.add(classCSS);
        elmParent.appendChild(noeud);
        return noeud;
    }

    terminerIntro(evt) {
        this.elmParent.firstChild.classList.add('deplacementContenuIntro');
        this.elmParent.firstChild.addEventListener('animationend', this.passerVersAnimationSuivante.bind(this));
    }

    passerVersAnimationSuivante(evt) {
        Util.detruireTousLesNoeud(this.elmParent, this.elmParent);
        this.fonction();
    }

}