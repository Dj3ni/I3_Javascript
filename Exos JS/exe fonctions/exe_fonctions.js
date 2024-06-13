// créer uen fonction avec un nbr en paramètre et affiche son carré
// Attention le nombre doit être dans un input (html) et modifie celui-ci avec le résultat

let nombre = document.getElementById("number").valueAsNumber
console.log(nombre);

function SquareOf(number){
    return number *= number    
}


