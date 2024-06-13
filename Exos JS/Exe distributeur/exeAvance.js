// Je vais chercher le contenu du prompt
let display = document.getElementById("prompt")
console.log(display.innerText);

// Je vais chercher les valeurs du clavier
const touchPad= document.querySelectorAll("#notepad td:not(#prompt)")
console.dir(touchPad);

// J'ajoute l'évènement sur les touches

for (let index = 0; index < touchPad.length; index++) {
    touchPad[index].addEventListener("click",function(){
        display.innerText = touchPad[index].innerText
    })    
}

// Tableau des produits et stocks

let product = {
    coca : 4,
    cocaLight : 3,
    cocaZero : 2,
    fanta : 1,
    sprite : 0,
    iceTea : 1,
    oasis : 2,
    schweppes : 3,
    schweppesAgrum: 4
}

// for (let value in product){
//     console.log(`${value} => ${product[value]}`);
// }


// Sélection de la boisson

let input = display.innerText

// if(!isNaN(input)){
//     if
//     product[parseInt(input)]
// }

