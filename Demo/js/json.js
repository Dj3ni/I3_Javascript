const personnes = [
    {
        id: "001",
        lastname: "Geerts",
        firstname: "Quentin",
    },
    {
        id: "002",
        lastname: "Legrain" ,
        firstname: "Samuel" ,
    },
    {
        id:"003" ,
        lastname: "Beurive",
        firstname: "Aude",
    }
]

// Si on souhaite accéder à une personne:
personnes[0]

// Si je souhaite accéder à une valeur dans cet objet:

personnes[0].lastname

// Je souhaite afficher tous les prénoms
for(const personne of personnes){
    console.log(personne.firstname);
}