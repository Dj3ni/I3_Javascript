// DOM

// Clavier
const KEYPAD_BTN = [...document.querySelectorAll("button")];
const SCREEN = document.getElementById("screen");
const PICK = document.querySelector("#collector img");
const COLLECTOR = document.getElementById("collector");
console.log(PICK);

SCREEN.textContent = "Select your drink then #";

for (const btn of KEYPAD_BTN) {
    btn.addEventListener("click",(event)=>{
        // Je vide l'écran si ecran de départ
        if (SCREEN.textContent === "Select your drink then #"){
            SCREEN.textContent = "";
        }
        switch(event.target.textContent){
            case "C":
                SCREEN.textContent = "";
                break;
            
            case "#":
                pickDrink();
                break;
            
            default:
                SCREEN.textContent += event.target.textContent;
        }
    })
}

function pickDrink(){
    const DRINK_ID = parseInt(SCREEN.textContent);
    const DRINK = DRINKS_TAB.find(drink => drink.id === DRINK_ID);//Dans le tableau Drink, parcoure chaque boisson et regarde si l'id de cette boisson correspond au chiffre entré dans l'écran.
    
    if(DRINK){
        SCREEN.textContent = "You choose: " + `${DRINK.name}`;
        if(DRINK.stock === 0){
            SCREEN.textContent = "Out of stock!";
        }
        else{
            DRINK.stock -= 1;
            PICK.setAttribute("src", DRINK.picture);
            // COLLECTOR.style.backgroundColor = "white";
        }
    }
    else{
        SCREEN.textContent = "Enter a correct number";
    }
}

// Tableau boissons

const DRINKS_TAB = [
    {
        "id": 1,
        "name":"Coca",
        "price":2,
        "stock":12,
        "picture": "../css/img/coca.jpg",
    },
    {
        "id": 2,
        "name":"Fanta",
        "price":2,
        "stock":6,
        "picture": "../css/img/fanta.jpg",
    },
    {
        "id": 3,
        "name":"Sprite",
        "price":2,
        "stock":0,
        "picture": "../css/img/sprite.jpg",
    },
]

// DOM Boissons
// const DRINKS = 


for (const drink in DRINKS_TAB) {
    console.log(DRINKS_TAB[drink].name);
    // Je vide le GRId existant

    // J'ajoute les paramètres GRID en fonction d

    // Je crée une div qui contient la photo de la boisson et le stock indiqué
    

    // J'ajoute au doc html



}



// Itérer dans un array associatif(objet)
// let test = {
//     "id": 3,
//     "name":"Sprite",
//     "price":2,
//     "stock":0,
// }

// for (const key in test) {
//     console.log(test[key]);
// }