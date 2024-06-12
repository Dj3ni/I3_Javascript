// const LOGIN = "johdoe@mail.com"
// const PASSWORD = "Test1234!"

// let loginUtilisateur = prompt("Login")
// let passwordUtilisateur = prompt("Password:")

// const NBR_ESSAIS = 3;
// let compteur = 1;

// while(compteur < NBR_ESSAIS && (LOGIN !== loginUtilisateur || PASSWORD !== passwordUtilisateur)){
//     compteur++;
//     console.log(compteur);
//     loginUtilisateur = prompt("Login");
//     passwordUtilisateur = prompt("Password:");
// }

// if(LOGIN !== loginUtilisateur || PASSWORD !== passwordUtilisateur){
//     alert("Plus d'essais! Contactez un admin!")
// }
// else{
//     alert("Bienvenue sur le site")
// }


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let nbrMystère = getRandomIntInclusive(1,10);
console.log(nbrMystère);

let attempt = parseInt(prompt("Trouvez le nombre mystère: "));

while (attempt !== nbrMystère || attempt < 1 || isNaN(attempt)){
    if (attempt > nbrMystère){
        alert("Trop grand")
        attempt = parseInt(prompt("Trouvez le nombre mystère: "));
    }
    else if(attempt < nbrMystère){
        alert("Trop petit")
        attempt = parseInt(prompt("Trouvez le nombre mystère: "));
    }
    else{
        alert("Veuillez entrer un nombre entre 1 et 10!");
        attempt = parseInt(prompt("Trouvez le nombre mystère: "));
    }
}
alert(`Bravo, Tu as trouvé! Le nombre mystère était: ${nbrMystère}`)


// Autre manière de faire une boucle while: 

let attempt2

do{
    attempt2 = parseInt(prompt("Trouvez le nombre mystère: "));
}while(attempt2 !== nbrMystère || attempt2 < 1 || isNaN(attempt2)){
    
}
