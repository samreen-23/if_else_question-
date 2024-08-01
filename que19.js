const readlineSync=require("readline-sync");
let a=parseFloat(readlineSync.question("enter the a :"));


if(a<=10000){
    hra=a*2/100;
    da=a*80/100;
    total=a+hra+da;
}
else if(a<20000){
    hra=a*25/100;
    da=a*90/100
    total=a+hra+da;
}
else if (a>20000){
    hra=a*30/100;
    da=a*95/100;
    total=a+hra+da
}
console.log(total);
