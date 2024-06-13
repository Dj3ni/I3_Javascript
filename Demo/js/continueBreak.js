// Je veux afficher tous les chiffres sauf le "5"
const TAB = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < TAB.length; index++) {
    if (TAB[index] === 5){
        continue
        // ici cela signifie qu'il n'exécute pas le code pour ce qui est dans cette condition
    }
    // Autre manière de l'écrire: if (TAB[i] === 5)continue
    // continue signifier continue l'itération sans exécuter le code 
    console.log(TAB[index]);
}

// Je veux afficher que les pairs

for (let index = 0; index < TAB.length; index++) {
    if (TAB[index] % 2 !== 0){
        continue
    }
    
    console.log(TAB[index]);
}

// Break

for (let index = 0; index < TAB.length; index++) {
    if (TAB[index] === 3){
        break
    }
    console.log(TAB[index]);    
}

while(true){
    let mot = prompt("Entrez un mot, tapez 'end' pour quitter")
    if(mot === "end")break
    alert(mot)
}