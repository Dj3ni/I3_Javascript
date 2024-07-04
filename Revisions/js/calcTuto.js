// DOM
const KEYPAD = [...document.querySelectorAll(".button")];
console.log(KEYPAD);

const KEY_CODES = KEYPAD.map(element => element.dataset.key)
console.log(KEY_CODES);

const SCREEN = document.querySelector(".screen");

document.addEventListener("keyup",(event)=>{
    const value = event.key.toString();
    calculate(value);
    console.log(value);
})

document.addEventListener("click",(event)=>{
    const value = event.target.dataset.key;//
    calculate(value);
    // console.log(value);
    // console.dir(event.target);
})

function calculate(value){
    if(KEY_CODES.includes(value)){// Je ne calcule que si la touche utilisée fait partie de ma liste , sinon je fais rien
        // console.log(KEY_CODES);
        switch(value){
            case"8":
                SCREEN.textContent = "";
                break;

            case "187":
                const CALCULATE = eval(SCREEN.textContent);
                SCREEN.textContent = CALCULATE;
                break;
                
            default:
                const INDEX_KEY_CODE = KEY_CODES.indexOf(value);
                const KEY_PRESSED = KEYPAD[INDEX_KEY_CODE];
                SCREEN.textContent += KEY_PRESSED.innerHTML;
        }
    }
}

window.addEventListener("error",(event)=>{
    alert("Une erreur est survenue dans votre calcul: " + event.message);
})