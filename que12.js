const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));
let b=parseFloat(readlineSync.question("enter the b :"));


if(a>b){
console.log(a);
}
else
console.log(b);
