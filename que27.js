const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a"));
let b= parseFloat(readlineSync.question("enter the b"));



let addition=(a+b);
let subtraction=(a-b);
let divison=(a/b);
let multiplication=(a*b);

console.log(addition)
console.log(subtraction)
console.log(divison);
console.log(multiplication);