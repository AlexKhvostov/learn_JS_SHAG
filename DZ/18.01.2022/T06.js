'use strict';

// Задача  6
// let str = '+++++------==---+++++'
// Замените все символы '+' на '-' и наоборот
let str = '+++++------==---+++++';

function mathRevers(str = ``) {
  let result = ``;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == `+`) {
      result += `-`;
    } else if (str[i] == `-`) {
      result += `+`;
    } else {
      result += `${str[i]}`;
    }
  }
  return result;
}
str = mathRevers(str);
console.log(`Итоговоая строка : \n${str}`);

// Задача  7
// Напишите функцию которая принимает r и возвращает длину окружности радиусом r

// Задача  8
// Напишите функцию, которая принимает цену товара price и возврадает новую цену с скидкой 3.5 %
