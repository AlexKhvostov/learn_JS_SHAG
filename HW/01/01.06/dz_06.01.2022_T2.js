"use strict";

// Домашнее задание №2  на 6 января

let katet1 = +prompt("первый катет: ");
let katet2 = +prompt("второй катет: ");

let s = (katet1 * katet2) / 2;
let gip = Math.sqrt(katet1 ** 2 + katet2 ** 2);
let perimtr = katet2 + katet1 + gip;

console.log(s, perimtr, gip);
