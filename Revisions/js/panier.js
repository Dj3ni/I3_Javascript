// Récupérer les éléments

const PRICE = document.querySelectorAll("table td:nth-child(2)");
console.dir(PRICE)
const PANIER = document.querySelectorAll("table td:nth-child(3)");
// console.dir(PANIER);
const ROW = document.querySelectorAll("#articles tbody tr");
console.dir(ROW);
const ARTICLE_TABLE = document.getElementById("articles");
console.dir(ARTICLE_TABLE);

// Je génère le tableau à partir d'une liste d'articles
let articleList = {
    "Lampe": 4.5,
    "Télévision": 300,
    "Coca": 2,
    "Plante": 15.50,
    "Chips": 1.5,
}

for (const article in articleList) {
    let price = articleList[article];
    console.log(price);
    // Je crée, TR et TD
    const CREATE_TR = document.createElement("tr");
    const ARTICLE_NAME = document.createElement("td");
    const ARTICLE_PRICE = document.createElement("td");
    // Je leur donne des valeurs
    ARTICLE_NAME.innerText = article;
    ARTICLE_PRICE.innerText = price;
    // Je les ajoute au doc HTML
    CREATE_TR.appendChild(ARTICLE_NAME);
    CREATE_TR.appendChild(ARTICLE_PRICE);

    // Je génère dynamiquement les boutons paniers

    // Je crée le bouton , l'input et la td qui va les contenir
    const TD = document.createElement("td");
    const panier = document.createElement("button");
    panier.innerText = "🛒";
    const INPUT = document.createElement("input");
    INPUT.setAttribute("type","number");
    INPUT.setAttribute("min","0");
    INPUT.setAttribute("value","1");

    // Je les ajoute au contenu HTML
    TD.append(INPUT);
    TD.append(panier);
    CREATE_TR.appendChild(TD);
    ARTICLE_TABLE.appendChild(CREATE_TR);

    // J'ajoute l'évènement sur le bouton panier

    panier.addEventListener("click", (event)=>{
        // Je vais chercher la valeur de l'article
    const PRODUCT_ROW = event.target.parentNode.parentNode;

    // Je cherche la valeur du produit
    PRODUCT_PRICE = PRODUCT_ROW.children[1].textContent.replace(",",".");
    console.log(PRODUCT_PRICE);

    // Je regarde la quantité sélectionnée
    QUANTITY = event.target.previousSibling.valueAsNumber
    console.log(QUANTITY);

    // Calculer le sous-total:
    let price = parseFloat(PRODUCT_PRICE).toFixed(2);
    const SUB_TOTAL = parseFloat(QUANTITY * price).toFixed(2);
    console.log(SUB_TOTAL);
        
    // ajout des produits au panier
    addToCart(PRODUCT_ROW,SUB_TOTAL);

    // Mise à jour de ligne de Total
    updateTotal();
        
    })
    // }
    
}






function addToCart(PRODUCT_ROW,SUB_TOTAL){

    // J'ajoute les produits dans mon panier
    const CART_TAB = document.getElementById("panier")
    // Je crée une nouvelle ligne
    const CART_ROW = document.createElement("tr");
    const CART_ARTICLE = document.createElement("td");
    const CART_SUB = document.createElement("td");
    // Je leur donne des valeurs
    CART_ARTICLE.innerText = PRODUCT_ROW.children[0].textContent;
    CART_SUB.innerText = SUB_TOTAL

    // Je les ajoute dans HTML
    CART_ROW.appendChild(CART_ARTICLE);
    CART_ROW.appendChild(CART_SUB);

    const TOTAL_TAB = document.getElementById("total");

    if(!TOTAL_TAB){
        CART_TAB.appendChild(CART_ROW);
    }
    else{
        CART_TAB.insertBefore(CART_ROW, TOTAL_TAB);
    }
}


function updateTotal(){
    
    let total = 0;
    // Je vais chercher les éléments
    
    const TOTAL_TAB = document.getElementById("total");
    const TOTAL_LIST = document.querySelectorAll("#panier tr td:nth-child(2):not(#totalLine")
    // console.dir(TOTAL_LIST)

    // J'itère dans le tableau pour calculer le total
    for (const i of TOTAL_LIST) {
        total = total + parseFloat(i.innerText);        
    }
    // Je vérifie si la ligne de total existe sinon je l'ajoute au tableau
    let totalLine = document.getElementById("totalLine");
    if(!totalLine){
        // Je crée les élemnets de ma ligne
        const TOTAL_ROW = document.createElement("tr");
        const TOTAL_TD = document.createElement("td");
        const TOTAL_VALUE = document.createElement("td");        
        // Je leur donne une valeur
        TOTAL_TD.innerText = "Total de la commande: ";
        totalLine = TOTAL_VALUE
        totalLine.id = "totalLine"
        // Je les ajoute au HTML
        TOTAL_ROW.appendChild(TOTAL_TD); 
        TOTAL_ROW.appendChild(totalLine);
        TOTAL_TAB.appendChild(TOTAL_ROW);
    }
    
    // Je mets à jour le contenu de ma case Total
    totalLine.textContent = `${total.toFixed(2)}`;
}

