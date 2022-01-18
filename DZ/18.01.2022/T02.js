"use strict";

// Задача 2
// let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
// Дана строка, состоящая из слов, разделенных пробелами.

// Определите количество слов в строке.
// В данной строке вставить после каждого символа 'a' символ 'b'.
// Удалите 3 первых слова

//  Решение 2й задачи
console.log(` === >> Начало 2 задачи : `);
let str =
  "Lorem ipsum      dolor    sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
console.log(str);

function delSpaxe(str = "") {
  while (str.includes(`  `)) {
    str = str.replaceAll(`  `, ` `);
  }
  return str;
}
str = delSpaxe(str);
console.log(str);
function countWords(str = "") {
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ` `) {
      count++;
    }
  }
  return count;
}

let countWord = countWords(str);
console.log(`1. Количество слов: \n${countWord}`);

str = str.replace(`a`, `ab`);
console.log(`2. Вставили "b" за "а" : \n${str}`);

function del3firstWord(str = "") {
  //return str.slice(10);
  return str.slice(
    str.indexOf(` `, str.indexOf(` `, str.indexOf(` `) + 1) + 1) + 1
  );
}

str = del3firstWord(str);
console.log(`3. Cтрока без первых трех слов : \n${str}`);

console.log(` === >> Конец 2 задачи `);
