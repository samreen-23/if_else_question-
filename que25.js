const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a"));
let b=parseFloat(readlineSync.question("eter the b"));

 
 c=a;
 a=b;
 b=c;
 
 console.log(a);
 console.log(b)