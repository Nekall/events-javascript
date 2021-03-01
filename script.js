/* Fonctionnalité 1 :
On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇
Fonctionnalité 1-bis :
Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.*/


// let footer = document.getElementsByTagName("footer")[0];
// footer.id = "myfooter";
//
// document.getElementById("myfooter").addEventListener("click", function() {
//   console.log("clique");
// });

let number = 0
let footer = document.getElementsByTagName("footer")[0];
footer.id = "myfooter";

document.getElementById("myfooter").addEventListener("click", function() {
  console.log(`clic numéro : ${number += 1}`);
});

//===========================================================================================================================================================================================================================================================
/* Fonctionnalité 2 :
On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.
Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader */
let hamburger = document.getElementsByTagName("button")[0];
let condition = false;

hamburger.addEventListener("click", function() {
  let navbar = document.getElementById("navbarHeader");

  if(condition == false) {
    navbar.classList.remove("collapse");
    condition = true;
  }
  else if(condition == true) {
    navbar.classList.add("collapse");
    condition = false;
  }
});
//===========================================================================================================================================================================================================================================================
/* Fonctionnalité 3 :
À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer ! */
let edit = document.getElementsByTagName("button")[2];

edit.addEventListener("click", function() {
  let card1 = document.getElementsByClassName("card")[0];
  if(condition == false) {
    card1.style.color = "red";
  }

});
//===========================================================================================================================================================================================================================================================
/* Fonctionnalité 4 :
On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe. */

let edit3 = document.getElementsByTagName("button")[4];

edit3.addEventListener("click", function() {
  let card2 = document.getElementsByClassName("card")[1];
  if(condition == false) {
    card2.style.color = "green";
    condition = true;
  }
  else if(condition == true) {
    card2.style.color = null;
    condition = false;
  }
});

//===========================================================================================================================================================================================================================================================
/* Fonctionnalité 5 :
Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale). */
  let navbar = document.getElementsByClassName("navbar")[0];

navbar.addEventListener("dblclick", function() {
  let bootstrap = document.querySelectorAll("link")[0];

  if(condition == false) {
    bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    condition = true;
  }
  else if(condition == true) {
    bootstrap.href = null;
    condition = false;
  }
});

//dblclick = double clique
//=========================================================================Events==================================================================================================================================================================================
/* Fonctionnalité 6 :
T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.
La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale ! */


let cardBtn = document.getElementsByTagName("button");
for (let i=1; i<cardBtn.length; i+=2) {
  cardBtn[i].addEventListener("mousemove", function () {
    let card = this.parentNode.parentNode.parentNode.parentNode

    let cardBtn = card.getElementsByTagName("button")[2];
    let cardImg = card.getElementsByTagName("img")[0];
    let cardText = card.getElementsByClassName("card-text")[0];

    if (condition == false) {
      cardText.style.display = 'none';
      cardImg.style.width = '20%' ;
      condition = true;
    } else if (condition == true) {
      cardText.style.display = 'block';
      cardImg.style.width = '100%' ;
      condition = false;
    }
  });
}
