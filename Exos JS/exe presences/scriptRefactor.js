// 1. Je crée mes constantes avec lesquelles je vais travailler
const presente = document.querySelectorAll("tr td:nth-child(4)");
console.log(presente);
const absente = document.querySelectorAll("tr td:nth-child(5)");
console.log(absente);
const statut = document.querySelectorAll("tr td:nth-child(3)");

console.log(statut);

// Je crée l'évènement sur Présente

for (let index = 0; index < presente.length; index++) {
    presente[index].addEventListener("click",function(){
        presente[index].textContent = "";
        statut[index].textContent = "Présente"
        absente[index].textContent = "❌"
    })    
}

// Je crée l'évènement sur Absente

for (let index = 0; index < absente.length; index++) {
    absente[index].addEventListener("click",function(){
        presente[index].textContent = "✅";
        statut[index].textContent = "Absente"
        absente[index].textContent = ""
    })
}

