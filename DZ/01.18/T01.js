'use strict';
// Задача 1
// let str = 'asd!asdf!adf!asdf!!!!'
// Удалите в строке все символы '!'

// -=== Решение 1 задачи ===---
// console.log(` === >> начало первой задачи : `);
// let str = "asd!asdf!adf!asdf!!!!";
// console.log(str);
// str = str.replaceAll(`!`, ``);
// console.log(str);
// console.log(` === >> Конец первой задачи `);

// Задача 2
// let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// Дана строка, состоящая из слов, разделенных пробелами.

// Определите количество слов в строке.
// В данной строке вставить после каждого символа 'a' символ 'b'.
// Удалите 3 первых слова

//  Решение 2й задачи
console.log(` === >> Начало 2 задачи : `);
let str =
  'Lorem ipsum      dolor    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
console.log(str);

function delSpaxe(str = '') {
  while (str.includes(`  `)) {
    str = str.replaceAll(`  `, ` `);
  }
  return str;
}
str = delSpaxe(str);
console.log(str);
function countWords(str = '') {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ` `) {
      count++;
    }
  }
  return count;
}

let countWord = countWords(str);
console.log(`Количество слов: ${countWord}`);

str = str.replace(`a`, `ab`);
console.log(str);

function del3firstWord(str = '') {
  //return str.slice(10);
  return str.slice(
    str.indexOf(` `, str.indexOf(` `, str.indexOf(` `) + 1) + 1) + 1
  );
}

str = del3firstWord(str);
console.log(`Cтрока без первых трех слов : \n${str}`);

console.log(` === >> Конец 2 задачи `);

// Задача 3
// email = 'admin@email.com'
// Дан email в строке. Определить, является ли он корректным

// наличие символа '@' и точки
// наличие не менее двух символов после последней точки
// Задача
// Дана строка, содержащая полное имя файла (например, 'c:\WebServers\home\testsite\www\myfile.txt'). Выделите из этой строки имя файла без расширения.

// Задача
// let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// Удалить в строке все цифры.

// Задача
// let str = '+++++------==---+++++'
// Замените все символы '+' на '-' и наоборот

// Задача
// Напишите функцию которая принимает r и возвращает длину окружности радиусом r

// Задача
// Напишите функцию, которая принимает цену товара price и возврадает новую цену с скидкой 3.5 %
