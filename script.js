"use strict";

console.log("silens is golden");

console.log(1 + 2 - 4);

console.log("*         * *        *");
console.log("  *     *     *     *");
console.log("   *   *       *   *");
console.log("    * *         * *");

let a = 2;
let b = 3;

console.log("8:");
console.log((a + 4 * b) * (a - 3 * b) + a ** 2);

console.log("9:");

let x = -2;
console.log(Math.abs(x) + x ** 5);

console.log("10:");

// a = +prompt("число 1 ");
// b = +prompt("число 2 ");

console.log("14:");
console.log(a, b);
console.log("a + b:", a + b);
console.log("a * b:", a * b);

console.log("31:");

console.log(
  "Дан прямоугольник размером 647 x 170. Сколько квадратов со стороной 30 можно вырезать из него?"
);
// Дан прямоугольник размером 647 x 170. Сколько квадратов со стороной 30 можно вырезать из него?

let h = 170;
let w = 647;
let sq = 30;
let countW = h / sq;
let countH = w / sq;
countH = countH - (countH % 1);
countW = countW - (countW % 1);

console.log(countW * countH);

console.log(
  "64: Дано четырехзначное число. Если оно читается слева направо и справа налево одинаково, то вывести yes, иначе no."
);

a = +prompt("4-значное число:");

let a1 = a % 10;
let a2 = ((a % 100) - a1) / 10;
let a3 = ((a % 1000) - a2 * 10 - a1) / 100;
let a4 = (a - a3 * 100 - a2 * 10 - a1) / 1000;

let str = console.log(a, " => ", a1, a2, a3, a4);

if (a1 == a4 && a2 == a3) {
  console.log("yes! число семитричное ! ");
} else {
  console.log("no! число  НЕ семитричное ! ");
}

str = a + " => " + a1 + a2 + a3 + a4;
console.log(str);

console.log(
  "Дано четырехзначное число. Переставьте местами цифры так, чтобы сначала оказались цифры, меньшие пяти."
);

let temp;
if (a1 > 5) {
  temp = a1;
  a1 = a2;
  a2 = a1;
}
if (a2 > 5) {
  temp = a2;
  a2 = a3;
  a3 = a2;
}
if (a3 > 5) {
  temp = a3;
  a3 = a4;
  a4 = a3;
}

a = a1 * 1000 + a2 * 100 + a3 * 10 + a4;

console.log("finish:");
console.log(a);
