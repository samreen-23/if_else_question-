const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));



if(a%2==0){
console.log("even");
}
else
console.log("odd");
