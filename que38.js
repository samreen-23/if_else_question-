const readlineSync=require("readline-sync");
let n=readlineSync.questionInt("enter the n");

let sum=0;
let i=1;
while(i<=n){
sum+=i;
i++;
}console.log(sum);
