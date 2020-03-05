"use strict";

// Task1.Destruction
function task1 () {
    let arr = ["Tom", "Sam", "Ray", "Bob"];
    let [x, y, z] = arr;
    console.log(x);
    console.log(y);
    console.log(z);
}
//task1();

// Task2.Destruction
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

// Task3.Destruction
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

// Task4.Functions
function mul(...rest) {
    let isNumberEvel = false;
    let m = 0;
    for (let val of rest) {
        if (Number.isFinite(val)) {
            if (!isNumberEvel) {
                isNumberEvel = true;
                m = 1;
            }
            m *= new Number(val);
        }
    }
    return m;
}
//console.log(mul(1, "str", 2, 3, true));
//console.log(mul(null, "str", false, true));
//console.log(mul());

// Task5.Functions
let obj = {
    name: "obj",
    print: function () {
        let f = () => console.log(`"${this.name}"`);
        return f;
    }
};
function multiCaller(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}
//multiCaller(obj.print(), 3);

// Task6.Functions
let server = {
    data: 0,
    convertToString: function (callback) {
        //(this) => {}
        callback((function () {
            return this.data + "";
        }).bind(this));
    }
 };
 let client = {
    server: server,
    result: "",
    calc: function (data) {
       this.server.data = data;
       this.server.convertToString(this.notification());
    },
    notification: function () {
       return (function (callback) {
          this.result = callback();
       }).bind(this);
    }
 };
 client.calc(123);
 console.log(client.result); // "123"
 console.log(typeof client.result); // "string"
   