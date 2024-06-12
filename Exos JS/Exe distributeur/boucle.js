// Gestion des Stocks

let stockCoca = 5;
let stockCocaLight = 1;
let stockCocaZero = 6;
let stockFanta = 3;
let stockSprite = 0;
let stockIceTea = 3;
let stockOasis = 0;
let stockSchweppes = 4;
let stockSchweppesAgrum = 3;
let nouvelleCommande
let input

do{
    input = prompt("Veuillez sélectionner votre boisson")
    switch (input){
        case "1":
            if(stockCoca > 0){
                // Modifier l'affichage
                display.innerText = "Vous avez choisi le coca"
                // Le présenter dans l'avaloir
                pick.src = "assets/img/coca.jpg"
                // Modification des stocks
                stockCoca-- ;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }
            break
        
        case "2":
            if(stockCocaLight > 0){
                // Modifier l'affichage
                display.innerText = "Vous avez choisi le coca light"
                pick.src = "assets/img/coca-light.jpg"
                // Modification des stocks
                stockCocaLight-- ;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }
            break
        
        case "3":
            if(stockCocaZero > 0){
                // Modifier l'affichage
                display.innerText = "Vous avez choisi le coca zero"
                pick.src = "assets/img/coca-zero2.jpg"
                // Modification des stocks
                stockCocaZero-- ;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }
            break
        
        case "4":
            if(stockFanta > 0){                
                display.innerText = "Vous avez choisi le Fanta"
                pick.src = "assets/img/fanta.jpg"
                stockFanta-- ;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }
            break
        
        case "5":
            if(stockSprite > 0){
                display.innerText = "Vous avez choisi le sprite"
                pick.src = "assets/img/sprite.jpg"
                stockSprite-- ;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }
            break

        case "6":
            if (stockIceTea > 0){
                display.innerText = "Vous avez choisi Ice Tea"
                pick.src = "assets/img/ice-tea.jpg"
                stockIceTea-- ;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }            
            break

        case "7":
            if (stockOasis > 0){
                display.innerText = "Vous avez choisi l'Oasis'"
                pick.src = "assets/img/oasis.jpg"
                stockOasis-- ;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }            
            break

        case "8":
            if (stockSchweppes > 0){
                display.innerText = "Vous avez choisi le Schweppes"
                pick.src = "assets/img/schweppes.jpg"
                stockSchweppes--;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }            
            break

        case "9":
            if (stockSchweppesAgrum > 0){
                display.innerText = "Vous avez choisi le Schweppes Agrum"
                pick.src = "assets/img/schweppes-agrum.jpeg"
                stockSchweppesAgrum--;
            }
            else{
                display.innerText = "Plus de stock"
                input = prompt("Veuillez sélectionner votre boisson")
            }            
            break
            
        default:          
            display.innerText = "Veuillez entrer un nombre correct"
            input = prompt("Veuillez sélectionner votre boisson")
            break        
    }
    nouvelleCommande = prompt("Voulez-vous une autre boisson?")

}while(nouvelleCommande === "oui")

    console.log(stockCocaLight);