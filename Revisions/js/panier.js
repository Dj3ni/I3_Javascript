// Récupérer les éléments pour le panier

const PRICE = document.querySelectorAll("table td:nth-child(2)");
// console.dir(PRICE)
const PANIER = document.querySelectorAll("table td:nth-child(3)");
// console.dir(PANIER);
const ROW = document.querySelectorAll("#articles tbody tr");
// console.dir(ROW);
const ARTICLE_TABLE = document.getElementById("articles");
// console.dir(ARTICLE_TABLE);




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
    addToCart(PRODUCT_ROW,SUB_TOTAL,QUANTITY);

    // ajout du bouton clear cart
    addClearBtn();

    // Mise à jour de ligne de Total
    updateTotal();

    })
}

function addClearBtn(){
    // Récupérer les éléments pour le bouton Vider Panier
    const CLEAR_BTN = document.getElementById("btnClear");
    console.log (CLEAR_BTN);
    const CART_TABLE = document.getElementById("panier");
    console.dir(CART_TABLE);

    // Si le bouton n'existe pas encore, je le génère et ajoute l'évènement
    if(!CLEAR_BTN){
        // Je crée le bouton et la td qui va l'accueillir ( ici th car je le me dans le thead)
        let clearBtn = document.createElement("button");
        const TH = document.createElement("th");
        // console.log(TH);

        // Je leur donne une valeur 
        clearBtn.textContent = "Vider le panier";
        clearBtn.id = "btnClear";
        

        // Je crée l'évènement sur le bouton vider Panier
        clearBtn.addEventListener("click",function(){
            while (CART_TABLE.children[2]){
                CART_TABLE.removeChild(CART_TABLE.children[2]);
                // Si c'est la dernière ligne, je n'efface pas, je refais un update du total
            //     if (CART_TABLE.children[2].id === "total" ){
            //         updateTotal();                
            //         break;
            //     }
            }
        })

        // Je les ajoute dans le HTML
        TH.appendChild(clearBtn);
        CART_TABLE.children[0].lastElementChild.appendChild(TH);
    }
}


function addToCart(PRODUCT_ROW,SUB_TOTAL,QUANTITY){

    const CART_TAB = document.getElementById("panier")

    if(checkArticleName(PRODUCT_ROW,SUB_TOTAL,QUANTITY) === false){
            // Je crée une nouvelle ligne
        const CART_ROW = document.createElement("tr");
        const CART_ARTICLE = document.createElement("td");
        const CART_QUANTITY = document.createElement("td");
        const CART_SUB = document.createElement("td");
        const REMOVE_ARTICLE = document.createElement("button");
    
        // Je leur donne des valeurs
        CART_ARTICLE.innerText = PRODUCT_ROW.children[0].textContent;
        CART_SUB.innerText = SUB_TOTAL;
        CART_QUANTITY.innerText = QUANTITY;
        REMOVE_ARTICLE.innerText = "❌";

        // Je les ajoute dans HTML
        CART_ROW.appendChild(CART_ARTICLE);
        CART_ROW.appendChild(CART_QUANTITY);
        CART_ROW.appendChild(CART_SUB);
        CART_ROW.appendChild(REMOVE_ARTICLE);

        const TOTAL_TAB = document.getElementById("total");

        if(!TOTAL_TAB){
            CART_TAB.appendChild(CART_ROW);
        }
        else{
            CART_TAB.insertBefore(CART_ROW, TOTAL_TAB);
        }

        // J'ajoute l'évènement pour le bouton remove (à terminer, ne marche pas)
        REMOVE_ARTICLE.addEventListener("click",(event)=>{
            const CURRENT_ROW = event.target.parentNode;
            CURRENT_ROW.remove();
            updateTotal();
        });
    } 
    
}


function checkArticleName(PRODUCT_ROW,SUB_TOTAL,QUANTITY){ 
    //Cette fonction me permet de voir si la ligne existe déjà dans mon panier et si oui de mettre à jour quantités et montants

    const CART_ROWS = document.querySelectorAll("#panier tr:not(totalLine)");
    const PRODUCT_NAME = PRODUCT_ROW.children[0].innerText;

    let found = false;

    for (const row of CART_ROWS) {
            // Si trouvé, mettre sous-total à jour
        if(row.children[0].innerText === PRODUCT_NAME){
            // On sauvegarde le montant actuel
            const CURRENT_CART_SUBTOTAL = parseFloat(row.children[2].innerText);
            const CURRENT_CART_QUANTITY = parseInt(row.children[1].innerText);
            // On calcule le nouveau montant
            const NEW_CART_SUBTOTAL = (CURRENT_CART_SUBTOTAL + parseFloat(SUB_TOTAL)).toFixed(2);
            const NEW_CART_QUANTITY = (CURRENT_CART_QUANTITY + parseInt(QUANTITY));
            // On fait la mise à jour du montant dans le tableau
            row.children[2].innerText = NEW_CART_SUBTOTAL;
            row.children[1].innerText = NEW_CART_QUANTITY;
            found = true;
            break //Si trouvé, ça ne sert à rien de continuer à boucler!
        }
    }
    return found;
}

function updateTotal(){
    // Cette fonction me permet de mettre à jour la ligne de total
    
    let total = 0;
    let totalQuantity = 0;

    // Je vais chercher les éléments    
    const TOTAL_TAB = document.getElementById("total");
    const TOTAL_LIST = document.querySelectorAll("#panier tr td:nth-child(3):not(#totalLine)");
    const TOTAL_QUANTITY_LIST = document.querySelectorAll("#panier tr td:nth-child(2):not(#totalLineQuantity)");
    // console.dir(TOTAL_LIST)

    // J'itère dans le tableau pour calculer le montant total
    for (const i of TOTAL_LIST) {
        total = total + parseFloat(i.innerText);        
    }

    // J'itère dans le tableau pour calculer la quantité totale
    for(const i of TOTAL_QUANTITY_LIST){
        totalQuantity = totalQuantity + parseInt(i.innerText);
    }

    // Je vérifie si la ligne de total existe sinon je l'ajoute au tableau
    let totalLine = document.getElementById("totalLine");
    let totalLineQuantity = document.getElementById('totalLineQuantity');
    if(!totalLine && !totalLineQuantity){

        // Je crée les élements de ma ligne
        const TOTAL_ROW = document.createElement("tr");
        const TOTAL_TD = document.createElement("td");
        const TOTAL_QUANTITY = document.createElement("td");
        const TOTAL_VALUE = document.createElement("td");

        // Je leur donne une valeur
        TOTAL_TD.innerText = "Total de la commande: ";
        totalLineQuantity = TOTAL_QUANTITY;
        totalLineQuantity.id = "totalLineQuantity";
        totalLine = TOTAL_VALUE;
        totalLine.id = "totalLine";

        // Je les ajoute au HTML
        TOTAL_ROW.appendChild(TOTAL_TD); 
        TOTAL_ROW.appendChild(totalLineQuantity);
        TOTAL_ROW.appendChild(totalLine);
        TOTAL_TAB.appendChild(TOTAL_ROW);
    }
    
    // Je mets à jour le contenu de ma case Total
    totalLine.textContent = `${total.toFixed(2)}`;
    totalLineQuantity.textContent = `${totalQuantity}`;
}

