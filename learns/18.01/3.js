'use strict';
let str = 'минск брест Кобрин приужаны ружаны береза';

let arr = str.split(' ');

//
// arr[0] = str[0].toUpperCase();
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === ' ') {
//     arr[i + 1] = arr[i + 1].toUpperCase();
//   }
// }
// str = arr.join('');

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
str = arr.join(' ');
console.log(arr);
console.log(str);
