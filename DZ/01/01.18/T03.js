"use strict";
// Задача 3
// email = 'admin@email.com'
// Дан email в строке. Определить, является ли он корректным

// наличие символа '@' и точки
// наличие не менее двух символов после последней точки

let email = "admin@fdss.com";
function checkEmail(email) {
  if (
    email.indexOf(`@`) == email.lastIndexOf(`@`) &&
    email.indexOf(`@`) > 0 &&
    email.indexOf(`.`, email.lastIndexOf(`@`)) == email.lastIndexOf(`.`) &&
    email.length - email.lastIndexOf(`.`) > 2 &&
    email.lastIndexOf(`.`) - email.lastIndexOf(`@`) > 1
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

checkEmail(email);

// Задача 4
// Дана строка, содержащая полное имя файла (например, 'c:\WebServers\home\testsite\www\myfile.txt'). Выделите из этой строки имя файла без расширения.

// Задача  5
// let str = 'Lorem ipsum123 dolor 123 sit amet, co1nsec856989tetur adipis7cing elit, sed d6o eiusmod temp567or incid6idunt ut l65abore et123 dolore magn256a aliqua. Ut enim4 ad minim veniam, quis nostrud'
// Удалить в строке все цифры.

// Задача  6
// let str = '+++++------==---+++++'
// Замените все символы '+' на '-' и наоборот

// Задача  7
// Напишите функцию которая принимает r и возвращает длину окружности радиусом r

// Задача  8
// Напишите функцию, которая принимает цену товара price и возврадает новую цену с скидкой 3.5 %
