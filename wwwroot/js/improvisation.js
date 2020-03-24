"use strict";

function sumSliceArray(arr, first, second) {
    if (first > arr.length) {
        console.error(`Index "${first}" out of range`);
    } else if (second > arr.length) {
        console.error(`Index "${first}" out of range`);
    } else {
        console.log(`Sum of elements is: ${arr[first - 1] + arr[second - 1]}`);
    }
}

let arr = [1, 2, 3, 4, 5];
//sumSliceArray(arr, 12, 5);


function userInteraction() {
    let input = [];
    while (true) {
        let value = prompt("Enter string");
        input.push(value);
        if (value === "end") {
            break;
        }
    }

    input.forEach(element => {
        if (Number.isFinite(element)) {
            element = "Numbers: " + element;
        } else {
            element = "No numbers: " + element;
        }
        console.log(element);
    });
}
userInteraction();