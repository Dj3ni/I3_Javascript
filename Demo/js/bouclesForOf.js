const tabSemaine = ["lundi", "mardi", "mercredi","jeudi","vendredi","samedi","dimanche"]
const TAB = [1,2,3,4,5,6,7,8,9,10]

for (const jour of tabSemaine) {
    console.log(jour);
}

for (let nombre of TAB) {
    if(nombre % 2 != 0){
        nombre = 22
    }
    console.log(nombre);
}

// Foreach

tabSemaine.forEach((jour)=>console.log(jour))

tabSemaine.forEach((jour,i,array) => {
    console.log(i+ ":" + jour);
    console.log(array);
});

tabSemaine.forEach((jour,i) => {
    console.log(`${i + 1} : ${jour}`);
});

tabSemaine.forEach((jour,i)=> {
    if (i < 5){
        console.log(`jour n° ${i + 1} : ${jour}`);
    }
});



// Récupérer la liste de courses

    // Ici je travaille directement avec les éléments de "li"

const LISTE_COURSES = document.querySelectorAll("li") // Nodelist == tableau
console.log(LISTE_COURSES);

for (const produit of LISTE_COURSES) {
    produit.addEventListener("click",function(){
        alert(`${produit.textContent} a été ajouté dans votre panier`)
    })
}

//Ce type de boucle marche pour les nodelist et les HTML Collection:

const COURSES = document.getElementsByTagName("li") // Collection HTML != array
console.log(COURSES);

for (const produit of COURSES) {
    produit.addEventListener("click",function(){
        alert(`${produit.textContent} a été ajouté dans votre panier`)
    })
}

//  /!\ Les collections HTML ne fonctionnent pas avec les forEach: il faut d'abord transformer la collection HTML en tableau 

Array.from(LISTE_COURSES).forEach(produit => {
    produit.addEventListener("click",function(){
        alert(`${produit.textContent} a été ajouté dans votre panier`)
    });
})

