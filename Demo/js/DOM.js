// Création d'un élément HTML => createElement("tagName")

const p = document.createElement("p");

// Paramètrer cet élément
p.innerText = "Lorem ipsum";
p.id = "customParagraph";

// p.setAttribute('class',myCustomClass) éviter si possible car un autre set Attribute va remplacer celui qu'on vient de mettre. Utiliser plutôt : classList

p.classList.add('myCustomClass')
p.classList.add ('mySecondCustomClass', 'myThirdCustomClass')

// Paramètrer le comportement de l'élément:

// p.addEventListener("mouseenter",  (event)=>{ //event: récupérer l'évènement pour l'utiliser
//     console.log('event', event);
//     console.log("Cible de l'évènement", event.target);
//     // Je vais appliquer le style à l'élement
//     const target = event.target;
//     target.classList.add("highlight")
// })

// p.addEventListener("mouseleave",  (event)=>{ //event: récupérer l'évènement pour l'utiliser
//     const target = event.target;
//     target.classList.remove("highlight")
// })

// Refactor de ces blocs de code:
function toggleHighlight(target){
    target.classList.toggle("highlight")    
}

p.addEventListener("mouseenter",  (event)=>{ //event: récupérer l'évènement pour l'utiliser
    toggleHighlight(event.target)
    event.target.style.fontWeight = "bold"; //on ajoute du css directement dans le js
    event.target.style.fontSize = "1.2em"
})

p.addEventListener("mouseleave",  (event)=>{ //event: récupérer l'évènement pour l'utiliser
    toggleHighlight(event.target)
    event.target.style.fontWeight = "normal";
    event.target.style.fontSize = ""    //le laisser vide pour que ça n'interfère pas avec notre css
})


// Maintenant qu'il est créé, on va l'ajouter au doc HTML

    // parent.append(childNode)
const WRAPPER = document.getElementById("wrapper");
WRAPPER.append(p)