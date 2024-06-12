// Chercher les Elements Couleurs
const Jaune = document.querySelector(".Jaune");
const Rouge = document.querySelector(".Rouge");
const Vert = document.querySelector(".Vert");
const Bleu = document.querySelector(".Bleu");
const Rose = document.querySelector(".Rose");
const Orange = document.querySelector(".Orange");

let currentColor; //variable pour mémoriser la couleur sur laquelle on va cliquer


// Iteration in the NodeList Color

const colorTable = document.querySelectorAll("#tab_color td")
console.log(colorTable[3]);

for (let index = 0; index < colorTable.length; index++) {
    colorTable[index].addEventListener("click",function(){
        currentColor = colorTable[index].textContent;
        console.log(currentColor);
    }) 
}

// Iteration in the NodeList Canva

const canvaList = document.querySelectorAll("#canva td")
console.log(canvaList[2]);

for (let index = 0; index < canvaList.length; index++) {
    canvaList[index].addEventListener("click",function(){
        canvaList[index].classList.toggle(currentColor); //Attention le toggle est un attribut de la classList
        console.log(canvaList[index]);
    })    
}

