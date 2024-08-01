const readlineSync = require('readline-sync');

let  length= readlineSync.questionInt("enter the length:"); 
let height = readlineSync.questionInt("enter the height:");
let width = readlineSync.questionInt("enter the width:");



let volume=length*(width*height);


 console.log(volume);



 