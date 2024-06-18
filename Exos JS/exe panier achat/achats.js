// Boucler pour ajouter event sur tous les boutons

const ADDBTN = document.querySelectorAll("button.addBtn")
console.log(ADDBTN);


for (const button of ADDBTN){
    button.addEventListener("click", (event)=>{
        // Récupération de la ligne de produit
        const PRODUCT_ROW = event.target.parentNode.parentNode;
        
        // Extraction des enfants de la ligne
        const PRODUCT_PRICE = PRODUCT_ROW.children[1].textContent;
        console.log(PRODUCT_PRICE);
        let value = +PRODUCT_PRICE; // Je convertis en int ( attention, ValueAsNumber n'est que pour les input!)
    

        // Rechercher le total
        let total = document.getElementById("total")
        total.innerText = +total.innerText + value;
    })
}
