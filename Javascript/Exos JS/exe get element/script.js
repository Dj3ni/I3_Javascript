// Exercice: depuis le point de départ, récupérez et afficher l'élément de la Valeur E

value2 = document.getElementsByTagName("div").lastElementChild;
console.log(value);

value = document.getElementById("depart").parentElement.lastElementChild;
console.log(value);

// On identifie l'enfant qu'on doit retrouver depuis l'Element Parent
const paraDepart = document.getElementById("depart");
console.log(paraDepart.parentElement.children[4])

// On part dans l'élément parent du point de départ et on va chercher le dernier élément enfant
console.log(paraDepart.parentElement.lastElementChild)

// On navigue d'un élément à l'autre dans la même liste
console.log(paraDepart.nextElementSibling.nextElementSibling);

// Cela va créer une liste qui contient tous les éléments div
const div = document.getElementsByTagName("div");
console.dir(div.item(0).lastElementChild);