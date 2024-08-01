const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));
let b=parseFloat(readlineSync.question("enter the b :"));



let addition= (a + b);
let subtraction=(a - b);
let multiplication=(a * b);
let divison=(a/b);
let integerdivison=(a /b);
let modulus = (a%b);


console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(divison);
console.log(integerdivison);
console.log(modulus);

