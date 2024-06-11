// Vérifier le Stock
// La combinaison doit être correcte
// Si plus de stock indisquer sold out

// Boisson odds

let display = document.getElementById("prompt")
console.dir(display);
console.log(display.outerText);

const notePad = document.querySelectorAll(" #notepad td:not(#prompt) ")
// console.log(notePad);

// console.log(outerText);
// // Ajout évènement Notepad

// notePad.addEventListener('click', function(){
//     display.outerText = notePad

// })

// input = notePad.parseInt(outerText)

input = 2

const coca = document.querySelector("#boissons tbody tr:nth-child(2) td").outerText
console.log(coca);

const sprite = document.querySelector("#boissons tbody tr:nth-child(2) td:nth-child(2)").outerText
console.log((sprite));

const fanta = document.querySelector("#boissons tbody tr:nth-child(4) td").outerText
console.log(fanta);

const schweppes = document.querySelector("#boissons tbody tr:nth-child(4) td:nth-child(2)").outerText
console.log(schweppes);


let stockCoca = 5;
let stockFanta = 3;
let stockSprite = 0;
let stockSchweppes = 4;

if (!isNaN(input)){
    switch (input){
        case "1":
            if(stockCoca > 0){
                display.outerText = "Vous avez choisi le coca"
                stockCoca-- ;
            }
            else{
                display.outerText = "Plus de stock"
            }
            break

        case "2":
            if(stockSprite > 0){
                display.outerText = "Vous avez choisi le sprite"
                stockSprite-- ;
            }
            else{
                display.outerText = "Plus de stock"
            }
            break

        case "3":
            if(stockFanta > 0){                
                    display.outerText = "Vous avez choisi le Fanta"
                    stockFanta-- ;
            }
            else{
                display.outerText = "Plus de stock"
            }
            break

        case "4":
            if (stockSchweppes > 0){
                display.outerText = "Vous avez choisi le Schweppes"
            }
            else{
                display.outerText = "Plus de stock"
            }
            
            break
        default:
            display.outerText = "Veuillez entrer un nombre correct"
            break
    }
}