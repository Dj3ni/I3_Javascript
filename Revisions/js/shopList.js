// 1. Récupérer les éléments
const ARTICLE_INPUT = document.getElementById("article");
const BTN = document.querySelector("button");
const LIST = document.querySelector("ul");
console.dir(LIST);

// Ajouter un évènement

BTN.addEventListener("click", addToList);
ARTICLE_INPUT.addEventListener("keyup",(event)=>{
    if(event.key !== "Enter")return;
    addToList();
})

// Fonction addToList:

function addToList(){
// 1. Je nettoie la valeur Input
let safeValue = ARTICLE_INPUT.value.trim();

// 2. Je vérifie qu'il y a une valeur sinon je sors
if (safeValue === "") return;

// Créer un nouvel élément li
const LI = document.createElement("li");
LI.style.listStyle = "none";

// Ajout du bouton +évènement

const REMOVE = document.createElement("button");
REMOVE.style.margin = "5PX";
REMOVE.addEventListener("click",function(){
    LIST.removeChild(LI);
})

// Aojut CHECKbox

const CHECK = document.createElement("input");
CHECK.setAttribute("type","checkbox");


// Créer le contenu

LI.innerText = safeValue;
REMOVE.innerText = "❌";

// Ajouter au HTML

LI.insertAdjacentElement("afterbegin",CHECK);
LI.appendChild(REMOVE);
LIST.append(LI);

// Ajout Bouton Clear
let clear = document.getElementById("clearButton");
if(!clear){
    const CLEAR = document.createElement("button");
    CLEAR.id = "clearButton";
    
    CLEAR.addEventListener("click",function(){
        while(LIST.firstChild){
            LIST.removeChild(LIST.firstChild);
        }   
    })
    
    CLEAR.innerText = "Clear List"
    CLEAR.style.margin="5px";
    BTN.insertAdjacentElement("afterend",CLEAR);
}
// Vider le champ
ARTICLE_INPUT.value = "";

}






