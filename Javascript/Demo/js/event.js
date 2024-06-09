// 1. Création des constantes pour récupérer les éléments des inputs

const inputNom = document.querySelector("#inputName");
const inputPrenom = document.getElementById("inputPrenom");
const inputAge = document.getElementById("inputAge");
const bouton = document.querySelector("button")

// 2. Création 

bouton.addEventListener("click", function(){
    const nomComplet = inputNom.value +" "+ inputPrenom.value; // on récupère les valeurs des éléments
    const age = inputAge.valueAsNumber; // On la récupère comme nombre afin de faire une opération arithmétique
    const ageDansCinqAns = age + 5 ;
    alert("Bonjour " + nomComplet+ " vous avez "+ age + " ans et dans 5 ans vous aurez "+ ageDansCinqAns + " ans")
});