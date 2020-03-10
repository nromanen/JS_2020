"use strict";

// Task7.Strings
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray"
};
console.log(`First: -${names.first}-, Second - "${names.second}", Third => '${names.third}'`);


// Task8.Strings
function format(s, ...v) {
    let stringReversedr = s.slice().reverse();
    let valueReversedr = v.slice().reverse();
    let result = "";
    for (let i = 0; i < stringReversedr.length; ){
        result += stringReversedr[i];
        if (i < valueReversedr.length) {
            result += valueReversedr[i];
        }
        i++;
        if ((i >= stringReversedr.length) && (
            stringReversedr.length < valueReversedr.length)) {
                result+= valueReversedr.slice(start = i);
            }
    }
    return result;

}

let res1 = format`${1} + ${2} = ${3}${3}${3}`; // "3 = 2 + 1"
console.log(res1);
let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
console.log(res2);
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);