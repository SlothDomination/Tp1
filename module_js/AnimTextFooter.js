import {
    Util
} from './Util.js'

//console.log("anim");

export class AnimTextFooter {
   /* // Wrap every letter in a span
    $('.ml7 .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({loop: true})
        .add({
        targets: '.ml7 .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: function(el, i) {
            return 50 * i;
        }
        }).add({
        targets: '.ml7',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
        });*/

    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {object} leFooter - contient l'ensemble des mots d'intro (&copy; 2019 - SlothDomination)
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
    }}
    */

    constructor(leFooter, elementParent, fonction) {
        //Récupérer les valeurs passées en paramètre			
        this.leFooter = leFooter;
        console.log("footer =" + leFooter);
        this.elmParent = elementParent;
        this.Anim_TextFooter(this.leFooter);//permet de lancer l'animation qui anime le footer
        this.fonction = fonction;
    }

    Anim_TextFooter(leFooter) {
        /* Création des élément DOM qui seront animés. 
        Les éléments seront intégré dans le conteneur elmParent
        */
        let elmConteneur = this.creerElement(this.elmParent,
            'span'/*balise*/,
            '',/*contenu*/
            'footer'/*classe*/);
            let i = 0;
            let nbLettres = leFooter.length;

            //console.log("yay");

            //boucle for
            for (let uneLettre of leFooter){	
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