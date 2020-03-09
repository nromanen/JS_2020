"use strict";

// Task1.ConditionalStatements
function task1() {
    let num = 0;

    if (num > 0) {
        num++;
    } else if (num < 0) {
        num -=2;
    } else {
        num = 10;
    }
    console.log(`Task1.ConditionalStatements \nThe resulting number is ${num}.`);
}
task1();

// Task2.ConditionalStatements
function task2() {
    let num = -23;
    if ((num > 0) && (num % 2 === 0)) {
        console.log(`Task2.ConditionalStatements \nA positive even number`);
    } else if ((num > 0) && (num % 2 === 1)) {
        console.log(`Task2.ConditionalStatements \nA positive odd number`);
    } else if ((num < 0) && (Math.abs(num % 2) === 0)) {
        console.log(`Task2.ConditionalStatements \nA negative even number`);
    } else if ((num < 0) && (Math.abs(num % 2) === 1)) {
        console.log(`Task2.ConditionalStatements \nA negative odd number`);
    } else {
        console.log(`Task2.ConditionalStatements \nZero number`);
    }
}
task2();

// Task3.ConditionalStatements
function task3() {
    let numbers = [2, 2, 2, 4];  // [4, 2, 2, 4];

    if ((numbers[0] !== numbers[1]) && (numbers[1] === numbers[2])) {
        console.log(`Task3.ConditionalStatements \nThe sequence number is ${1}`);
    } else if ((numbers[0] !== numbers[1]) && (numbers[1] !== numbers[2])) {
        console.log(`Task3.ConditionalStatements \nThe sequence number is ${2}`);
    } else if ((numbers[2] !== numbers[3]) && (numbers[1] === numbers[2])) {
        console.log(`Task3.ConditionalStatements \nThe sequence number is ${4}`);
    } else if ((numbers[2] !== numbers[3]) && (numbers[1] !== numbers[2])) {
        console.log(`Task3.ConditionalStatements\nThe sequence number is ${3}`);
    } else {
        console.log(`Task3.ConditionalStatements\nIncorrect the numeric sequence!`);
    }
}
task3();

// Task4.ConditionalStatements
function task4() {
    let k = 5;

    switch (k) {
        case 1:
            alert("Task4.ConditionalStatements \nBad");
            break;
        case 2:
            alert("Task4.ConditionalStatements \nNot satisfactory");
            break;
        case 3:
            alert("Task4.ConditionalStatements \nSatisfactory");
            break;
        case 4:
            alert("Task4.ConditionalStatements \nGood");
            break;
        case 5:
            alert("Task4.ConditionalStatements \nExcellent");
            break;
        default:
            alert("ConditionalStatements. \nError");
    }
}
task4();