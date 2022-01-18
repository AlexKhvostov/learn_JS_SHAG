'use strict';
let arr = [];

function newArray(length) {
  for (let i = 0; i < length; i++) {
    arr[i] = Math.round(Math.random() * 1000);
  }
}

// newArray(100);

let s = 'kn45kjhk34jh54k54h3k';
let sum = 0;
for (let i = 0; i < s.length; i++) {
  if (Number.isInteger(+s[i])) {
    sum += +s[i];
  }
}

console.log(sum);


let a = b = 12 ;
console.log(a, b)
b=2
console.log(a, b)






