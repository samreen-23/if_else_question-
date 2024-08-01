const readlineSync=require("readline-sync");
let side=readlineSync.questionInt("enter the length");



let volume=side*side*side
console.log(volume);