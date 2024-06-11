// Déclarer la chaine

const chaine = "ma formation javascript";

// Retourner la position de "ma"

console.log(chaine.indexOf("ma")); //0

// Indiquer l'indice de la lettre p

console.log(chaine.indexOf("p")); //21

// Retrouver la lettre située à l'indice 21
console.log(chaine.charAt(21)); //"p"
// on peut faire aussi chaine[21]

// Remplacer javascript par Java et découper la chaîne

const tabchaine = chaine.split(" ");
console.log(tabchaine);
console.log(tabchaine.splice(2,1,"Java"));
console.log(tabchaine); //"Java"

// Inverser la chaîne de caractères
console.log(chaine);// pour debug
// console.log(chaine.reverse());Ne marche pas: met que ce n'est pas uen fonction

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

console.log(reverseString(chaine)); // ok

