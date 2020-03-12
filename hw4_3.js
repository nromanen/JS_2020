'use strict';
function maxSalary(salaries){
    var max = 0;
    for(var key in salaries){
if (max < salaries[key]){
    max = salaries[key];
}
    }
    
    return max;
}
var salaries = {
    Jone: 100,
    Bsll: 300,
    Mike: 250
};
console.log(maxSalary(salaries));
var salaries = {
    Cris: 150,
    Brain: 600,
    John: 300,
    Steve: 400,
    Bill: 50
};
console.log(maxSalary(salaries));
