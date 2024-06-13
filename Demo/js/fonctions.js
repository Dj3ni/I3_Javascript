// Création d'une fonction ou méthode

// Procédure ( effectue une action mais ne retourne rien)
function plusDeux(nombre) {
    nombre += 2
    console.log(nombre);
}
    // Comme elle ne retourne rien, on peut simplement l'appeler
        plusDeux(10)

// Fonction car il y a un return
function RetourPlusDeux(nombre){
    return nombre + 2
}
    // Si je ne fais rien du résultat, je le perds
        let resultat = RetourPlusDeux(10)
        console.log(resultat);

// Une méthode peut ne pas avoir de paramètre et ne rien envoyer
function DireBonjour(){
    alert("Bonjour")
}
DireBonjour()

// Passage par valeur >< passage par référence

let nombre1 = 5
plusDeux(nombre1) // 7
console.log(nombre1); //5 car la variable utilsée par la fonction est une copie de notre variable, elle ne modifie pas la valeur de l'original (pas de return!)
// Ceci est valable pour tout type simple (number, string, bool,...)
nombre1 = RetourPlusDeux(nombre1) // 7 car on a changé le résultat avec le return. Valable pour tout type complexe


// Type complexe
function ModifierJour(MOTS){
    MOTS[3] = "jeudi"
    console.log(MOTS);
}
const MOTS = ["Bonjour","nous","sommes","mercredi"]
console.log(MOTS);
ModifierJour(MOTS) // paramètre passé par référence
console.log(MOTS);

// Valeurs par défaut des paramètres

function PlusTrois(nombre = 3){
    nombre += 3
    return nombre
}

resultat = PlusTrois()
console.log(resultat);

// Fonctions anonymes (sans nom, dans une autre fonction) 
// Elle peut être enregistrée dans une variable et/ou un tableau
// Elle doit être utilisée dans une fonction comme callback

let x = function (param1,param2) {
    return param1 + param2
}
console.log(x(5,10));

let y = (param1,param2,param3)=>console.log(`Bonjour je suis ${param1} ${param2}et j'ai ${param3} ans`);

let addition = (nombre1,nombre2) =>nombre1 + nombre2

resultat = addition(4,3)
console.log(resultat);

