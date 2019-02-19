import {Util} from './Util.js'


export class Introduction {

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} o - contient l'ensemble des mots d'intro
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

     //(quand fait new introduction le constructer est appelé automatiquement)
    constructor(o, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre		
        //this.indicateur = recupere valeur	
        this.titrePrincipal = o.titrePrincipal;
        this.titreSecondaire = o.titreSecondaire;
        this.titreTernaire = o.titreTernaire;
        this.description = o.description;
        this.elmParent = elementParent;
        this.integrerIntro();//permet de lancer l'animation -> appele une fonction
        this.fonction = fonction;
    }


    integrerIntro() {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        console.log('introduction');

        let elmConteneur = this.creerElement(this.elmParent,
            'div'/*balise*/,
            '',/*contenu*/
            'introduction'/*classe*/);

        let elmDescription = this.creerElement(elmConteneur,
            'div',
            this.description,
            'rectangle');
    }

    creerElement(elmParent, balise, contenu, classCSS) {
        //(parent, titre balise, truc dedans balise, nom de la classe qui l'anim dans CSS -> classe ne peut pas être vide)
        console.log(balise);
        let noeud = document.createElement(balise);
        if (contenu != '') {
            noeud.innerHTML = contenu
        };
        noeud.classList.add(classCSS);
        elmParent.appendChild(noeud);
        return noeud;
    }
}