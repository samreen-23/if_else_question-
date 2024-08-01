const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));
let b=parseFloat(readlineSync.question("enter the b :"));
let c=parseFloat(readlineSync.question("enter the c :"));



// let max; smax;

if(a>b){
    max=a,smax=b
}
else{
    max=b,smax=max
    console.log(smax);
}
if(c>max){
    smax=max,max=c
}
else if(c>smax){
    smax=c
}
console.log(smax);
