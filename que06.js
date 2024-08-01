// const redlineSYynce=require("readline-synce");
// let=a=redlineSYynce.questionsInt("enter a:");
// let=b=readlineSynce.questionsInt("enter b");
// let=c=readlineSynce.questionsInt("enter c");

// a=b;
// b=c;
// c=a;
// console.log(a,b);


const readlineSync = require("readline-sync");

let a = readlineSync.questionInt("Enter a: ");
let b = readlineSync.questionInt("Enter b: ");
let c ;


c = a;
a = b;
b = c;

console.log(a, b);
