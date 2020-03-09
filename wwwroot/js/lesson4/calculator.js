"use strict";

// Task1.Key word this
var calculator = {
    value1: null,
    value2: null,
    read: function() {
        this.value1 = 3;//new Number(prompt("Enter first value"));
        this.value2 = 2;//new Number(prompt("Enter second value"));
    },
    sum: function() {
        return this.value1 + this.value2;
    },
    mul: function() {
        return this.value1 * this.value2;
    }
 };
calculator.read();
console.log(`Task1.Key word this \nCalculator, sum: ${calculator.sum()}`);
console.log(`Task1.Key word this \nCalculator, mul: ${calculator.mul()}`);