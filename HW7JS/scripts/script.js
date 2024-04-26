//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function findMin(a,b) {
// if (a<b) 
//     return a;
// else 
//     return b;
// }
//  console.log(findMin(4,8));


 //Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

//  let numbers = [20, 6, -6, 89, 69, -94];

//  function printEvenNumbers() {
//      numbers.sort((a, b) => b - a); 
//      let evenNumbers = numbers.filter(num => num % 2 === 0); 
//      console.log(evenNumbers);
//  }
 
//  printEvenNumbers();
 
// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.

// function power(base, exponent = 2) {
//     let result = 1;
//     for (let i = 0; i < exponent; i++) {
//         result *=base;
//     }
//     return result;
// }
// console.log(power(5));

//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function sumNumbers(n) {
//     let sum = 0;
//     for (let i = 1; i <=n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumNumbers(30));

//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function numbers(n, m) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumOdd += i;
        }
    }
    return { sumEven, sumOdd };
}

let result = numbers(20, 90);

console.log(result.sumEven);
console.log(result.sumOdd); 


// Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'

function longString(arr) {
    
    if (arr.length === 0) {
        return null;
    }

    let long = arr[0]; 
   
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > long.length) {
            long = arr[i];
        }
    }

    return long; 
}


let arr = ['one', 'two', 'three'];
console.log(longString(arr));
