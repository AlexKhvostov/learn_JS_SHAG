// Задача 3
// Выведите количество дней с 1-го января 1970 года до настоящего момента времени. Результат округлите

'user strict';
let countDayNow = Date.now() / 1000 / 60 / 60 / 24;
console.log(
  'Количество дней с 1-го января 1970 года до настоящего момента : ' +
    Math.floor(countDayNow)
);
