const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));
let b=parseFloat(readlineSync.question("enter the b :"));
let c=parseFloat(readlineSync.question("enter the c :"));


if(a>b && a>c){
    console.log(a);
}
else if(b>c && b>a){
    console.log(b);
}
else if (c>a && c>b){
    console.log(c);
}

