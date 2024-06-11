let fruitChoice = prompt("Veuillez sélectionner le fruit souhaité entre pomme, poire, kiwi, mangue")

let stockPoire = 2

switch(fruitChoice){
    case "pomme":
        console.log("Le prix est de 1€/kg");
        break
    case "poire":
        if (stockPoire > 0){
            console.log("Le prix est de 1.10€/kg");
        }
        else{
            console.log("Il n'y a plus de stock");
        }
        break
    case "kiwi": // Il y a cette configuration comme cela car les 2 éléments ont le même prix, on n'a pas besoin de reproduire l'alerte. 
    case "mangue":
        console.log("Le prix est de 4.20€/kg");
        break
    default:
        console.log("Le fruit n'est pas disponible en magasin");
}