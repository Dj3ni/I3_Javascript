// let inputNumber1 = parseInt(prompt("Veuillez entrer un nombre"))
// let inputNumber2 = parseInt(prompt("Veuillez entrer le deuxième nombre"))
// let operation = prompt("Veuillez choisir l'opération à effectuer")
// let resultat

if (!isNaN(inputNumber1 && inputNumber2))
    switch(operation){
        case "+":
            resultat = inputNumber1 + inputNumber2
            console.log(`${inputNumber1} + ${inputNumber2} = ${resultat}`);
            break
        case "-":
            resultat = inputNumber1 - inputNumber2
            console.log(`${inputNumber1} - ${inputNumber2} = ${resultat}`);
            break
        case "/":
            resultat = inputNumber1 / inputNumber2
            console.log(`${inputNumber1} / ${inputNumber2} = ${resultat}`);
            break
        case "*":
            resultat = inputNumber1 * inputNumber2
            console.log(`${inputNumber1} * ${inputNumber2} = ${resultat}`);
            break
        default:
            console.log("L'opération n'est pas valide");
            break
}
else{
    console.log("Veuillez entrer un nombre valide");
}