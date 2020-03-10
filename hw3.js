//lesson 3.1
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

//2
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob"
};
let { first: f, third: x, fifth = 'Name No5' } = names;
console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name No5"
