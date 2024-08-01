const readlineSync =require("readline-sync");
let length=(readlineSync.question("enter the lenth"));




let area=(length*length);
let perimeter=(4*length);
console.log(area);
console.log(perimeter);