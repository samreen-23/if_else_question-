const readlineSync = require('readline-sync');

let a = parseFloat(readlineSync.question("Enter the a: "));
let b = parseFloat(readlineSync.question("Enter the b: "));
let c = parseFloat(readlineSync.question("Enter the c: "));
let d = parseFloat(readlineSync.question("Enter the d: "));
let e = parseFloat(readlineSync.question("Enter the e: "));
let f = parseFloat(readlineSync.question("Enter the f: "));
let g = parseFloat(readlineSync.question("Enter the g: "));
let h = parseFloat(readlineSync.question("Enter the h: "));



let max, smax

if(a>b){
    max=a;
    smax=b
}
else {
    max=b;
    smax=a;
}
if(c>max){
    smax=max;
    max=c;
    
}
else if(c>smax){
    smax=c;
}
 if (d>max){

    smax=max;
    max=d;
}
else if (d>smax){
    smax=d;
}
 if(e>max){
    
    smax=max;
    max=e;
}
else if(e>smax){
    smax=e;
}
 if(f>max){
    
    smax=max;
    max=f;
}
else if(f>smax){
    smax=f;
}
 if(g>max){
    
    smax=max
    max=g;
}
else if(g>smax){
    smax=g;
}
if(h>max){
    smax=max;
    max=h;
    
}
 else if(h>smax){
    smax = h
 }  console.log(smax);











