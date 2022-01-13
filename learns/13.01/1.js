"use strict";

// // let s = "123qwe__ewq321";
// // let l = s.length;
// // let result = "";

// // if (l % 2 == 0) {
// //   result = s.slice(0, 1) + s.slice(-1);
// // } else {
// //   result = s.slice(0, 1) + s.slice((l - 1) / 2, (l + 1) / 2) + s.slice(-1);
// // }

// // console.log(result);

// let s = " + + +0+00+ -      -  _  _  - - _ -   0       --";

// s.startsWith("abc") ? (s = s.replace("abc", "www")) : (s = s + "zzz");

// console.log(s);

// //Дана строка. Определите общее количество символов '+' и '-' в ней. А так же сколько таких символов, после которых следует цифра ноль.

// let countPlus = 0;
// let countMinus = 0;
// let countPlus0 = 0;
// let countMinus0 = 0;

// for (let i = 0; i <= s.length; i++) {
//   if (s[i] == "+") {
//     countPlus++;
//     if (s[i + 1] === "0") {
//       countPlus0++;
//     }
//   } else if (s[i] == "-") {
//     countMinus++;
//     if (s[i + 1] === "0") {
//       countMinus0++;
//     }
//   }
// }

// console.log(
//   `
//   +  : ${countPlus} \n
//   -  : ${countMinus}  \n
//   +0 : ${countPlus0} \n
//   -0 : ${countMinus0}
//   `
// );

// Дана строка. Определите, какой символ в ней встречается раньше: 'x' или 'w'. Если какого-то из символов нет, вывести сообщение об этом.

// let s = "   Hello     World,    oh oh   oh ! ! !   ! ";
// while (s.indexOf("  ") >= 0) {
//   s = s.replaceAll("  ", " ");
// }
// console.log(s);

// Вот так даже лучше
let n = 11;
for (let i = 1; i <= n; i += 2) {
  console.log(
    ""
      .padStart((n - i) / 2, "*")
      .padEnd((n + i) / 2, "A")
      .padEnd(n, "*")
  );
}
