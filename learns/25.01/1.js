// 'use strict';
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let sum = arr.reduce((a, b) => a + b);
// console.log(`сумма ${sum}`);
// console.log(`среднее арифм. ${sum / arr.length}`);
// let arrFiltr = arr.filter((e) => e > sum / arr.length);
// console.log(`отфильтрованный массив ${arrFiltr}`);

let arr = [];

function newArray(length) {
  for (let i = 0; i < length; i++) {
    arr.push(Math.round(Math.random() * 20000 - 10000) / 100);
  }
}

newArray(10);

arr.length = 20;
arr.push(3);

console.log(arr);
console.log(arr.length);
let i = 0;
arr.forEach((e, ind) => {
  i++;
  console.log(i, ind, e);
});
