
// Verification sur l'age

let age = parseInt(prompt("Veuillez entrer votre age"));
console.log((age));

if(!isNaN(age)){ //Si j'ai un nombre, alors j'entre dans la conditions
    if(age > 0 && age <= 25){
        console.log("Vous êtes un étudiant");
    }
    else if (age > 25 && age < 67){
        console.log("Vous êtes un travailleur");
    }
    else if (age >= 67){
        console.log("Vous êtes un vieux crouton");
    }
    else {
        console.log('Age invalide');
    }
}

else{
    console.log("Veuillez entrer un nombre valide");
    age
}


// Login

const login = "johndoe@mail.com"
const password = "Test1234!"

let loginUtilisateur = prompt("Veuillez entrer votre login")
let passwordUItilisateur = prompt("Veuillez entrer votre mdp")

if (login === loginUtilisateur && password === passwordUItilisateur){
    alert("Bienvenue sur le site")
}
else{
    alert("Login ou mdp invalide")
}