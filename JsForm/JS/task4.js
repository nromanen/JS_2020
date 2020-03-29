'use strict'


// Задание №1. Ключевое слово this
// Создайте объект calculator с тремя методами:
// 1. read() запрашивает два значения при помощи prompt() и сохраняет их как свойства объекта;
// 2. sum() возвращает сумму этих двух значений;
// 3. mul() возвращает произведение этих двух значений.

// let object = {
//    // a: 7,
//     read: function() {
//        let a = Number(prompt('insert a', 'a'))
//        let b = Number(prompt('insert b', 'b'))
//        this.a = a;
//        this.b = b;

//     },
//     sum: function() {
//         return this.a + this.b
         
//     },
//     mul: function() {
//         return this.a * this.b
//     }
// }

// object.read();
// console.log(object.a)
// console.log(object.b)
// console.log(object.sum())
// console.log(object.mul())



// Задание №3. Объекты в функциях
// Напишите функцию, которая принимает в качестве параметра объект salaries с зарплатами и возвращает значение максимальной из зарплат.
// Код должен работать с различным количеством зарплат в объекте.


//  function max (sal) {
//     let res = Number.MIN_SAFE_INTEGER
//     for (let key in sal) {
//         if (sal[key] > res) {
//             res = sal[key]
//         } 
//     }
//     return res
//}

// let keys = Object.keys(sal)
// console.log(keys)
// let max = sal[keys[0]];
// for (let i=1; i < sal[keys[keys.length-1]]; i++){
//     if (max < sal[keys[i]]){
//         max = sal[keys[i]];
//     }
// }


// let salaries = {
//     John: 100,
//     Bill: 300,
//     Mike: 500
// }
// console.log(max(salaries))




// Задание №5. Функция как объект
// Напишите функцию mul(), которая принимает любое количество параметров разного типа и возвращает произведение параметров типа Number.
// Если параметры типа Number отсутствуют, возвращает число 0.


// function mul(...arg) {
//     let res = 1
//     let flag = false
    
//     for (let i = 0; i < arg.length; i++) {
//         if (typeof(arg[i]) === "number") {
//             /*if (!flag) {
//                 flag = true
//                 res = 1 
//             }*/
//             res *= arg[i]        
//         }
//     }
//     return (flas) ? res:0;
// }

// alert(mul(1, 'str', 2, "ert",3, 4, 5, true))




// Задание №6. Функция как объект. Явное указание this
// Есть следующий код:

// let country = {
//     name: "Ukraine",
//     language: "Ukrainian",
//     capital: {
//         name: "Kyiv",
//         population: 2907817,
//         area: 847.66
//     }
// }
// function format(beginMSG, endMsg) {
//     console.log(beginMSG + this.name + endMsg)
// }
// format.call(country, "<", ">")   //    "<Ukraine>"
// format.apply(country,["[", "]"])  //  "[Ukraine]"
// format.call(country.capital, '"', '"') // " "Kyiv" "
// format.apply(country.capital, ['',''])



// Задание №2. Объекты в функциях
// Напишите функцию для создания объектов, которые описывают MP3 плеер.


// function createMP3 (name, height, weigth, color) {
//     return {
//         name: name,
//         height: height,
//         weigth: weigth,
//         color: color,
//         displayInfo: function () {
//             console.log("My name: " + this.name + ", my weigth in grams: " + this.weigth + ", my color: " + this.color)
//         }
//     }
// }
// let Sony = createMP3("Walkman", "15 sm", 200, "red")
// Sony.displayInfo()
// console.log(Sony.name)




// Задание №4. Конструкторы объектов
// Создайте тип объектов MP3 при помощи конструкторов объектов.


// function CreateMP3 (name, height, weigth, color) {
    
//         this.name = name,
//         this.height = height,
//         this.weigth = weigth,
//         this.color = color,
//         this.displayInfo = function () {
//             console.log("My name: " + this.name + ", my weigth in grams: " + this.weigth + ", my color: " + this.color)
//         }
    
// }
// let Sony = new CreateMP3("Walkman", "15 sm", 200, "red")
// console.log(typeof Sony);
// Sony.displayInfo()