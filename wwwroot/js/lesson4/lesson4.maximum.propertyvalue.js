"use strict";

// Task3.Objects in functions
function maxSalaries(salaries) {
    let objKeys = Object.keys(salaries);
    let max = salaries[objKeys[0]];
    for (let index = 1; index < objKeys.length; index++) {
        if (salaries[objKeys[index]] > max) {
            max = salaries[objKeys[index]];
        }
    }
    return max;
}

var salaries = {
    John: 100,
    Bill: 300,
    Mike: 250
};
console.log(maxSalaries(salaries));


var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
}; 
console.log(maxSalaries(salaries));
