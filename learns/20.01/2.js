'use strict';
let arr = ['миНск', 'бРесТ', 'мОСКвА'];

let res = [];
res = arr.map((t) => t[0].toUpperCase() + t.toLowerCase().slice(1));

console.log(res);

arr.forEach(
  (t, i, a) => (a[i] = t[0].toUpperCase() + t.toLowerCase().slice(1))
);

console.log(arr);
