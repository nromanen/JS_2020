// task 1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// task 2
let names = {
	first: "Tom",
	second: "Sam",
	third: "Ray",
	fourth: "Bob"
};
let { first: f = 'Name №1', second: t = 'Name №2', third: x = 'Name №3', foutrh: fs = 'Name №4', fifth: d = 'Name №5' } = names;
console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5"

// task 3
let data = {
	names: ["Sam", "Tom", "Ray", "Bob"],
	ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// task 4
function mul() {
	let mulAll = 1;
	let count = 0;
	let inputLength = arguments.length;
	for (let i = 0; i < inputLength; i++) {
		if (typeof (arguments[i]) === 'number') {
			mulAll *= arguments[i];
			count++;
		}
	}
	return count > 0 ? mulAll : 0;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0

// task 5
let obj = {
	name: "obj",
	print: function () {
		return () => {
			console.log('obj')
		}
	}
};
function multiCaller(func, count) {
	for (let i = 0; i < count; i++) {
		func();
	}
}
multiCaller(obj.print(), 3);  // "obj", 3 раза


// Task 8
function format(s, ...v) {
	let newArr = [];
	if (s.length >= v.length) {
		for (let i = 0; i < s.length; i++) {
			newArr.push(s[i]);
			newArr.push(v[i]);
		}
	}
	return newArr.reverse().join('');
}
let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
console.log(res1);
let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
console.log(res2);
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);