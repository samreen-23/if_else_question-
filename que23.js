const readlineSync=require("readline-sync");
let a = parseFloat(readlineSync.question(" enter the a"));
let b = parseFloat(readlineSync.question("enter the b"));
let c = parseFloat(readlineSync.question("enter the c"));
let d = parseFloat(readlineSync.question("enter the d"));
let num = parseFloat(readlineSync.question("enter the num"));

let Average=(a+b+c+d)/num
console.log(Average);