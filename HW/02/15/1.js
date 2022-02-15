// Задача 1
// Получите текущую дату и время
// Выведите текущий день.
// Выведите текущий месяц.
// Выведите текущий год.
// Выведите номер текущего дня недели

'user strict';

let now = new Date();

console.log('время :' + now); // Tue Feb 15 2022 11:14:27 GMT+0300 (Москва, стандартное время)
console.log('день: ' + now.getDate()); // 15
console.log('месяц: ' + now.getMonth()); //1 ( начинает с 0)
console.log('год: ' + now.getFullYear()); //2022
console.log('день: ' + now.getDay()); // 2
