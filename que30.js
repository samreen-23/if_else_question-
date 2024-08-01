const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a"));
let b=parseFloat(readlineSync.question("enter the b"));
let c= parseFloat(readlineSync.question("enter the c"));


let semiprimeter=(a+b+c)/2;
console.log(semiprimeter);

