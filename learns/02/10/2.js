'use strict';

let wasBorn = new Date(1989, 6, 2);
let nowDate = Date.now();

console.log(wasBorn.getTime());
console.log(nowDate);

let countMilliSec = nowDate - wasBorn.getTime();

console.log(countMilliSec);
console.log(countMilliSec - 1_000_000_000_000);
