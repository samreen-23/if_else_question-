const readlineSync=require("readline-sync")
let base= parseFloat(readlineSync.question(" enter the base"));
let height=parseFloat(readlineSync.question("enter the height"));


let Average=(1/2*base*height);
console.log(Average)