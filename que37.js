const readlineSync=require("readline-sync");
let a=readlineSync.questionInt("enter the a");
let b=readlineSync.questionInt("enter the b");
let c = readlineSync.questionInt("enter the c");



if(a>b){
    console.log(a)
} 
else if(b>c){
    console.log(b)
}else{
    console.log(c)
}