// 1. Je crée mes constantes avec lesquelles je vais travailler
const present = document.getElementsByClassName("present");
const absent = document.getElementsByClassName("absent");
const statut = document.getElementsByClassName("statut");

console.log(statut);

// Je crée la fonction pour aller chercher la valeur de td

// present.foreach(
//     element =>{
//         // let presente = present.item(td);
//         element.addEventListener("click", function(){
//         absent.item(td).style.display ="none";    
//         statut.item(td).textContent= "Présente";
//         })
//     }
// )

let test = present.item(0);
console.log(test);

let test2 = absent[0];


// 2. Je crée l'évènement présence
test.addEventListener("click", function(){
    if(statut.item(0).textContent == ""){
        absent.item(0).style.display ="none";    
        statut.item(0).textContent= "Présente";
    }
    // elseif(statut.item(0).textContent == "Présente"){
    //     absent.item(0).style.display ="inline";    
    //     statut.item(0).textContent= "";
    // }
    
})

// 3. Je crée l'évènement absence
test2.addEventListener("click", function(){
    present.item(0).style.display ="none";    
    statut.item(0).textContent= "Absente";
})