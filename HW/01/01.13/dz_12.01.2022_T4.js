"use strict";

// Задача 4
// Для данного n найти сумму 1+2+3+...+n. Например, для n=10 ответ равен 55.

let n1 = +prompt("введите  число: ");
let k = 0;

for (let i = 1; i <= n1; i++) {
  k += i;
}

console.log(k);
