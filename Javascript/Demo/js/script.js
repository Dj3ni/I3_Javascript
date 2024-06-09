// Ceci va afficher un pop-up avec le message mis en paramètre
// alert("Hello, world!");

// console.log(): afficher un message dans l'inspecteur

// Affectation
let nombre = 52;

// Vérification entre les valeurs

console.log(nombre == "52"); //True
console.log(nombre == 52); // True

// Vérification entre les valeurs et les types

console.log(nombre === "52"); //False
console.log(nombre === 52); // True

// Concaténation entre str et number

console.log(26 + "26"); // Pas de conversion implicite, il va concaténer

// Constantes

console.log("Variables: ");

const PI = 3.14;

console.log(PI);

// PI =2;
// console.log(PI); //On aura un message d'erreur car impossible de modifier une constante

// Variables

let ageUtilisateur = 33;
console.log(ageUtilisateur);
ageUtilisateur += 1;
console.log(ageUtilisateur);

ageUtilisateur = "Bonjour"; //pas de message d'erreur
console.log(ageUtilisateur);

// Prompt //Demande à l'utilisateur d'entrer des infos = input : va créer un pop-up : renvoie tjs une chaîne de carctères

console.log("Prompt: ");
ageUtilisateur = prompt("Veuiller entrer votre âge");
console.log(ageUtilisateur);
console.log(typeof(ageUtilisateur));

ageUtilisateur = +ageUtilisateur; //Conversion explicite
console.log(ageUtilisateur);
console.log(typeof(ageUtilisateur));

let resultat = 3 + 3 + "3";
console.log(resultat);

