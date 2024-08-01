let readlineSync=require("readline-sync");
let s = readlineSync.questionInt("enter the length");
let height=readlineSync.questionInt("enter the height");
let width=readlineSync.questionInt("enter the width");




let LateralSurfaceArea = 2 * height * (s + width);
let TotalSurfaceArea = 2 * (s * width + width * height + height * s);
console.log(LateralSurfaceArea);
console.log(TotalSurfaceArea);