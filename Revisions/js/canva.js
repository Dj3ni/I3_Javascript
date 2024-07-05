// Tableau des couleurs

const COLOR_TAB_DIV = document.getElementById("colorTable");
const COLOR_TAB = ["yellow","red","green","blue","orange","pink","grey","purple","aliceblue","brown"];

let currentColor; //variable qui va mémoriser la couleur clickée

createColorGrid(COLOR_TAB,COLOR_TAB_DIV); //appel au constructeur de la palette

//Récupérer les éléments du DOM pour créer le canva

const ROWS = document.getElementById("height");
// console.log (ROWS);
const COLS = document.getElementById("width");
// console.log(COLS);
const CREATE_BTN = document.querySelector("button");
const CANVAS = document.getElementById("canvas");


// Event listener on the button
CREATE_BTN.addEventListener("click", createPixelGrid);


function createPixelGrid(){
    let rows = ROWS.valueAsNumber;
    let cols = COLS.valueAsNumber;

    // Clear the existing grid
    CANVAS.innerHTML = "";

    // I give de dimensions for the GRID
    CANVAS.style.gridTemplateRows = `repeat(${rows}, 40px)`;
    CANVAS.style.gridTemplateColumns = `repeat(${cols}, 40px)`;

    // I create Divs
    for(let i = 0; i < (rows * cols); i++){
        // Create DIV
        const PIXEL_DIV = document.createElement("div");
        // Giving class to give CSS
        PIXEL_DIV.classList.add("pixel");
        // Giving listener
        PIXEL_DIV.addEventListener("click",()=>{
            PIXEL_DIV.style.backgroundColor = currentColor;
        })
        // Adding to HTML
        CANVAS.appendChild(PIXEL_DIV);
    }
}

function createColorGrid(tab, div){
    // Empty previous Grid
    div.innerHTML = "";
    for (const color of tab) {
        // Create DIV
        const COLOR_DIV = document.createElement("div");
        // Give class
        COLOR_DIV.classList.add("colors");
        COLOR_DIV.classList.add(color);
        // Give background color
        COLOR_DIV.style.backgroundColor = color;
        // Give listener
        COLOR_DIV.addEventListener("click",()=>{
            currentColor = color;
            console.log(currentColor);
        })
        // Add to HTML
        div.appendChild(COLOR_DIV);
    }
}



