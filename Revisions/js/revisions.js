// 1. Get element " E":

const getByID = document.getElementById("depart");
const querySelectorAll = document.querySelectorAll("p");
const querySelector = document.querySelector("div p:last-child");


let elementById = getByID.nextElementSibling.nextElementSibling;
console.log(elementById);

let elementSelectorAll = querySelectorAll[4];
console.log(elementSelectorAll);

console.log(querySelector);

// 2. Modifier "B":

const changeB = document.querySelector("div p:nth-child(2)");
console.dir(changeB);
changeB.innerText = "Je m'appelle B";

// 3. Modifier contenu de "DIV"

// const ajoutElement = document.querySelector("div");
// ajoutElement.innerHTML = "<p>Valeur Suivante</p>";

// 4.Ajouter un élément "p"

let p = document.createElement("p");
const ajoutP = document.querySelector("div");
ajoutP.append(p);
p.innerText = "valeur suivante";

// 5.Supprimer element "D":

const valeurD = document.querySelector("div p:nth-child(4)")
valeurD.remove();

// .map (lors d'un foreach va recréer un tableau avec les valeurs trouvées)