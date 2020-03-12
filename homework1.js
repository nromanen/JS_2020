/* // Page 1, Task2
alert('Mykhailo')

// Page 1, Task 3
let exp1 = 15;
alert(exp1);
exp1 = exp1 + 5;
alert(exp1);

// Page 1, Task 4
let study1 = 'JS', study2 = 'Front-end';
alert(study1);
alert(study2);
study1 = study2;
alert(study1);
alert(study2);

// Page 1, Task 5
let userName = prompt('Hello! Enter your name:', '');
isNaN(userName) && userName !== null && userName !== '' ? alert(`Welcome to our web-portal, ${userName}`) : alert(`Welcome to our web-portal, stranger`);


// Page 2, Task 1
function changeNumber(n) {
    n = +n;
    if (n > 0) {
        n += 1;
    } else if (n < 0) {
        n -= 2;
    } else {
        n = 10;
    }
    return n;
} 

alert(changeNumber(prompt('Enter your number:', '')));

// Page 2, Task 2
let whichNumber = n => {
    n = +n;
    if (n > 0) {
        if (n % 2 === 0) {
            alert("положительное четное число");
        } else {
            alert("положительное нечетное число");
        }
    } else if (n < 0) {
        if (n % 2 === 0) {
            alert("отрицательное четное число");
        } else {
            alert("отрицательное нечетное число");
        }
    } else {
        alert("нулевое число");
    }
}

whichNumber(prompt('Enter your number:', ''));

//Page 2, Task 3
function fourNumbers(a, b, c, d) {
    if (a === b) {
        if (b === c) {
            alert('Number 4');
        } else {
        alert('Number 3');
        }
    } else {
        if (a === c) {
            alert('Number 2');
        } else {
            alert ('Number 1');
        }
    }
}

let userNumberA = prompt('Enter number 1:', '');
let userNumberB = prompt('Enter number 2:', '');
let userNumberC = prompt('Enter number 3:', '');
let userNumberD = prompt('Enter number 4:', '');
fourNumbers(userNumberA, userNumberB, userNumberC, userNumberD);

//Page 2, Task 4
let mark = prompt('Enter your result:', '');
switch(mark) {
    case '1':
        alert('плохо');
        break;
    case '2':
        alert('неудовлетворительно');
        break;
    case '3':
        alert('удовлетворительно');
        break;
    case '4':
        alert('хорошо');
        break;
    case '5':
        alert('отлично');
        break;
    default: 
        alert('ошибка');
}

//Page 2, Task 5
function segments(a, b) {
    while (a - b >= 0) {
        a -= b; 
    }
    return a;
}

alert(segments(prompt('Enter segment 1:', ''), prompt('Enter segment 2:', '')));

// Page 2, Task 6
let digits = n => {
   while (n > 0) {
        x = n % 10;
        n = (n - x) / 10;
        alert(x);
   }
}

digits(prompt('Enter your number:', ''));

// Page 2, Task 7
function sumAB(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

let sumAllNumbers1 = prompt('Enter your number 1:', '');
let sumAllNumbers2 = prompt('Enter your number 2:', '');
alert(sumAB(+sumAllNumbers1, +sumAllNumbers2));

// Page 2, Task 8
function factorial(n) {
    let mult = 1;
    for (let i = 1; i <= n; i++) {
        mult *= i;
    }
    return mult;
}

let multAllNumbers1 = +prompt('Enter your number:', '');
alert(factorial(multAllNumbers1));

// Page 2, Task 9
let userInput = 0;
let userArr = [];
let sumArr = 0;

while(!isNaN(parseInt(userInput))) {
    userArr.push(parseInt(userInput));
    userInput = prompt('Enter a number', '');
}

if (userArr.length === 1) {
    alert('You have not entered any number');
} else {
    for (let y of userArr) {
        sumArr += y;
    }
    alert(sumArr);   
}

// Page 2, Task 10
let allNumbers = (a, b) => {
    let count = 1;
    for (let i = a; i <= b; i++) { // TODO while loop needed
        for (let k = 0; k < count; k++) {
            console.log(i);
        }
        a += 1;
        count++
    }
}

allNumbers(10, 15);

//Page 2, Task 11
function pow(x, n) {
    return x ** n; // Math.pow(x, n)
}

console.log(pow(3, 3));

//Page 2, Task 12
function minMax(x, y) {
    if (x >= y) {
        return y;
    } else {
        return x;
    }
}

console.log(minMax(4, 5));

//Page 2, Task 13
function sign(x){ // Math.sign(x)
    if (x > 0) {
        return 1;
    } if (x < 0) {
        return -1;
    }  
        return 0;
}

console.log(sign(4));
console.log(sign(-5));

//Page 2, Task 14
function calc(a, b, op) {
    switch(op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return a + b;
    }
}

console.log(calc(5, 4, 1))
console.log(calc(5, 4, 5))

//Page 2, Task 14
function digitN(k, n) {
    k = String(k);
    return k.length >= n ? k.charAt(k.length - n) : -1;
    //return k.charAt(k.length - n);
} 

console.log(digitN(123456, 6))
console.log(digitN(1234, 2)) */