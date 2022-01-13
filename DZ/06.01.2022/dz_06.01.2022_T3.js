"use strict";

// Домашнее задание №2  на 6 января

let n1 = +prompt("первое число: ");
let n2 = +prompt("второе число: ");
let n3 = +prompt("третье число: ");

let maximum = 0;

if (n1 > maximum) {
  maximum = n1;
}

if (n2 > maximum) {
  maximum = n2;
}
if (n3 > maximum) {
  maximum = n3;
}

console.log(maximum, " = > ", n1, n2, n3);
