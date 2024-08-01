const readlineSync = require("readline-sync");
let a = parseFloat(readlineSync.question("Enter the a: "));
let b = parseFloat(readlineSync.question("Enter the b: "));
let c = parseFloat(readlineSync.question("Enter the c: "));
let d = parseFloat(readlineSync.question("Enter the d: "));

let max, smax, tmax;

if (a > b) {
    max = a;
    smax = b;
} else {
    max = b;
    smax = a;
}

if (c > max) {
    tmax = smax;
    smax = max;
    max = c;
} else if (c > smax) {
    tmax = smax;
    smax = c;
} else {
    tmax = c;
}

if (d > max) {
    tmax = smax;
    smax = max;
    max = d;
} else if (d > smax) {
    tmax = smax;
    smax = d;
} else if (d > tmax) {
    tmax = d;
}

console.log( tmax);

