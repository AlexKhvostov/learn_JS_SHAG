// Задача 8
// Удалить из второго массива только те элементы, которые встречаеются в первом массиве

'user strict';
const arr1 = [1, 3, 5];
const arr2 = [1, 2, 3, 4, 5, 6];

let newArr = [];
arr2.forEach((e) => {
  if (!arr1.includes(e)) {
    newArr.push(e);
  }
});

console.log(newArr);
