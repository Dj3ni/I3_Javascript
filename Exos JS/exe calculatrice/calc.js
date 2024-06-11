// 

let inputNumber1 = parseInt(prompt("Veuillez entrer un nombre"))
let inputNumber2 = parseInt(prompt("Veuillez entrer le deuxième nombre"))
let operation = prompt("Veuillez choisir l'opération à effectuer")
let resultat

if (!isNaN(inputNumber1) && !isNaN(inputNumber2)){
    if(operation === "addition" || operation === "+" ){
        resultat = inputNumber1 + inputNumber2;
        console.log(inputNumber1 + " + " + inputNumber2 + " = " + resultat);
    }
    
    else if (operation === "soustraction" || operation === "-"){
        resultat = inputNumber1 - inputNumber2;
        console.log(inputNumber1 + " - " + inputNumber2 + " = " + resultat);
    }
    
    else if (operation === "division" || operation === "/"){
        division = prompt("Souhaitez-vous faire une division entière?")
            if (division === "oui"){
                resultat = MathFloor(inputNumber1 / inputNumber2);
                console.log("La division entière de " +inputNumber1 + " et " +inputNumber2 + " = " + resultat);
            }
            else{
                resultat = inputNumber1 / inputNumber2;
                console.log(inputNumber1 + " / " + inputNumber2 + " = " + resultat);
            }        
    }
    else if (operation === "modulo" || operation === "%"){
        resultat = inputNumber1 % inputNumber2;
        console.log(inputNumber1 + " * " + inputNumber2 + " = " + resultat);
    }
    else if (operation === "multiplication" || operation === "*"){
        resultat = inputNumber1 * inputNumber2;
        console.log(inputNumber1 + " * " + inputNumber2 + " = " + resultat);
    }
    else if (operation === "exposant" || operation === "**"){
        resultat = inputNumber1 ** inputNumber2;
        console.log(inputNumber1 + " * " + inputNumber2 + " = " + resultat);
    }

    else{
        operation = prompt("Opération invalide, veuillez choisir l'opération à effectuer")
    }
}
else{
    if (isNaN(inputNumber1) && !isNaN(inputNumber2)){
        inputNumber1 = parseInt(prompt("Veuillez entrer un nombre"))
    }
    else if(!isNaN(inputNumber1) && isNaN(inputNumber2)){
        inputNumber2 = parseInt(prompt("Veuillez entrer le deuxième nombre"))
    }
    else{
        inputNumber1 = parseInt(prompt("Veuillez entrer un nombre"))
        inputNumber2 = parseInt(prompt("Veuillez entrer le deuxième nombre"))
    }
    
}
