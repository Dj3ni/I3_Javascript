// Chercher les Elements Couleurs
const Jaune = document.querySelector(".Jaune");
const Rouge = document.querySelector(".Rouge");
const Vert = document.querySelector(".Vert");
const Bleu = document.querySelector(".Bleu");
const Rose = document.querySelector(".Rose");
const Orange = document.querySelector(".Orange");

let currentColor; //variable pour mémoriser la couleur sur laquelle on va cliquer


// Function for Click on Color table

function clickOnColour(color){
    color.addEventListener("click",function(){
        currentColor = color.textContent;
    })
}

// Function for Click on Empty table

function clickOnCanva(caseNumber){
    caseNumber.addEventListener("click",function(){
        caseNumber.classList.toggle(currentColor);
    })
}

// Iteration in the NodeList Color

const colorList = document.querySelectorAll("#tab_color td")
console.log(colorList);

colorList.forEach(color => {
    clickOnColour(color)
});

// Iteration in the NodeList Canva

const canvaList = document.getElementById("canva")
console.log(canvaList);

canvaList.forEach(caseNumber => {
    clickOnCanva(caseNumber)
});