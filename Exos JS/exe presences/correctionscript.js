// 1. chercher l'Element avec lequel on veut travailler, via son ID
// const boutonPresence = document.getElementById("boutonPresence");
// const boutonAbsence = document.getElementById("boutonAbsence");
// const statut = document.getElementById("statut")

// 1.b via son "emplacement" de balise

const boutonPresence = document.querySelectorAll("tbody tr")[0].children[3];
console.log(boutonPresence);
const boutonAbsence = document.querySelectorAll("tbody tr")[0].children[4];
const statut = document.querySelectorAll("tbody tr")[0].children[2];

// 2. Evènement sur le bouton présence
boutonPresence.addEventListener("click", MettrePresent) //pas de parenthèses après car on fait référence à la fonction, on n'y fait pas appel!
boutonAbsence.addEventListener("click", MettreAbsent)

function MettrePresent(){
    statut.textContent = "Présente";
    boutonPresence.textContent = "";
    boutonAbsence.textContent = "❌"; //on doit le remettre sinon le bouton va disparaître et on ne saura plus rien faire une fois cliqué
}

function MettreAbsent(){
    statut.textContent = "Absente";
    boutonAbsence.textContent = "";
    boutonPresence.textContent = "✅";
}

// Exécuter cette logique pour l'ensemble du tableau.
