`use strict`;
let str =
  'Lorem Ipsum is simply du5mmy text of the printing and typesetting industry. Lorem Ips1um has been the industry`s standard du2mmy text ever since the 1s, when an unknown printer took a galley of type and scram4bled it to make a type spe6cimen book. It has survived not only five cen8turies, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 9s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';
//str = `Asd a3d f  3Dd f.34DD erTr43`;

let arrStr = str.split(` `);
console.log(arrStr);
// кол-во пробелов
let countSpace = arrStr.length - 1;

// количество слов длинныее 5
let countWordiBig5 = 0;
arrStr.forEach((e) => {
  if (e.length > 5) {
    countWordiBig5 += 1;
  }
});

// сцмма всех чисел из строки
let arrStrForNum = str.split(``);
let arrNumFromStr = [];
let indexArrNum = 0;
let sumNum = 0;

arrStrForNum.forEach((e) => {
  if (isFinite(e) || e == '.') {
    arrNumFromStr[indexArrNum] += e;
  } else {
    indexArrNum += 1;
    arrNumFromStr[indexArrNum] = '';
  }
});
//console.log(`  // массив чисел из текста: ${arrNumFromStr}`);
arrNumFromStr.forEach((e, i, arr) => {
  arr[i] = +parseFloat(e);
  if (isFinite(+parseFloat(e))) {
    sumNum += +parseFloat(e);
  }
});

// все слова строчные
let newLoverStr = '';
let newLoverArr = [];
arrStr.forEach((e) => {
  newLoverArr.push(e.toLowerCase());
});

newLoverStr = newLoverArr.join(' ');

// Удалите в словах среднюю букву (если она есть)
let arrStrWithOutMiddleChar = [];
arrStr.forEach((e) => {
  if (e.length > 0 && e.length % 2 == 1) {
    arrStrWithOutMiddleChar.push(
      e.slice(0, (e.length - 1) / 2) + e.slice((e.length + 1) / 2)
    );
  } else {
    arrStrWithOutMiddleChar.push(e);
  }
});

// вывод результатов
console.log(`  // Посчитайте количество пробелов в строке : ${countSpace}`);
console.log(
  `  // Посчитайте количество слов длина которых больше 5 : ${countWordiBig5}`
);
//console.log(`  // массив чисел из текста: ${arrNumFromStr}`);
console.log(`  // Найдите сумму всех чисел из текста ${sumNum}`);
console.log(
  `  // Сделайте все слова строчными (с маленькой буквы): "${newLoverStr}"`
);
console.log(
  `  // Удалите в словах среднюю букву (если она есть): "${arrStrWithOutMiddleChar.join(
    ' '
  )}"`
);
