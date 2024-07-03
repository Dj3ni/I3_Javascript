// DOM
const KEYPAD = [...document.querySelectorAll(".button")];
console.log(KEYPAD);

const KEY_CODES = KEYPAD.map(element => element.dataset.key)
console.log(KEY_CODES);