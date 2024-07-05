// Jenny Fernandez Garcia Wad24

// 1. Je crée la fonction qui génère le nombre mystère et fais appel à cette fonction 

function createRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    // Je renvoie un entier aléatoire compris entre valeur min et max inclues
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 1
let max = 100

let mysteryNumber = createRandomIntInclusive(min,max);
    console.log(mysteryNumber); //pour debug


// 2. Je vais chercher les éléments du DOM pour récupérer la tentative de l'utilisateur

const GUESS = document.getElementById("guess");
// console.dir(GUESS); 
const GUESS_BTN = document.getElementById("guessBtn");
// console.log(GUESS_BTN);
const RESPONSE = document.getElementById("response");
const ATTEMPT = document.querySelector("#guessing p:last-child");
console.log(ATTEMPT);


// 3. Je crée les évènements et la fonction pour comparer la réponse

GUESS.addEventListener("keyup", (event)=>{
    if (event.key !== "Enter") return;
    compareToMysteryNumber();
});

GUESS_BTN.addEventListener("click", compareToMysteryNumber)


// Variables tentatives
const ATTEMPT_MAX = 10;
let attempt = ATTEMPT_MAX;
ATTEMPT.textContent = " Il vous reste " + `${attempt}`+ " tentatives";

// 4. DOM pour tableau réponses
const TBODY = document.querySelector("tbody");


function compareToMysteryNumber(){
    let guess = parseInt(GUESS.value);
    // console.log(guess);

    if(isNaN(guess) || guess > max || guess < min){
        alert("Veuillez entrer un chiffre correct!")
    }

    else{
        // Création éléments pour le tableau de réponse
    const RESPONSE_TR = document.createElement("tr");
    const RESPONSE_TD = document.createElement("td");
    const CURRENT_GUESS = document.createElement("td");
    const CLUE = document.createElement("td");

    if(guess !== mysteryNumber && attempt > 0){
        if(guess > mysteryNumber){
            // 1ere div
            attempt -= 1 ;
            RESPONSE.innerHTML = "Trop haut!"
            ATTEMPT.textContent = " Il vous reste " + `${attempt}`+ " tentative(s)";
            GUESS.value = "";

            // Tableau réponses
            CLUE.innerText = "🦒"; // "↑"
            RESPONSE_TD.innerText = RESPONSE.innerHTML;
            CURRENT_GUESS.innerText = `${guess}` + " :";
            RESPONSE_TR.append(CURRENT_GUESS,RESPONSE_TD,CLUE);           

            if(guess <= (mysteryNumber + 5)){
                RESPONSE_TR.style.backgroundColor = "yellow";
                CLUE.innerText = "🦒" + "🥵";
            }
            TBODY.appendChild(RESPONSE_TR);
        }

        else if(guess < mysteryNumber){
            // 1ère div
            attempt -= 1;
            RESPONSE.innerHTML = "Trop bas!"
            ATTEMPT.textContent = " Il vous reste " + `${attempt}`+ " tentative(s)";
            GUESS.value = "↓";

            // Tableau réponse
            CLUE.innerText = "🐭"; // ""
            RESPONSE_TD.innerText = RESPONSE.innerHTML;
            CURRENT_GUESS.innerText = `${guess}` + " :";
            RESPONSE_TR.append(CURRENT_GUESS,RESPONSE_TD,CLUE);  
            
            if(guess >= (mysteryNumber - 5)){
                RESPONSE_TR.style.backgroundColor = "yellow";
                CLUE.innerText = "🐭" + "🥵";
            }
            TBODY.appendChild(RESPONSE_TR);
        }
    }

    // Si plus de tentatives
    else if (attempt === 0 && guess !== mysteryNumber){
        RESPONSE.innerHTML = " 😿Dommage, il ne te reste plus de tentatives 😿. Le nombre mystère était: "+ `${mysteryNumber}`;
            // Création du bouton rejouer
        const REPLAY = document.createElement("button");
        REPLAY.innerText = "Rejouer";
        REPLAY.addEventListener("click", newGame);
        ATTEMPT.appendChild(REPLAY);
    }
    
    // Si bonne réponse
    else{
        // Partie devinette
        GUESS.value = "";
        GUESS.setAttribute("disabled","true");
        GUESS_BTN.setAttribute("disabled","true");
        RESPONSE.innerHTML = " 🎉Bravo, tu as trouvé en "+ `${ATTEMPT_MAX - attempt +1}` + " tentative(s)!🎉 Le nombre mystère était bien : " + `${mysteryNumber}`;
        ATTEMPT.textContent = "";
        
        // Création du bouton rejouer
        const REPLAY = document.createElement("button");
        REPLAY.innerText = "Rejouer";
        REPLAY.addEventListener("click", newGame);
        ATTEMPT.appendChild(REPLAY);

        // Tableau de réponses
        CLUE.innerText = "🥳";
        RESPONSE_TD.innerText =" 🎉Bravo, tu as trouvé 🎉";
        RESPONSE_TR.append(RESPONSE_TD,CLUE);
        RESPONSE_TR.style.backgroundColor = "green";
        TBODY.appendChild(RESPONSE_TR);
    }

    }

    
    

}

function newGame(){
    // Je réinitialise ma partie devinette
    GUESS.value = "";
    GUESS.removeAttribute("disabled");
    GUESS_BTN.removeAttribute("disabled");
    ATTEMPT.textContent = " Il vous reste " + `${attempt}`+ " tentatives";
    RESPONSE.innerHTML = "";

    // Je génère un nouveau nombre mystère
    let mysteryNumber = createRandomIntInclusive(1,100);
    console.log(mysteryNumber); //pour debug

    // Je réinitialise la tableau de réponses
    while (TBODY.children[0]) {
        TBODY.children[0].remove();
    }

}
