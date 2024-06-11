const CALC = document.querySelectorAll("td")
console.log((CALC));
const PROMPT = document.getElementById ("prompt")

CALC.addEventListener("click",function(){
    PROMPT.value += CALC
})