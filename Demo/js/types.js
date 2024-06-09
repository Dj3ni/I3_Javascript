//Démo type dynamique
let maVariable = 5
maVariable = "chaine"

// Les types

const vNumber = 5;
const vString = 'chaine';
const vBoolean = true ;
const vUndefined = undefined ;
let vObject = {}; //c'est un tableau associatif, considéré comme un objet
vObject = [] ; // les tableaux sont aussi considérés comme des objets
vObject = new Date(); //création d'un nouvel objet
vObject = null; //vide
const vFunction = function(){} //Fonctions


// 1er type: Number

let varNumber = 5;
varNumber = 5_5_5_5;//pas mal pour séparer les milliers ou noter un numero de tel, il n'influence pas le résultat. C'est pour le confort de lecture
varNumber = 5.6469;
varNumber = 5e6;// equivaut au nombre de 0 après le 5
varNumber = 0xF;//hexadécimal, équivaut à 15
varNumber = 0b1101; //binaire // équivau à 15
varNumber = 0o17; //octal, base 8 // équivaut à 15

const input = prompt("Veuillez entrer un nombre: ");
console.log(typeof(input));
console.log(input +10);
console.log(parseInt(input)+10); //Fait un floor de base, arrondit le nombre vers le bas.
// NB: si pas nombre décimal, dans la parenthèse en deuxième argument mettre le nombre de la base qu'il doit utiliser.
console.log(parseFloat(input)+10);//pour gérer la virgule,

// Les opération arithmétiques.

const a = 7 , b = 5; // On peut faire plusieurs déclarations sur une ligne 
let result;//On peut déclarer une variable sans donner de valeur mais pas une constante!

result =  a + b; //12
result =  a - b; //2
result =  a * b; //35
result =  a / b; //1.4 Divion entière: Math.floor(a/b) = 1
result =  a % b; //modulo, 2 (on retire 5, il reste 2)
result =  a ** b; //puissance, 16 807

// Incrémentation et décrémentation

        //Attention en fonction de ce qu'on veut récupérer au placement des + et des -! On aura des valeurs différentes!
result = 0
console.log(result ++); // 0 //On récupère d'abord la valeur et puis on incrémente
console.log(++result); // 2 // On incrémente puis on la récupère
console.log(result --); // 2 // On récupère d'abord la valeur et puis on décrémente
console.log(--result );// 0

console.log(result); //0

// Gérer le NaN

const aParser1 = '5'
const nePeutPasEtreParse1 = isNaN(aParser1) //if false
const valeur1 = parseInt(aParser1)//5

const aParser2 = 'salut'
const nePeutPasEtreParse2 = isNaN(aParser2) //if true
const valeur2 = parseInt(aParser2)//NaN


// 2ème type: les chaînes de caractères
let chaine = "ma chaine de caractères"

// Quelques fonctions pratiques:

console.log(chaine.length);//récupère la taille
console.log(chaine.charAt(1));// "a" //récupère l'élément en position 1
console.log(chaine.substring(3,9)); // 'chaine' //Récupère les caractères entre les positions 3 et 9 non compris
console.log(chaine.split(' '));// renvoie un tableau qui contient:['ma','chaine','de','caractères']
console.log(chaine.indexOf("de"));//10 // quelle est la première occurence de "de"
chaine.reverse() //Inverse l'ordre des éléments


// 3. Les tableaux

const tab = [];
tab = ["valeur",1,true]
// ou
let tab2 = new Array("valeur",1,true) //déprécié

    // Quelques fonctions utiles
    console.log(tab.length);

        // Ajouter 
    tab.push('ajouté à la fin') // équivaut à append en php
    tab.unshift("ajouté au début") // ajoute au début et bouge tous les index

        // Supprimer
    tab.pop()//récupère l'élément supprimé et donne sa valeur si on veut travailler avec 
    tab.shift() //inverse de unshift: enlève le 1er élément et update les index

        // Récupérer un élément
    tab[1]; // récupère l'élément en position 1, doit être un nbr entier! Si pas dans le tableau, il ressort undefined

        // Modifier une case
    tab[1] = 4;// A la position 1, je veux la valeur "4"
    // Si on ajoute uen valeur pour une position plus élevée que la logueur du tableau: il l'ajoute et fait semblant qu'il y a des espaces vides entre, qui auront la valeur undefined

        // Map, filter, sort,..
        // Splice (=couteau suisse pour faire une action à une position particulière, fonctionne avec 3 paramètres)
    tab.splice(1,2,"salut")//index de départ, index de remplacement, valeur. tab.splice (indexDepart, nombreIndexSupprimés, remplacement(autant qu'on veut! même aucun!))

        // Join
    tab.join('/') //Il va concacténer les éléments du tableau (et faire une string) et les séparer avec l'élément entre parenthèses.sinon on fait (""). Ici va donner 1/2/3 (ou 123 si "")

        // Split
    tab.split("")//Va spliter les différents éléments d'une chaine de caractère en les séparant par un espace et donne un tableau. Ici Donne [1,2,3] 

// 4. Dates

const now = new Date();// Date à l'instant t
const janv1900 = new Date(1990,0,1,12,30,2,999)//janvier est le premier mois, on note l'inex et non ne numéro du mois!
const formate = new Date('2020-01-01')
const timeStamp = new Date(1717962766)//nombre de milisecondes écoulées depuis 1er janvier 1970

    //Fonctions 

    now.getFullYear()
    now.getMonth()
    now.getDate()
    now.getHours()
    now.getMinutes()
    now.getSeconds()
    now.getMilliseconds

    // Sinon aller voir dans la librairie date-fns, indispensable pour les dates
    

