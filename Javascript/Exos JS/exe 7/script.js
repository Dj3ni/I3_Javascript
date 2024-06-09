/* 
Faites en sorte que lorsqu'on click sur la margarita,
l'input somme augmente de son prix (10 euros).
*/

const margarita = document.querySelector("ul li");
console.log(margarita);
const margaritaPrice = 10;
console.log(margaritaPrice);

const input1 = document.querySelector("input")
console.dir(input1)

margarita.addEventListener("click", function(){
    input1.valueAsNumber += margaritaPrice
    console.log(totalPrice);
})


// Correction:

// D'abord:
const input = document.getElementById("input-somme")
// puis
const numberValue = parseInt("input.value")
// ou 
const numberValue2 = input.valueAsNumber