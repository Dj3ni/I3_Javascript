// Chercher les Elements Couleurs
const Jaune = document.querySelector(".Jaune");
const Rouge = document.querySelector(".Rouge");
const Vert = document.querySelector(".Vert");
const Bleu = document.querySelector(".Bleu");
const Rose = document.querySelector(".Rose");
const Orange = document.querySelector(".Orange");

let currentColor; //variable pour mémoriser la couleur sur laquelle on va cliquer


// Click tableau des couleurs

Jaune.addEventListener("click", function(){
    currentColor = Jaune.textContent;
    console.log(Jaune);
})

Rouge.addEventListener("click", function(){
    currentColor = Rouge.textContent;
    console.log(Rouge);
})
Vert.addEventListener("click", function(){
    currentColor = Vert.textContent;
    console.log(Vert);
})
Bleu.addEventListener("click", function(){
    currentColor = Bleu.textContent;
    console.log(Bleu);
})
Rose.addEventListener("click", function(){
    currentColor = Rose.textContent;
    console.log(Rose);
})
Orange.addEventListener("click", function(){
    currentColor = Orange.textContent;
    console.log(Orange);
})

// Chercher les éléments case
const case1 = document.querySelector("#canva tr td")
console.dir(case1)
const case2 = document.querySelector("#canva tr td +td")
console.dir(case2)
const case3 = document.querySelector("#canva tr td:last-child")
console.log(case3)
const case4 = document.querySelector("#canva tr:nth-child(2) td")
console.log(case4)
const case5 = document.querySelector("#canva tr:nth-child(2) td:nth-child(2)")
console.log(case5)
const case6 = document.querySelector("#canva tr:nth-child(2) td:last-of-type")
console.log(case6);

// Click tableau vide
case1.addEventListener("click",function(){
    case1.classList.toggle(currentColor);
    console.log(case1);
})

case2.addEventListener("click",function(){
    case2.classList.toggle(currentColor);
    console.log(case2);
})

case3.addEventListener("click",function(){
    case3.classList.toggle(currentColor);
    console.log(case3);
})

case4.addEventListener("click",function(){
    case4.classList.toggle(currentColor);
    console.log(case4);
})

case5.addEventListener("click",function(){
    case5.classList.toggle(currentColor);
    console.log(case5);
})
case6.addEventListener("click",function(){
    case6.classList.toggle(currentColor);
    console.log(case6);
})