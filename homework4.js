'use strict'
// Task 1
let calculator = {
	firstNumber: 0,
	secondNumber: 0,
	read: function () {
		this.firstNumber = +prompt('Enter first number:', '');
		this.secondNumber = +prompt('Enter second number:', '');
	},

	sum: function () {
		return this.firstNumber + this.secondNumber;
	},

	mul: function () {
		return this.firstNumber * this.secondNumber;
	}
};

//Task 2
function Mp3(model, memory) {

	return {
		model: model,
		memory: memory,
		displayInfo: function () {
			alert(`Model: ${this.model}
	Memory: ${this.memory}`);
		}
	}
}

// Task 3
function bigestSalary(salaries) {
	let bigSalary = 0;
	for (let key in salaries) {
		bigSalary < salaries[key] ? bigSalary = salaries[key] : bigSalary;
	}
	alert(bigSalary);
}

// Task 4
function mp3(model, memory) {
	this.model = model;
	this.memory = memory;
	this.displayInfo = function () {
		alert(`Model: ${this.model}
	Memory: ${this.memory}`);
	}
}

// task 5
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

// task 6
var country = {
	name: "Украина",
	language: "украинский",
	capital: {
		name: "Киев",
		population: 2907817,
		area: 847.66
	}
};
function format(beginMsg, endMsg) {
	console.log(beginMsg + this.name + endMsg);
}
format.call(country, '<', '>'); // "<Украина>"
format.apply(country, ['[', ']']); // "[Украина]"
format.call(country.capital, '"', '"'); // ""Киев""
format.apply(country.capital, ['', '']); // "Киев"


