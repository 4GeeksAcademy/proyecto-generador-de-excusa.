import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
let who = ['la lora', 'la cucaracha', 'el drilococo', 'la sarigueya'];
let action = ['cotorreaba', 'se revolcaba', 'tomaba el sol', 'se electocutaba'];
let what = ['en casa', 'en el piso', 'en el rio', 'por accidente'];
let when = ['cuando hay compañia', 'cuando la fumigaron', '', 'para calentarse', 'sobre una fuente electrica'];

const pickRandomElement = (array) => array[Math.floor(Math.random() * array.length)]
let excusa = [pickRandomElement(who)] + " " + [pickRandomElement(action)] + " " + [pickRandomElement(what)] + " " + [pickRandomElement(when)];
document.getElementById("excusas-random").textContent = excusa;
};
