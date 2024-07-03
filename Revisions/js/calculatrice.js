const SCREEN = document.getElementById("screen");
console.log(SCREEN);
const tdBtn = document.querySelectorAll("td");
console.log(tdBtn);


for (const button of tdBtn) {
    button.addEventListener("click",function(){
        // Si le contenu est chiffré, je note dans l'écran 
        if(!isNaN(parseInt(button.textContent))){
            SCREEN.textContent += button.textContent;
        }
        else{
            // Je clear tout
            if(button.textContent === "C"){
                SCREEN.textContent = "";
            }
            else if(button.textContent === "="){
                // Je prend toute la string et la décompose avec les opérateurs

            }
            else if(button.textContent === "( )"){
                // Si première fois, on note "(" sinon ")"
            }

            else{
                SCREEN.textContent += button.textContent;
            }
        }
    })
    
    

}





