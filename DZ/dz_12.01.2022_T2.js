"use strict";

// Задача 2
// Дано два числа. Если хотя бы одно из них больше 30, то вывести yes, иначе no.

let n1 = +prompt("введите число: ");

let n2 = +prompt("введите число: ");

if (n1 > 30 || n2 > 30) {
  console.log("yes");
} else {
  console.log("no");
}
