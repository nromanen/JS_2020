//Задание No1. Функциональные выраженияЕсть следующее определение функции:
// function add(x, y) {
//     return x + y;
// }
// Перепишете   определение   функции  add()   используя   синтаксис   FunctionExpression.

// let add = function(x, y) {
//     return x + y
// }


//Задание No2. ЗамыканияЕсть следующий код:
//function createArrayIterator(array) {
    // Вашкод}
    //var arr = [5, 3, 7];var itr = createArrayIterator(arr);
    //console.log(itr());
     // 5console.log(itr());
      // 3console.log(itr()); 
      // 7console.log(itr()); 
      // undefined
      //Допишите   код,   чтобы   функция   createArrayIterator()   возвращала   функцию-перечислитель для массива, который задается через параметр array

        // function createArrayIterator(array) {
        //      let i = 0
        //     return function () {
        //         return array[i++]
        //     }
        // }
        // let arr = [5, 3, 7]
        // let itr = createArrayIterator(arr)
        // console.log(createArrayIterator(arr)())
        // console.log(createArrayIterator(arr)())
        // console.log(itr())
        // console.log(itr())
        // console.log(itr())
        // console.log(itr())


//Задание No3. 
//Напишите   код   для   "безопасного"   вычисления 
// периметра   и   площадипрямоугольника.Сторонами прямоугольника 
// может быть только число (тип данных  Number,значения других
// типов данных нельзя устанавливать), значение которого,
//строгобольше 0.

// function safePerimetrCalculation() {
//     let a = 0
//     let b = 0
//     let arr = []
//     arr[0] = function(a_Side, b_Side) {
//         if (typeof a_Side === 'number' && a_Side > 0  &&
//             typeof b_Side === 'number' && b_Side > 0 ) {
//             a = a_Side
//             b = b_Side    
//         }
//     }    
//     arr[1] = () => (2 * a + 2 * b)
    
//     arr[2] = () => (a * b)
    
//     return arr
// }
// let perim = safePerimetrCalculation()
// perim[0](34, 0.3)
// console.log(perim[1]())
// console.log(perim[2]())


//Задание No4. Рекурсивные функцииНапишите рекурсивную функцию  digitSum(k), 
//которая находит сумму цифрцелого числа k, не используя циклы

// let num = +prompt('input k', 5)
// function digitSum( k ) {
//     return ( k == 1 ) ? k : k + digitSum( k - 1 )
// } 
// digitSum(num)
// alert(digitSum(num))


//                      факториал

// let fac = +prompt('input n', 10)
// function factorial(n) {
//     if ( n === 1 ) {
//         return 1
//     }
//     else {
//         return n * factorial(n - 1) 
//     }
// }
// let a = factorial(fac)
// alert(a)



//Задание No5. Переопределение функцийЕсть следующий код:
//function format(data, type) {
// Вашкод}
//var originFormat = format;format("1", "number");
//console.log(format()); 
//1console.log(typeof format()); // "number"
//originFormat("Hello", "boolean");
//console.log(format()); // true
//console.log(typeof format()); // "boolean"
//originFormat(true, "string");
//console.log(format()); // "true"
//console.log(typeof format()); // "string"
//Допишите   код,   чтобы   функция  format(data,  type)   переопределяла   себя   взависимости от параметра type:
//Если   значением   параметра   type   является   строка   "number",   топереопределенная   версия   функции   format()   преобразует   значениепараметра data в число и возвращает результат;
//Если   значением   параметра   type   является   строка   "string",   топереопределенная   версия   функции   format()   преобразует   значениепараметра data в строку и возвращает результат;
//Если   значением   параметра   type   является   строка   "boolean",   топереопределенная   версия   функции   format()   преобразует   значениепараметра data в логическое значение и возвращает результат;
//При других значениях параметра type функция format() не переопределяетсебя.

// function format(data, type) {
//     if (type === 'number') {
//         format = function() {
//             return +data
//         }
//     }
//         else if (type === 'string') {
//         format = function() {
//             return String(data)
//         }
//     }
//     else if (type === 'boolean') {
//         format = function() {
//             return Boolean(data)
//         }
//     }
//     else {
//         return
//     }
// }
// let originFormat = format

// format('1', 'number')
// console.log(format())  // 1
// console.log(typeof format())  // 'number'

// originFormat('Hello', 'boolean')
// console.log(format())  // true
// console.log(typeof format())  // 'boolean'

// originFormat(true, 'string')
// console.log(format())  // 'true'
// console.log(typeof format())  // 'string'
