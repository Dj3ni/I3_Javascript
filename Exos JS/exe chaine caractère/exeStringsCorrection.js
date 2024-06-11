// Aller chercher la chaîne de caractères
const CHAINE = document.getElementById("monInput")

console.dir(CHAINE)

let chaineRecupere = CHAINE.value
console.log(chaineRecupere);

// 1. Retourner position de "ma"

console.log(chaineRecupere.indexOf("ma"));

// 2. Indiquer l'indice de la lettre "p"

console.log(chaineRecupere.search("p"));

// 3. Retrouver la lettre située à l'indice 21

console.log(chaineRecupere.charAt(21));
// on peut faire aussi chaine[21] car une chaine est un tableau de caractères

// 4. Remplacer javascript par Java
console.log(chaineRecupere = chaineRecupere.replace("javascript","Java"));
// nb : ici ça ne change pas la valeur de l'input car on travaille sur une variable qui copie l'élémént original, on ne modifie pas l'original

// 5. Découper la chaine avec le délimiteur " "

let chaineArray = chaineRecupere.split (" ")
console.log(chaineArray);

// 6. Inverser la chaine de caractères

// let chaineInversee = CHAINE.split("")// comme pas d'éléments entre les guillemets, il va couper à chaque élément

let chaineInversee = chaineRecupere.split("").reverse().join("")
console.log(chaineInversee);
