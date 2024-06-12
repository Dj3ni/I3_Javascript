// Vérifier le Stock
// La combinaison doit être correcte
// Si plus de stock indisquer sold out


let display = document.getElementById("prompt")
console.log(display.innerText);

// Aller chercher boissons

const coca = document.querySelector("#boissons tbody tr:nth-child(2) td").innerText

const cocaLight = document.querySelector("#boissons tbody tr:nth-child(2) td:nth-child(2)").innerText

const cocaZero = document.querySelector("#boissons tbody tr:nth-child(2) td:nth-child(3)").innerText

const fanta = document.querySelector("#boissons tbody tr:nth-child(4) td").innerText

const sprite = document.querySelector("#boissons tbody tr:nth-child(4) td:nth-child(2)").innerText

const iceTea = document.querySelector("#boissons tbody tr:nth-child(4) td:nth-child(3)").innerText

const oasis = document.querySelector("#boissons tbody tr:nth-child(6) td").innerText

const schweppes = document.querySelector("#boissons tbody tr:nth-child(6) td:nth-child(2)").innerText

const schweppesAgrum = document.querySelector("#boissons tbody tr:nth-child(6) td:nth-child(3)").innerText

// Ajout d'un évènement lors de la sélection

let input = prompt("Veuillez sélectionner votre boisson")


// Affichage dans l'avaloir

let pick = document.querySelector("#avaloir img")
console.log(pick);