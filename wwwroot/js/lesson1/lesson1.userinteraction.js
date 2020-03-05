"use strict";

// Task2.Connection
alert("Task2.Connection \nHello, Andrii");

// Task5.UserInteraction
let name = null;
do {
    name = prompt("Enter your name:")
}
while (name == null || !name);
alert(`Task5.UserInteraction \n${name} Welcome to Javascript Fundamental!`);
