"use strict";

// Task5.Loops
function task5() {
    // (a > b)
    let a = 6;
    let b = 5;

    while (a > b) {
        a -= b;
    }

    console.log(`Task5.Loops \nThe length of the free part is ${a}`);
}
task5();

// Task6.Loops
function task6() {
    // n (>0)
    let n = 35;
    let numRepr = new String(n);
    let numReprLength = numRepr.length;

    while (numReprLength > 0) {
        console.log(`Task6.Loops \n${numRepr.charAt(--numReprLength)}`);
    }
}
task6();

// Task7.Loops
function task7() {
    // (a < b)
    let a = 1;
    let b = 5;
    let sum = 0;

    for (; a <= b; a++) {
        sum += a;
    }

    console.log(`Task7.Loops \nSumm of numbers is ${sum}`);
}
task7();

// Task8.Loops
function task8() {
    // Factorial n, (n > 0)
    let n = 5;
    let f = 1;

    for (; n > 1; n--) {
        f *= n; 
    }

    console.log(`Task8.Loops \nFactorial of ${n} is ${f}`);
}
task8();