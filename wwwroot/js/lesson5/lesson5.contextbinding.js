"use strict";

// Task1.Context binding
let user = {
    name: "Tom"
};
function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}

// Variant1 (Task1.Context binding)
let tomFormat1 = format.bind(user);
tomFormat1("<<<", ">>>");

// Variant2 (Task1.Context binding)
let tomFormat2 = {
    name: "Tom",
    format: function (beginMsg, endMsg) {
        console.log(beginMsg + this.name + endMsg);
    }
}
tomFormat2.format("<<<", ">>>");


// Task2.Context binding
function mul(a, b) {
    return a * b;
}
let doubleMul = mul.bind(null, 2);
let qudraMul = mul.bind(null, 4);
console.log(doubleMul(5)); // 10
console.log(qudraMul(5)); // 20


// Task3.Context binding
function bind(func, context) {
    return () => {
        func.call(context);
    }
}
function func() {
    console.log(this.name + " - "+ this.age);
}
user = {
    name: "Tom",
    age: 20
};
let f = bind(func, user);
f(); // "Tom – 20"
