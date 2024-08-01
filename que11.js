const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));
let b=parseFloat(readlineSync.question("enter the b :"));


a=a+b;
 b=a-b;
a=a-b;
console.log(a);
console.log(b);