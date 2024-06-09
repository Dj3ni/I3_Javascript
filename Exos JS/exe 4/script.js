// Récupère les lignes impaires de la liste
const odds = document.querySelectorAll("div>ul>li:nth-child(odd)");
console.log(odds);

// Récupère les lignes paires de la liste
const evens = document.querySelectorAll("div>ul>li:nth-child(even)");
console.log(evens);


// différents sélecteurs:

const elementsId = document.querySelector("#id");
const elementsClass = document.querySelector(".class");