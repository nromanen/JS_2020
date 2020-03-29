//Задание No1. ДеструктуризацияЕсть следующий код:
//let arr = ["Tom", "Sam", "Ray", "Bob"];
//let [/* Ваш код */] = arr;
//console.log(x); // "Tom"
//console.log(y); // "Sam"
//console.log(z); // [Bob]
//Допишите   код   используя   деструктуризацию,   чтобы   в   консоли   браузерапоявились строки, 
//которые написаны в комментариях

// let arr = ["Tom", "Sam", "Ray", "Bob"];
// let [x, y, ,...z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);


//Задание No2.
// ДеструктуризацияЕсть следующий код:
//let names = {   first: "Tom",   second: "Sam",   third: "Ray",    fourth: "Bob"};
//let {/* Ваш код */} = names;
//console.log(f); // "Tom"
//console.log(x); // "Ray"
//console.log(fifth); // "Name No5"
//Допишите   код   используя   деструктуризацию,   чтобы   в   консоли   браузерапоявились строки,
// которые написаны в комментариях

// let names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob"
// };
// let {first: f, third: x, fifth = "Name 5"} = names;
// console.log(f);
// console.log(x);
// console.log(fifth);


//Задание No3. 
//ДеструктуризацияЕсть следующий код:
//let data = {   names: ["Sam", "Tom", "Ray", "Bob"],   ages: [20, 24, 22, 26],};
//let/* Вашкод */ = data;
//console.log(name2); // "Tom"
//console.log(age2); // 24
//console.log(name4); // "Bob"
//console.log(age4); // 26
//Допишите   код   используя   деструктуризацию,   чтобы   в   консоли 
//  браузерапоявились строки, которые написаны в комментариях

// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };
// let {
//     names: [name1, name2, name3, name4],
//     ages: [age1, age2, age3, age4]
// } = data;
// console.log(name2);
// console.log(age2);
// console.log(name4);
// console.log(age4);


//Задание No4. ФункцииНапишите функцию  mul(), которая принимает любое количество параметров
//разного типа и возвращает произведение параметров типа Number.
//Если параметры типа Number отсутствуют, возвращает число 0.
//function mul() {// Вашкод}
//console.log(mul(1, "str", 2, 3, true)); // 6
//console.log(mul(null, "str", false, true)); // 0Нельзя использовать свойство arguments, но в функцию mul() можно добавитьодин параметр


// function mul(...numbers) {
//     let res = 1;
//     let ind = true;
//     console.log(numbers);
//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (typeof(numbers[i]) === "number") {
//            res*= numbers[i];
//         }
//         else {
//             ind = false
//         }
//     }
//     if (ind || res > 1 ) {
//     return  res;
//     }
//     else  {
//         return 0
//     }
// }
// console.log(mul(1, "str", 1, 4, true)); //  6
// console.log(mul(null, "str", false, true)); //  0


//Задание No5. ФункцииЕсть следующий код:
//let obj = {   name: "obj",   print: function () {// Ваш код   }};
//function multiCaller(func, count) {
    //for (let i = 0; i < count; i++) {
        //      func();   
    //}
//}
//multiCaller(obj.print(), 3);  // "obj", 3 раза
//Допишите   код   используя   стрелочные   функции,   чтобы   в   консоли   браузерапоявились строки, которые написаны в комментариях

// let obj = {
//     name: "obj",
//     print: function() {
//         let res = () => console.log(this.name);
//         res();
//     }
// };
// function multiCaller (func, count) {
//     for (let i = 0; i < count; i++) {
//         func();
//     }
// }
// multiCaller(obj.print(), 3);  // "obj", 3 раза


//Задание No7. Строки
//Есть следующий код:
//let names = {   first: "Tom",   second: "Sam",   third: "Ray"};
//console.log(/* Ваш код */); // "Первый: -Tom-, Второй - "Sam", Третий => 'Ray'"
//Допишите код используя интерполяцию, чтобы в консоли браузера появиласьстрока, которая написана в комментариях


// let names = {
    //     first: "Tom",
    //     second: "Sam",
    //     third: "Ray"
    // };
    // console.log(`"Первый: -${names.first}-, Второй "${names.second}", Третий => '${names.third}' "`); // "Первый: -Tom-, Второй - "Sam",  Третий => 'Ray' ""
    

//Задание No8. Строки
//Напишите функцию шаблонизации format(), которая выводит строку в обратномпорядке.
//Примеры использования функции format():
//functionformat(s, ...v) {// Ваш код}
//let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
//console.log(res1);
//let res2 = format`Привет ${"Мир "}`; // "Мир Привет "
//console.log(res2);
//let res3 = format`left${"<->"}right`; // "right<->left"console.log(res3);


function format(s, ...v) {
  let res = `${s[s.length - 1]}`
  console.log(s)
  console.log(v);
    for (let i = 1; i <= v.length; i++) {
        res += `${v[v.length - i]}${s[v.length - i]}`
    }
return res
}
let res1 = format`${1} + ${2} = ${3}`; // "3 = 2 + 1"
console.log(res1);
let res2 = format`Привет ${"Мир " }`; // "Мир Привет "
console.log(res2);
let res3 = format`left${"<->"}right`; // "right<->left"
console.log(res3);

