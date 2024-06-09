const plat1 = document.getElementsByTagName("li")
const margarita = document.querySelector("li")

// Différence entre inner text et inner HTML
    // recup tout le code à l'intérieur de la balise sélectionnée
// margarita.innerHTML = "<strong>Margarita</strong>"
// console.log(margarita.innerHTML);
    // recup seulement le texte( pas les balises à l'intérieur d ela balise sélectionnée)
// plat2.innerText = "<strong>margarita</strong>"
// console.log(margarita.innerText);
    

// Si je veux rajouter une pizza:
const list_pates = document.querySelector("#list_pates")
// ou
const list_pates2 = document.getElementById("list_pates")
// puis
list_pates.innerHTML = list_pates.innerHTML + "<li> 4 fromages </li>"

// On veut ajouter la classe red au 1er enfant de la liste de pâtes
const premierEnfant = document.querySelector("#list_pates li")
// puis
premierEnfant.classList.add("red")

// Accéder aux différents éléments de la liste
const deuxiemeEnfant = document.querySelector("#list_pates li:nth-child(2)")
// ou
const tousLesEnfants = document.querySelectorAll("#list_pates li")
const enfantDeux = tousLesEnfants[1]

// Node vs Element
console.dir("Node",margarita.firstChild);
console.dir("Element HTML",margarita.firstElementChild);

console.dir("Nodelist", margarita.childNodes);
console.dir("HTML Collection", margarita.children);

// Events

const button = document.getElementById("btn-envoi")
// 1ère manière, la meilleure (n'écrase pas les anciens comportements, si on ajoute un autre addEventListener, il va juste ajouter ce comportement à la liste de ce qu'il doit faire )
button.addEventListener("click", function(){
    alert("message envoyé")
    console.log(button);
})
// Deuxième: moins bon car on ne peut pas ajouter une autre instruction avec le même attribut  (la deuxième va écraser la première)
button.onclick = function(){
    alert("Message envoyé") //Ici on ajoute l'attribut onclick du bouton
}

// Récupération de valeurs : il faut utiliser value et pas inner text!
const pseudo = document.getElementById("pseudo").value
const message = document.getElementById("message").value


button.addEventListener("click", function(){
    alert('pseudo: '+pseudo + ' ,message: '+ message)
})