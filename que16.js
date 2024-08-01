const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));
let b=parseFloat(readlineSync.question("enter the b :"));
let c=parseFloat(readlineSync.question("enter the c :"));
let d=parseFloat(readlineSync.question("enter the d :"));


if(a>b && a>c && a>d){
    console.log(a);
}
else if(b>c && b>a && b>d){
    console.log(b);
}
else if (c>a && c>b && c>d){
    console.log(c);
}

else if(d>a && d>b && d>c){
    console.log(d);
}
