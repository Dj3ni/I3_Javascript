//  Créer un prototype de TOdo List
// Créer un champ dans lequel l'utilisateur rentre un libellé avec bouton de validation. Quand on clique, il se crée dans la liste

// Bonus: vider le champ une fois lélément ajouté

// 1. Je vais chercher mes éléments

const INPUT = document.getElementById("input")
console.log(INPUT);
const BUTTON = document.getElementsByTagName("button")[0] // ou querySelector("button")
console.log(BUTTON);
const LIST = document.getElementsByTagName("ul")[0]
console.log(LIST);

// 2. Je crée la fonction d'ajout

function addToCart(){
    // Je crée une nouvelle ligne dans ma liste
    const LI = document.createElement("li")
    // Je l'ajoute à mon doc HTML
    LIST.append(LI)
    // J'y assigne la valeur de l'input
    LI.innerText = INPUT.value;
    INPUT.value = "";
    console.log("addToCART");
}

// 3. J'ajoute l'évènement sur Button

BUTTON.addEventListener("click",addToCart)

// Je l'adapte à la touche "enter"

INPUT.addEventListener("keyup", (event) =>{
    if(event.key !== "Enter") return;
    addToCart();
})

