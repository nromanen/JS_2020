"use strict";

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
        return () => console.log(`"${this.name}"`);
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
        callback(() => {
            return this.data + "";
        });

        // callback((function () {
        //     return this.data + "";
        // }).bind(this));
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
        return (callback) => {
            this.result = callback();
        }

        // return (function (callback) {
        //     this.result = callback();
        // }).bind(this);
    }
 };
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"
