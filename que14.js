const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));



if(a>0){
    console.log("postive");
}
else if(a<0){
    console.log("negative");
}else
console.log("zero");

