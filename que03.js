const readlineSync=require("readline-sync");
let a=readlineSync.questionInt(" enter the a");
let b=readlineSync.questionInt("enter the b");

if(a>b){
    console.log(a);
}else{
    console.log(b);
}



