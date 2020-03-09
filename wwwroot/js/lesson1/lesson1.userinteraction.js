"use strict";

// Task2.Connection
function task2() {
    //alert("Task2.Connection \nHello, Andrii");
    console.log("Task2.Connection \nHello, Andrii");
}
task2();

// Task5.UserInteraction
function task5() {
    let name = null;
    do {
        name = prompt("Enter your name:")
    }
    while (name == null || !name);
    console.log(`Task5.UserInteraction \n${name} Welcome to Javascript Fundamental!`);
}
task5();
