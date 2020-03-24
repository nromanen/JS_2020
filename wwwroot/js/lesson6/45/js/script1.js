'use strict';
alert("Привет, Мир!","from alert");
console.log("Hi, world", "from console");
var variable1 = "var1";
var variable1 = "var2";
//let var = 3;
let _var = 3;
//let 1var = 3;
//variable2 = 3;

let variable2 = "variable2";
console.log("type of variable2", typeof(variable2));

variable2 = 2;
console.log("type of variable2", typeof(variable2));

var global = this; 
                   
function f(x) {
  var a = 12;
  global.b = a + x * 35;
}
f(42);

function f2(x) {
  var a = 12;
  b = a + x * 35; // error!
}
f(42);

alert("And.. ");

let isOk;
do {
	let age = prompt('How old are you?');
	if (!Number(age) || age <0 || age > 150){ // Is it OK???????
		alert("Really?");
		isOk = false;
	}
	else {alert("You have been tested"); isOk = true;}
}
while (!isOk)



	function sum1(x, y, z) {
   if (y === undefined) {
      y = 0;
   }
   if (z === undefined) {
      z = 0;
   }
   var res = x + y + z;
   alert(res);
   console.log(res);
}

sum1(1); // 1
sum1(1, 2); // 3
sum1(1, 2, 3); // 6

	function sum2(x, y=0, z=0) {
   res = x + y + z;     // //'use strict';
   console.log(res);
   alert(res);
}

sum2(1); // 1
sum2(1, 2); // 3
sum2(1, 2, 3); // 6
alert(res);
	