"use strict";

// Task1.Destructuring
function task1 () {
    let arr = ["Tom", "Sam", "Ray", "Bob"];
    let [x, y, z] = arr;
    console.log(x);
    console.log(y);
    console.log(z);
}
//task1();


// Task2.Destructuring
function task2() {
    let names = {
        first:"Tom", 
        second: "Sam", 
        third: "Ray", 
        fourth: "Bob"
    };
    let {first: x, second: y, fifth: f = "Name №5"} = names;
    console.log(x);
    console.log(y);
    console.log(f);
}
//task2();


// Task3.Destructuring
function task3 () {
    let data = {
        names: ["Sam", "Tom", "Ray", "Bob"],
        ages: [20, 24, 22, 26],
    };
    let {names: [, name2, , name4], ages: [, age2, ,age4]} = data;
    console.log(name2);
    console.log(age2);
    console.log(name4);
    console.log(age4);
}
//task3();
