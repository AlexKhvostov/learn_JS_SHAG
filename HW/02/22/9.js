// Задача 9

"user strict";
// Строка состоит из слов, разделенных одним или несколькими пробелами и знаками препинания.

// (+) Во всех подзадачах маленькие и больше буквы считать одинаковыми

// (+) Найдите слово наибольшей длины.
// (+) Определить какая буква в строке встречается чаще всего
// (+) Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв
// (+) Найти все слова, в которые буква «а» входит не менее двух раз
// (-) Вывести текст, составленный из первых букв всех слов содержащих букву «и».
// (-) Вывести слова, в которых нет повторяющихся букв
"use strict";

const str =
  "Объектно-ориентированное   программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования";
let str2 = str;
while (str2.includes("  ")) {
  str2 = str2.replaceAll("  ", " ");
}
console.log("| Убрал пробелы");
console.log("| - -");
console.log(str2);
console.log("| - - ");

let arrWords = str2.split(" ");
let maxIndex = 0;
let maxWord = "";

arrWords.forEach((word, ind) => {
  if (word.length > maxWord.length) {
    maxWord = word;
    maxIndex = ind;
  }
});

console.log(`| Cлово: ${maxWord}, длина ${maxWord.length} `);

// (-) Определить какая буква в строке встречается чаще всего

let arrLit = str2.toLowerCase().split("");

let abc = new Map();

arrLit.forEach((l) => {
  if (!abc.has(l)) {
    abc.set(l, 1);
  } else {
    abc.set(l, abc.get(l) + 1);
  }
});

console.log(abc);

let maxLit = "";
let maxLitCount = 0;

for (let l of abc.entries()) {
  if (l[1] > maxLitCount) {
    maxLit = l[0];
    maxLitCount = l[1];
  }
}

console.log(maxLit + " - " + maxLitCount);

// (-) Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв

arrWords
  .sort((w1, w2) => {
    if (w1.toLowerCase() > w2.toLowerCase()) {
      return 1;
    }
    if (w1.toLowerCase() < w2.toLowerCase()) {
      return -1;
    }
    return 0;
  })
  .sort((w1, w2) => {
    if (countAou(w1.toLowerCase()) > countAou(w2.toLowerCase())) {
      return -1;
    }
    if (countAou(w1.toLowerCase()) < countAou(w2.toLowerCase())) {
      return 1;
    }
    return 0;
  });

function countAou(str) {
  let count = 0;
  str
    .toLowerCase()
    .split("")
    .forEach((l) => {
      if (
        l == "у" ||
        l == "е" ||
        l == "ы" ||
        l == "а" ||
        l == "о" ||
        l == "э" ||
        l == "и"
      ) {
        count++;
      }
    });

  return count;
}

console.log(arrWords);
console.log(countAou("парадигма"));
// (-) Найти все слова, в которые буква «а» входит не менее двух раз

console.log(
  str2
    .split(" ")
    .filter(
      (word) =>
        word.toLowerCase().indexOf("а") !== word.toLowerCase().lastIndexOf("а")
    )
);

// (-) Вывести текст, составленный из первых букв всех слов содержащих букву «и».
// легко

// (-) Вывести слова, в которых нет повторяющихся букв

console.log(
  str2.split(" ").filter((word) => word.length === new Set(word).size)
);
