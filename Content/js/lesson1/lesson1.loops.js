"use strict";

// Task5.Loops
// (a > b)
let a = 6;
let b = 5;

while (a > b) {
    a -= b;
}

alert(`Task5.Loops \nThe length of the free part is ${a}`);

// Task6.Loops
// n (>0)
let n = 35;
let numRepr = new String(n);
let numReprLength = numRepr.length;

while (numReprLength > 0) {
    alert(`Task6.Loops \n${numRepr.charAt(--numReprLength)}`);
}

// Task7.Loops
// (a < b)
a = 1;
b = 5;
let sum = 0;

for (; a <= b; a++) {
    sum += a;
}

alert(`Task7.Loops \nSumm of numbers is ${sum}`);

// Task8.Loops
// (n > 0)
n = 5;
let f = 1;

for (; n > 1; n--) {
    f *= n; 
}

alert(`Task8.Loops \nFactorial of ${n} is ${f}`);