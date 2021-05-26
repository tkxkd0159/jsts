require('dotenv').config()

import defaultMyfunc, { studentNumber, myName } from "./modules/my-module";


let message: string = 'Hello World';
const mine = "3.11";
var mine2 = "3.567";
let mine3 = "4.2";


// document.body.innerHTML = message;
// document.body.innerHTML = mine;
// document.body.innerHTML = mine2;
// document.body.innerHTML = mine3;

// console.log(studentNumber);
// console.log(myName);
// console.log(defaultMyfunc);
console.log(`My env is ${process.env.MY_WIN_PATH}`);

// (() => {console.log("IIFE")})(); // Immediately Invoked Function Expression