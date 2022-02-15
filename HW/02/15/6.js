// Задача 6
// Преобразуйте массив таким образом, что бы в нем все элементы были уникальными (встречаются лишь один раз)

'user strict';

const arr = [1, 2, 3, 1, 2, 5, 6, 3];
let newArr = [];
// let arrUniq = arr.reduce((newArr, a) => {
//   if (newArr.includes(a)) {
//     return newArr;
//   } else {
//     return newArr.push(a);
//   }
// }, []);

arr.forEach((a) => {
  if (!newArr.includes(a)) {
    newArr.push(a);
  }
});

console.log(newArr);
