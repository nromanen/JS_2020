// Task 1: rewrite function 'add()' with Function Expression
let add = function (x, y) {
    return x + y;
}

// Test for Task 1 
console.log(add(4, 5))

// Task 2: write function 'createArrayIterator()' which will return each element of the array
function createArrayIterator(array) {
    let i = 0;
    return function () {
        return arr[i++]
    }
}

// Tests for Task 2
var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined

// Task 3: write code for 'safe' calculation of the perimeter and area of the rectangle 
function sqrP() {
    let numA = 0;
    let numB = 0;
    let arr = [];
    arr[0, 1] = (a, b) => {
        if (a > 0 && b > 0) {
            numA = a;
            numB = b;
        }
    };
    arr[2] = () => {
        return `Perimeter is ${(numA + numB) * 2}. Square is ${numA * numB}`;
    }
    return arr;
}

// Tests for Task 3
let counter = sqrP();
counter[0, 1](6, 9);
console.log(counter[2]());
counter[0, 1](6, -8);
console.log(counter[2]());
counter[0, 1](0, 0);
console.log(counter[2]());
counter[0, 1](2, 2);
console.log(counter[2]());
counter[0, 1](-6, 2);
console.log(counter[2]());

// Task 4: write recursive function 'digitSum(k)' which will return the sum of the digits of the integer 'k', without using loops
function digitSum(k) {
    if (k === 0) {
        return 0;
    } else if (k === 1) {
        return 1;
    } else {
        return k + digitSum(k - 1);
    }
}
// Test for Task 4
console.log(digitSum(5));
console.log(digitSum(9));

// Task 5: write code for redefining of the function 'format(data, type)' depending on the 'type' parameter 
function format(data, type) {
    if (type === 'number') {
        format = function () {
            return +data;
        }
    } else if (type === 'boolean') {
        format = function () {
            return Boolean(data);
        }
    } else if (type === 'string') {
        format = function () {
            return '' + data + '';
        }
    }
}

// Test for Task 5
var originFormat = format;

format("1", "number");
console.log(format()); // 1
console.log(typeof format()); // "number"

originFormat("Hello", "boolean");
console.log(format()); // true
console.log(typeof format()); // "boolean"

originFormat(true, "string");
console.log(format()); // "true"
console.log(typeof format()); // "string"