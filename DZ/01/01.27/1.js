'use strict';

let arr = [
  5, 97, -58, -50, 68, -41, -22, -7, -64, 88, -51, 13, -13, -11, -50, -80, -13,
  100, -70, -40, -98, 3, 20, -30, -30, -9, 46, 39, 89, 86, 38, 77, 64, -69, -37,
  60, 73, 70, -33, 54, -29, 14, 15, 88, 65, -11, -10, 44, 15, 71, -88, 57, -26,
  66, -87, 46, 46, 13, 65, -67, 56, 99, -97, -31, -98, -3, -74, 70, 45, -50, 78,
  57, 100, 77, -85, -24, -89, -38, 26, -45, 55, -53, -43, -7, 90, -53, 17, -47,
  -93, 66, 33, 66, 78, 55, 34, -9, 63, -74, 87, 37,
];
/** тестовый массив для упрощения проверки. расскоментировать следующую строку */

arr = [7, -5, 4, -3, -2, -1, 6, 8, -9, 7];

/**   Ответы для тестового массива _ чтобы они работали расскоментировать строку выше
 * Первый четный отрицательный элемент:  -2  (четный индекс = 4)
 * Новый массив с четными элементами: 4,-2,6,8
 * Новый массив с элементами через 1 по порядку:  7,4,-2,6,-9
 * Все элементы массива в обратном порядке : -9 8 6 -1 -2 -3 4 -5 7
 * Произведение элементов массива:   -362880
 * Количество положительных элементов массива:  4
 * Вычислить среднее арифметическое значение тех элементов массива, которые попадают в интервал от –2 до 10: 4.8
 * * Определите есть ли в массиве одинаковые элементы: false
 */

console.log(`Исходный массив: \n ${arr}`);

////////////Следующая задача///////////////////
// Найдите первый четный отрицательный элемент
console.log(`\n(?) Найдите первый четный отрицательный элемент:`);
let firstEvenElement = 'zero'; //переменная для первого четного отрицательного элемента
/**
 * Проверяем условие : 1) четность индекса?,2) отрицательность элемента?, 3) перезаписалась ли переменная?
 * */
arr.forEach((elem, index) => {
  if (elem < 0 && index % 2 === 0 && firstEvenElement === 'zero') {
    firstEvenElement = elem;
  }
});
console.log(`=>  ${firstEvenElement}`);

////////////Следующая задача///////////////////
// Получите новый массив с четными элементами
console.log(`\n(?) Получите новый массив с четными элементами:`);
/**
 * Фильтруем данный массив проверяя каждый элемент на четность : (e % 2 == 0)?
 * */
let arrEven = arr.filter((e) => e % 2 == 0);
console.log(`=>  ${arrEven}`);

////////////Следующая задача///////////////////
// Получите новый массив с элементами через 1 по порядку
console.log(`\n(?) Получите новый массив с элементами через 1 по порядку:`);
/**
 * Фильтруем данный массив проверяя каждый индекс элемента на четность : (i % 2 == 0)?
 */
let arrAfterOne = arr.filter((e, i) => i % 2 == 0);
console.log(`=>  \n ${arrAfterOne}`);

////////////Следующая задача///////////////////
// Вывидите все элементы массива в обратном порядке.
/**
 * Для "разворота" масива можно было бы использовать arr.reverse() .
 * Но выведем элемены в обратном порядке используя forEach
 */
console.log(`\n(?) Вывидите все элементы массива в обратном порядке:`);
console.log(`=> `);
/**
 * Перебираем массив, но для работы используем только индекс и сам масив. наш индекс увеличивается.
 * Значит отнимая от длины масива индекс, получится обратный отсчет: [array.length - 1 - i]
 * дополнительно отнимаем единицу так как длина массива на 1 больше чем максимальный индекс.
 */
arr.forEach((e, i, array) => console.log(array[array.length - 1 - i]));

////////////Следующая задача///////////////////
// Найти произведение элементов массива
console.log(`\n(?) Найти произведение элементов массива:`);
let proizvedenie = 'zero'; //начальное значение ( дальше поменяем)
if (arr.some((e) => (e = 0))) {
  proizvedenie = 0; // если хотябы один элемент массива равен 0 то произведение тоже будет равно 0. можно не считать.
} else {
  proizvedenie = arr.reduce((akkum, elem) => (akkum *= elem)); // иначе ( если нет 0 в массиве) считаем сумму с помощью ".reduce"
}
console.log(`=>  ${proizvedenie}`);

////////////Следующая задача///////////////////
// Найти количество положительных элементов массива
console.log(`\n(?) Найти количество положительных элементов массива:`);
/** перебираем массив при помощи forEach и если элемент четный - увеличиваем счетчик (countPositiveItem)  */
let countPositiveItem = 0;
arr.forEach((e) => {
  if (e > 0) {
    countPositiveItem++;
  }
});
console.log(`=>  ${countPositiveItem}`);

////////////Следующая задача///////////////////
// Вычислить среднее арифметическое значение тех элементов массива, которые попадают в интервал от –2 до 10
console.log(
  `\n(?) Вычислить среднее арифметическое значение тех элементов массива, которые попадают в интервал от –2 до 10:`
);
/**
 * С помощью filter получаем в arrM2to10 новый масив елементов подходящих под условие  (e>-2 && e<10)
 */
let arrM2to10 = arr.filter((e) => e > -2 && e < 10);
let summArrM2to10 = arrM2to10.reduce((akum, element) => (akum += element));
let deltaElement = summArrM2to10 / arrM2to10.length; // делим сумму эелементов на их количество
console.log(`=>  ${deltaElement}`);

////////////Следующая задача///////////////////
// * Определите есть ли в массиве одинаковые элементы
console.log(`\n(?) * Определите есть ли в массиве одинаковые элементы:`);
/**
 * без комментириев, тут интересно подумать
 */

/** 1й способ */
let duble = 'zero';
arr.forEach((e, i, a) => {
  if (duble != true) {
    duble = a
      .slice(0, i)
      .concat(arr.slice(i + 1))
      .some((el) => e === el);
  }
});
console.log(duble);

/** 2й способ */
duble = false;

arr.forEach((element) => {
  if (arr.filter((e) => element == e) >= 2 && duble != true) {
    duble = true;
  }
});
console.log(duble);