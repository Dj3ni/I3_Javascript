// 1. Récupérer un élément via son ID
const paraLorem = document.getElementById("lorem2"); //élément DOM
// ou
const paraQuery = document.querySelector("#lorem1"); //selecteur css

    // Affichage du résultat dans la console:
    console.log(paraLorem); //sur un élément unique ( ex: balise et contenu)
    console.dir(paraLorem); //donne accès à tous les attributs de cet élément

// 2. Récupérer un élément via son nom de balise
const paragraphes = document.getElementsByTagName("p")
// ou
const paragrapheQuery = document.querySelectorAll("p")

    // Affichage du résultat:
    console.log(paragraphes);
    console.log(paragrapheQuery);

// 3. On va modifer le nom de l'id. Si on recherche à nouveau, il faudra utiliser cette  nouvelle référence. On peut toujours travailler avec l'ancienne (ici paraLorem) car on travaille en référence (modification de la valeur originale)

paraLorem.id = "LoremUpdate"

    //Si nous modifions l'id, la class, ou autre moyen d'acces, il faut 
    //utiliser cette nouvelle valeur pour la rechercher de nouveau
    console.log(document.getElementById("LoremUpdate"));
    console.dir(paraLorem);

// 4. on modifie son contenu HTML et donc ce qui va être affiché (dans le navigateur!) Attention car cela laisse une porte d'entrée pour hacking (laisse possibilité aux gens de modifier). A n'utiliser donc que en interne, si via un input, utiliser plutot textContent!

    //les balises html seront interpretees
    paraQuery.innerHTML = "<strong>Bonjour à tous</strong>" 

    // les balises html seront considerees comme du texte
    paraLorem.textContent =  "<em>Bonjour à tous</em>"

// 5.  Modification de la classe

paraQuery.className //modifie la classe, s'il y en a plusieurs, il faut les renoter sinon tout est écrasé

console.log(paraQuery.className);
paraQuery.className = "red strong"; 

paraQuery.classList // va renvoyer une liste de toutes les classes actives(cela nous évite de tout retenir par coeur)
// Attributs de la classe qui permettent d'interagir
    console.log(paraQuery.classList);
    paraQuery.classList.add("textColor");
    console.log(paraQuery.classList);
    paraQuery.classList.replace("red","blue");
    console.log(paraQuery.classList);
    paraQuery.classList.remove("strong");
    console.log(paraQuery.classList);
    paraQuery.classList.toggle("fromJS"); //Si l'élément n'existe pas dans la liste de la classe, il va la rajouter, sinon va la supprimer ( c'est un add et un remove en même temps)
    console.log(paraQuery.classList);
    paraQuery.classList.contains("red");

// Utilisation des données encodées par des inputs

const inputNumber = document.getElementById("inputNumber");
const inputText = document.getElementById("inputText");
console.dir( inputNumber.valueAsNumber);
console.dir(inputText.value);
