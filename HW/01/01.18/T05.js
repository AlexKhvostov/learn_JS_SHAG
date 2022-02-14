'use strict';

// Задача  5
// let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// Удалить в строке все цифры.
let str = `Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud`;
console.log(`Начальная строка : \n${str}`);

function delAllInt(str = '') {
  for (let i = 0; i <= 9; i++) {
    str = str.replaceAll(`${i}`, ``);
  }
  return str;
}

str = delAllInt(str);
console.log(`Итоговоая строка : \n${str}`);

// Задача  6
// let str = '+++++------==---+++++'
// Замените все символы '+' на '-' и наоборот

// Задача  7
// Напишите функцию которая принимает r и возвращает длину окружности радиусом r

// Задача  8
// Напишите функцию, которая принимает цену товара price и возврадает новую цену с скидкой 3.5 %
