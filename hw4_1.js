'use strict'
//let firstValue = prompt ("Enter first number");

//console.log()
var calculator = {
    a : 0,
    b : 0,
    read: function (){
    this.a = Number(prompt("Enter a"));
    this.b = Number(prompt ("Enter b"));
        console.log(this.a);
        console.log(this.b);
    },
    sum: function (){
        return (this.a + this.b);         
    },
    mul: function () {
        return (this.a * this.b);
    }       
};
calculator.read();
console.log (calculator.sum());
console.log (calculator.mul())