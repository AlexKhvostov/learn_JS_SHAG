'use strict';
// Задача 4
// Дана строка, содержащая полное имя файла (например, 'c:\WebServers\home\testsite\www\myfile.txt'). Выделите из этой строки имя файла без расширения.

// let link = `c:\WebServers\home\testsite\www\myfile.txt`.replace(
//   String.fromCharCode(92),
//   String.fromCharCode(92, 92)
// );

// let link = `c:\WebServers\home\testsite\www\myfile.txt`
//   .split(String.fromCharCode(92))
//   .join(String.fromCharCode(92, 92));

let link = `c:\WebServers\home\testsite\www\myfile.txt`;

console.log(`Ссылка: \n${link}`);

link = link.replace(`\W`, String.fromCharCode(92, 92));

console.log(`Ссылка: \n${link}`);
console.log(String.fromCharCode(92, 92));

console.log(`c:\WebServers\home\testsite\www\myfile.txt`.includes(`\ `));
