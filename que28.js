const readlineSync=require("readline-sync");
let length=parseFloat(readlineSync.question("enter the length"));
let width=parseFloat(readlineSync.question("enter the width"));

let area=(length*width);
let perimter=(2*(length+width));
console.log(area);
console.log(perimter);