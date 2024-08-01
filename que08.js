const readlineSync=require("readline-sync");
let number =parseFloat (readlineSync.question("Enter the number : "));

let lastdit;

lastdit= number%10;
console.log(lastdit);