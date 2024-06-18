// créer uen fonction avec un nbr en paramètre et affiche son carré
// Attention le nombre doit être dans un input (html) et modifie celui-ci avec le résultat



// Si dans un formulaire, on doit d'abord empêcher le rafraichissement de la page afin de garder les données et de trvailler dessus
const form = document.getElementById('form')
form.addEventListener('submit', (event) => { event.preventDefault(); })


const BUTTON = document.getElementById("btnSquare")
let resultat = document.getElementById("resultat")
console.log(resultat);

function SquareOf(number){
    return number * number;    
}

BUTTON.addEventListener("click",function(){
    let nombre = document.getElementById("number").valueAsNumber // A n'initialiser que lorsqu'on a besoin sinon ne changera pas 
    console.log(nombre);
    resultat.value = SquareOf(nombre)
}) 

// Correction: 

// Il vaut mieux créer une fonction plutôt que d'utiliser une fonction anonyme ( si besoin de modifier ou supprimer des éléments d el'évènement)

BUTTON.addEventListener("click", calculateSquare)//Ne pas mettre les parenthèses, sinon ne s'exécute que lors du chargement de la page et pas lors du click



function calculateSquare(){
    // Récupérer la valeur dans le champ et calculer le carré
    let squareValue = SquareOf(nombre);
    console.log(squareValue);
    // Appliquer la valeur dans le résultat
    const resultInput = document.getElementById('resultat')
    resultInput.value = squareValue
} 


// Si on appuie sur "enter" il va falloir faire ceci:
const userInput = document.getElementById("number")

userInput.addEventListener("keyup", (event)=>{
    if(event.key !== "Enter") return;
    calculateSquare();
})