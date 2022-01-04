"use strict";

// let l = [11, 22, 33, "444", 55555, "666666"];
// let result = [];
// let k = 0;

// for (let i = 0; i < l.length; i++) {
//   console.log(i, l[i], typeof l[i]);

//   if (typeof l[i] == "number") {
//     result[k] = l[i];
//     k++;
//   }
//   console.log(result);
// }

// let str = "asdfxfdfwoodf";
// str = str.toUpperCase();

// let arr = new Map();
// arr.set("O", 0);
// arr.set("X", 0);

// console.log(str);

// for (let i = 0; i < str.length; i++) {
//   if (str[i] == "X" || str[i] == "O") {
//     arr.set(str[i], arr.get(str[i]) + 1);
//   }
// }

// console.log(arr);
// console.log(arr.size, str.length);

// if (arr.get("O") == arr.get("X")) {
//   return true;
// } else {
//   return false;
// }

/////////////////

// let sq = 6235;
// let a = Math.sqrt(sq);
// // if (a % 1 > 0) {
// //   console.log(-1);
// //   return -1;
// // } else {
// //   console.log((a + 1) ** 2);
// //   return (a + 1) ** 2;
// // }

// return a % 1 ? -1 : ++a * a;

///////////////////////

// let s = "sdfsdthejwemocw";
// let len = 0;
// let error = 0;

// for (let i = 0; i < s.length; i++) {
//   if (s[i] <= "m") {
//     len++;
//   } else {
//     error++;
//   }
// }
// console.log(error / len);

/////////////////////////

let value = 23432;

let str = value.toString();
let minII = Math.round(value ** (1 / 4));
let count = value.toString().length;

for (let i = 0; i < count; i++) {
  value = value - str[i] ** count;
}

if (value == 0) {
  console.log("да");
  return true;
} else {
  console.log("нет");
  return false;
}

let sd = value == 0 ? true : false;
