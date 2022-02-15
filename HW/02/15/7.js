// Задача 7
// Удалить в массиве все числа, которые повторяются более двух раз.

'user strict';
const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8];
let newArr = [];

arr.forEach((a) => {
  let count = 0;
  arr.forEach((el) => {
    if (el == a) {
      count++;
    }
  });
  if (count <= 2) {
    newArr.push(a);
  }
});

console.log(newArr);
