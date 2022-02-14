'use strict';

let arr = [];

// let result = [];
// let result2 = [];

// arr.forEach((e) => {  result.push(e * 2);});
// result2 = arr.map((e) => e * 2);

// console.log(result);
// console.log(result2);

function newArray(length) {
  for (let i = 0; i < length; i++) {
    arr[i] = Math.round(Math.random() * 10);
  }
}

newArray(4);
console.log(`   ######## \n   Исходный массив : ${arr} \n   ######## `);
/************************************************* */
let resSum = 0;
let resSum2 = 0;
let maxItem = arr[0];
let minItem = arr[0];
let negativ = [];

arr.forEach((ee, i) => {
  resSum += ee;
  resSum2 += ee * (i % 2);
});

arr.forEach((e) => {
  if (e > maxItem) {
    maxItem = e;
  }
  if (e < minItem) {
    minItem = e;
  }
});

negativ = arr.map((e) => e * -1);

console.log(`Cумма элементов: ${resSum} `);
console.log(`Макс: ${maxItem}`);
console.log(`Мин: ${minItem}`);
console.log(`Среднее: \n${resSum / arr.length}`);
console.log(`Сумма четных: \n${resSum2}`);
console.log(`Все числа отрицательные: \n${negativ}\n`);

let reducer = (Proizv, el) => Proizv * el;
console.log(`Произведение элементов : ${arr.reduce(reducer, 9)}`);
// expected output: 10

console.log(Number.isInteger(0));
console.log(Number.parseInt(4.99));
console.log(Math.round(4.69));
