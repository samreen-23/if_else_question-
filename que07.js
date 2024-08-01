const readlineSync = require("readline-sync");
let divident = parseFloat(readlineSync.question("Enter the divident : "))
let divisor = parseFloat(readlineSync.question("Enter the divisor : "))


let quotient=divident/divisor;
let remainder=divident%divisor;
console.log(quotient);
console.log(remainder);