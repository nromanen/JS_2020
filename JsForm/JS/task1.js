// Задание No2. ПодключениеНапишите   код   во   внешнем   файле,   который   выводит   на   экран   ваше   имя   спомощью alert().
// Подключите созданный файл к HTML-документу

//  alert("Vitalii")


//   Задание No5. Взаимодействие с пользователемНапишите код, который запрашивает имя пользователя с помощью  prompt() 
//ивыводит приветствие с его именем на экран с помощью alert()

  //let name = prompt("what is your name?","Vitalii")
  //alert(name)


//   Задание No1. Условные конструкцииДано целое число.
// Если оно является положительным, то прибавьте к нему 1;
//если  отрицательным,  то  вычтите  из  него   2; 
// если  нулевым,  
// то  замените  его  на  10.Выведите полученное число

// let integer = +prompt("number")
// if (integer > 0) {
//         integer += 1
//     } 
//     else if (integer < 0) {
//             integer -= 2
//         }
//         else {
//     integer = 10
// } 
// alert(integer)


//Задание No2. Условные конструкцииДано целое число. Определите и выведите его строку-описание вида:– "нулевое число";– "положительное четное число";– "положительное нечетное число";– "отрицательное четное число";– "отрицательное нечетное число"

//  let integer = +prompt("number")
//  if (integer === 0) {
//     alert("нулевое число")
//  }
//  else if (integer > 0 && integer % 2 == 0) {
//     alert("положительное  четное число")
//  }
//  else if (integer < 0 && integer % 2 == 0) {
//     alert("отрицательное  четное число")
//  }
//  else if (integer > 0 && integer % 2 == 1) {
//     alert("положительное нечетное число")
//  }
//  else if (integer < 0 && integer % 2 == -1) {
//     alert("отрицательное нечетное число")
//  }

//  #2

//  let integer = +prompt("number")
//  if (integer > 0) {
//      if (integer % 2 == 0) {
//          alert("положительное четное число")
//      }
//      else {
//          alert("положительное нечетное число")
//      }
//  }
//  else if (integer < 0) {
//      if (integer % 2 == 0) {
//          alert("отрицательное четное число")
//      }
//      else {
//          alert("отрицательное нечетное число")
//      }
//  }
//  else {
//      alert("нулевое число")
//  }


//Задание No3. Условные конструкцииДаны   четыре   целых   числа,   одно   из  которых   отлично   от   трех   других,   равныхмежду собой. Определите порядковый номер числа, отличного от остальных

//  let a = 3
//  let b = 2
//  let c = 2
//  let d = 2
// if ((a == b) && (a == c)) {
//     alert("порядковый номер другого числа 4")
// }
// else if ((a == b) && (a == d)) {
//     alert("порядковый номер другого числа 3")
// }
// else if ((a == c) && (a == d)) {
//     alert("порядковый номер другого числа 2")
// }
// else {
//     alert("порядковый номер другого числа 1")
// }


//Задание No4. Условные конструкцииДано целое число k. Выведите строку-описание оценки, соответствующей числуk (1 – "плохо", 2 – "неудовлетворительно", 3 – "удовлетворительно", 4 – "хорошо", 5– "отлично"). Если k не лежит в диапазоне 1–5, то вывести строку "ошибка"

// let k = +prompt("input k")
// switch (k) {
//     case 1:
//         alert("bad")
//         break
//     case 2:
//         alert("not good")
//         break
//     case 3:
//         alert("goood")
//         break
//     case 4:
//         alert("very good")
//         break
//     case 5:
//         alert("exelent")
//         break
//     default:
//         alert("are you kidding?")
// }

//Задание No5. Циклы (while)Даны   положительные   числа  a  и  b  (a  >  b).   На   отрезке   длины  a  размещеномаксимально   возможное   количество   отрезков   длины   b   (без   наложений).   Неиспользуя операции умножения и деления, найдите длину незанятой части отрезка a.

// let a = +prompt("input a")
// let b = +prompt("input b")
// let sum = 0
// while (sum < a) {
//     sum = sum + b
// }
// alert("the answer is " + (a - (sum - b)))


//Задание No6. Циклы (while)Дано целое число n (>0). Используя операции деления нацело и взятия остаткаот деления, выведите все его цифры, начиная с самой правой (разряда единиц)

// let k = 1234567
// while (k >= 1) {
//     ost = k % 10
//     k = k / 10
//     // k = Math.floor(k)
//     k = k - (ost / 10)
//     alert(ost)
// }


//Задание No7. Циклы (for)Даны два целых числа a и b (a < b). Найдите сумму всех целых чисел от a до bвключительно.

// let a = 1
// let b = 10
// let sum = 0
// for (let i = a; i <= b; i++) {
//     sum += i
// }
// alert(sum)


//Задание No8. Циклы (for)Дано целое число n (n > 0). Найдите произведение n! = 1 * 2 * ... * n.

// let n = 5
// let nfuct = 1
// for (let i = 1; i <= n; i++) {
//     nfuct = nfuct * i 
// }
// alert(nfuct)


// Задание No9. ЦиклыНапишите код, который:1.   Запрашивает   по   очереди   значения   при   помощи   prompt()   и   сохраняет   их   вмассиве;2. Заканчивает ввод, как только посетитель введёт пустую строку, не число илинажмёт "Отмена";3. Выводит сумму всех значений массива

// let numbers = []
// let a
// while (a === undefined) {
//     a = prompt('number')
//     if (a !== null && a !== '' && !isNaN(a)) {
//         numbers.push(+(a))
//         a = undefined
//     }
// }
// let sum = 0 
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }
// alert(sum)


// массива.Задание No10. Циклы
// Даны   целые   числа  a  и  b  (a  <  b).   Выведите   все   целые   числа   от  a  до  bвключительно;   при   этом   число  a  должно   выводиться   1   раз,   число  a  +   1   должновыводиться 2 раза и т.д.

// let a = 2
// let b = 4
// for (let i = 1; i <= b-a + 1; i++ ) {
//     for (let x = 1; x <= i; x++) {
//     alert(a + i - 1)
//     }
//    }


//Задание No11. ФункцииНапишите функцию pow(x, n), которая возвращает x в степени n. Иначе говоря,умножает x на себя n раз и возвращает результат

// let x = +prompt("введіть х")
// let n = +prompt("введіть n")
// function pow(x, n) {
//     let res =  x
//         for ( let i = 1; i < n; i++) {
//              res = res * x    
//         } 
//          alert(res)
//      }
//  pow(x, n)


//Задание No12. ФункцииНапишите функцию minMax(x, y), которая возвращает минимальное из x и y

// function minMax (x, y) {
//     if (x > y) {
//         return x
//     } 
//     else return y
// }
// alert(minMax(7, 5))


// Задание No13. ФункцииНапишите   функцию  sign(x)   целого   типа,   возвращающую   для   вещественногочисла x следующие значения:– -1, если x < 0;– 0, если x = 0;– 1, если x > 0.

// let x = 0
// function sign(x) {
//     if (x > 0) {
//         alert("1")
//     } 
//     else if (x < 0) {
//         alert("-1")
//     }
//     else {
//         alert("0")
//     }
// }
// sign(x)


// Задание No14. ФункцииНапишите функцию calc(a, b, op), которая выполняет над числами a и b одну изарифметических   операций   и  возвращает   ее   результат.   Вид   операции   определяетсяцелым числом op: 1 – вычитание, 2 – умножение, 3 – деление, остальные значения –сложение.

// let x = 2
// let y = 5
// let z = 4
// function calc(a, b, op) {
//     let res = 0
//     if (op === 1) {
//         res = a - b
//     }
//     else if (op === 2) {
//         res = a * b
//     }
//     else if (op === 3) {
//         res = a / b
//     }
//     else {
//         res = a + b
//     }
//     alert(res)
// }

// function calc(a, b , op) {
//     let res = 0
//     switch (op) {
//         case 1:
//             res = a - b
//             break
//         case 2:
//             res = a * b
//             break
//         case 3:
//             res = a / b
//             break
//         default:
//             res = a + b
//     }
//     alert(res)
// }
// calc(x, y, z)


// Задание No15. ФункцииНапишите   функцию   digitN(k,   n),   которая   возвращает   n-ю   цифру   целогоположительного   числа   k   (цифры   в   числе   нумеруются   справа   налево).   Есликоличество цифр в числе k меньше n, то функция возвращает -1.

// let ost = 0
// let k =1234
// let n = 3
//  function digitN(k, n) {
//     for (let i = 1; i <= n; i++) {
//         ost = k % 10
//         k = k / 10
//          // k = Math.floor(k)
//         k = k - (ost / 10)
//         }
//         if ( ost === 0) {
//             alert(" -1 ")
//         }
//         else {
//             alert(ost)
//         }
//  }
// digitN(k, n, ost)


//arr = [1]
//first = 2
//second = 5

function sumSliceArray(arr,first, second) {
  let result 
  //if (first <= (arr.length -1)  && second <= (arr.length -1) && typeof(first) ==='number' && typeof(second) ==='number' && first > 0 && second > 0) {
  try { 
    result = arr[first] + arr[second]
  }
  catch(error) {
    throw new RangeError(' not index ')
  }
  return result
}

let arr = [2, 3, 'dfg']
let first = 0
let  second = 1

  if (first <= (arr.length -1)  && second <= (arr.length -1) && typeof(first) ==='number' && typeof(second) ==='number' && first > 0 && second > 0) {
    console.log(sumSliceArray(arr, first, second))
  } else {
    console.log('error.stack')
  }



