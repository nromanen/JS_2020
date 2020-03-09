"use strict";

// Task11. Functions
export function pow (x, n) {
    // return x ** n;
    return Math.pow(x, n);
}

// Task12. Functions
export function minMax(x, y) {
    return (x < y) ? x : y;
}

// Task13. Functions
export function sign(x) {
    if (x > 0) {
        return 1;
    } else if (x < 0) {
        return -1;
    } else {
        return 0;
    }
}


// Task14. Functions
export function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            try {
                return a / b;
            } catch (err) {
                return "Dividing by zero!"
            }
        default:
            return a + b;
    }
}
console.log(`Task14. Functions \nSubtract: ${calc(2, 3, 1)}`);
console.log(`Task14. Functions \nMultiply: ${calc(2, 3, 2)}`);
console.log(`Task14. Functions \nDevide: ${calc(2, 3, 3)}`);
console.log(`Task14. Functions \nAdd: ${calc(2, 3, 4)}`);
console.log(`Task14. Functions \nDevide: ${calc(2, 0, 3)}`);

// Task15. Functions
export function digitN(k, n) {
    
}