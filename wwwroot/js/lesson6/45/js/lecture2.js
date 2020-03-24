
function display() {
   console.log("До переопределения");
   display = function () {
      console.log("После переопределения");
   };
}
display(); // "До переопределения"
display(); 



function createArrayIterator(array) {
   // Ваш код
   let index = 0;
   return function(){
	   return array[index++];
   };
}

var arr = [5, 3, 7];
var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined


function createSafeSQRT() {
   var num = 0;
   var arr = [];
   arr[0] = function (newNum) {
      if (newNum >= 0) {
         num = newNum;
      }
   };
   arr[1] = function () {
      return Math.sqrt(num);
   };
   return arr;
}


let r = createSafeSQRT();
r[0](3);
console.log(r[1]());

r[0](25);
console.log(r[1]());

r[0](-25);
console.log(r[1]());

r[0](16);
console.log(r[1]());


function digitSum(k){
	if (k<10){
		return k;
	}
	else {
		r=k%10;
		return r+digitSum(Math.floor(k/10));
	}	
}

console.log("k = ", digitSum(12), Math.floor(12/10));


