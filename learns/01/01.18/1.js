'use strict';
let arr = [];

function newArray(length) {
  for (let i = 0; i < length; i++) {
    arr[i] = Math.round(Math.random() * 1000);
  }
}

newArray(100);

let maxItem = arr[0];
let minItem = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxItem) {
    maxItem = arr[i];
  }

  if (arr[i] < minItem) {
    minItem = arr[i];
  }
}

console.log(minItem + maxItem);
