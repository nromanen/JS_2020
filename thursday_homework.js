// 1: Your task is to find the first element of an array that is not consecutive.

function firstNotConsecutive(arr) {
	let arrLength = arr.length
	for (let i = 1; i < arrLength; i++) {
		if (arr[i] - 1 !== arr[i - 1]) {
			return arr[i];
		}
	}
}

console.log(firstNotConsecutive([1, 2, 3, 4, 5, 6, 9]));

// 2: Number to String 
function numberToString(number) {
	return number.toString();
}

console.log(numberToString(123));

// 3: multiply x2
function mul(number) {
	return number * 2;
}

mul(4)

// 4: watermelons
function divideEven(number) {
	if (number % 2 === 0) {
		let a = number / 2;
		if (a % 2 === 0) {
			return `Each of you can take ${a} watermelons`;
		} else {
			return `Somebody should take ${a - 1} watermelons, another one should take ${a + 1} watermelons`
		}
	}
	return `Sorry guys, you have odd number of the watermelons`
}

console.log(divideEven(8));
console.log(divideEven(9));
console.log(divideEven(10));


// 5: Create a function that will return a string that combines all of the letters of the three inputed strings in groups. 
function combination(one, two, three) {
	let result = ''
	for (i = 0; i < one.length; i++) {
		result += one[i] + two[i] + three[i]
	}
	return result;
}

console.log(combination("aa", "bb", "cc"));