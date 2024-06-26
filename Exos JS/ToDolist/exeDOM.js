//  Créer un prototype de TOdo List
// Créer un champ dans lequel l'utilisateur rentre un libellé avec bouton de validation. Quand on clique, il se crée dans la liste

// Bonus: vider le champ une fois lélément ajouté

// 1. Je vais chercher mes éléments

const INPUT = document.getElementById("input")// eviter le .value car ici on travaille par référence et non avec une copie de la valeur.
console.log(INPUT);
const BUTTON = document.getElementsByTagName("button")[0] // ou querySelector("button")
console.log(BUTTON);
const LIST = document.getElementsByTagName("ul")[0] // ou querySelector("ul")
console.log(LIST);

// 2. Je crée la fonction d'ajout

// function addToCart(){    
//     // Je crée une nouvelle ligne dans ma liste
//     const LI = document.createElement("li")

//     // Je l'ajoute à mon doc HTML
//     LIST.append(LI)

//     // J'y assigne la valeur de l'input
//     LI.innerText = INPUT.value;

//     // Je vide le champ de l'input
//     INPUT.value = "";

//     // Je refais le focus sur l'input pour éviter de devoir utiliser la souris
        
// }

// 3. J'ajoute l'évènement sur Button

BUTTON.addEventListener("click", addToCart)

// Je l'adapte à la touche "enter"

INPUT.addEventListener("keyup", (event) =>{
    if(event.key !== "Enter") return;
    addToCart();
})

// amélioration du code

// function addToCart(){
//     // Je nettoie la valeur
//     let safeValue = INPUT.value.trim(); //permet de retirer les espaces blancs de la valeur (à gauche et à droite) 

//     // On vérifie qu'il y a une valeur, sinon on sort
//     if(safeValue === "") return; 

//     // Je crée une nouvelle ligne dans ma liste
//     const LI = document.createElement("li")

//     // Je l'ajoute à mon doc HTML
//     LIST.append(LI)

//     // J'y assigne la valeur de l'input
//     LI.innerText = INPUT.value;

//     // Je vide le champ de l'input
//     INPUT.value = "";    
    
//     // Je refais le focus sur l'input pour éviter de devoir utiliser la souris
//     INPUT.focus()
// }

/*Exercice 2: ajouter une check box et un bouton pour supprimer l'élémentquand on clique dessus*/

function addToCart(){
    // Je nettoie la valeur
    let safeValue = INPUT.value.trim(); //permet de retirer les espaces blancs de la valeur (à gauche et à droite) 

    // On vérifie qu'il y a une valeur, sinon on sort
    if(safeValue === "") return; 

    // Je crée une nouvelle ligne dans ma liste
    const LI = document.createElement("li")

    // J'enlève la balise de style:
    LI.style.listStyle ="none";

    // J'ajoute la checkbox
    const CHECK = document.createElement("input")
    CHECK.setAttribute("type", "checkbox")

    // J'ajoute le bouton croix et l'évènement associé
    const DELETE = document.createElement("button")
    DELETE.innerText = "❌"
        DELETE.addEventListener("click", function(){
            LIST.removeChild(LI)
        })

    // J'y assigne la valeur de l'input et la checkbox
    LI.innerText = INPUT.value;

    // Je l'ajoute à mon doc HTML
    LI.insertAdjacentElement('afterbegin', CHECK)
    LI.appendChild(DELETE)
    LIST.append(LI)    

    // Je vide le champ de l'input
    INPUT.value = "";    
    
    // Je refais le focus sur l'input pour éviter de devoir utiliser la souris
    INPUT.focus()
}



// // event =>évènement déclenché
// let EVENT = event
// // target => cible de l'évènement déclenché, ici button
// let target = event.target
// // parentNode => parent de la cible de l'évènement déclenché
// let parentNode = event.target.parentNode