// Задача 9

'user strict';
// Строка состоит из слов, разделенных одним или несколькими пробелами и знаками препинания.

const str =
  'Объектно-ориентированное   программирование (ООП) —   методология программирования, основанная на   представлении программы в виде совокупности    объектов, каждый из которых является   экземпляром определённого класса, а классы    образуют иерархию наследования';
// (+) Во всех подзадачах маленькие и больше буквы считать одинаковыми

// (+) Найдите слово наибольшей длины.
// (+) Определить какая буква в строке встречается чаще всего
// (+) Вывести в алфавитном порядке все слова, содержащие наибольшее количество гласных букв
// (+) Найти все слова, в которые буква «а» входит не менее двух раз
// (+) Вывести текст, составленный из первых букв всех слов содержащих букву «и».
// (+) Вывести слова, в которых нет повторяющихся букв
let str2 = str;
while (str2.includes('  ')) {
  str2 = str2.replaceAll('  ', ' ');
}
console.log(str2); // удалены все лишние пробелы
let arr = str2.toLowerCase().split(' ');
let maxWord = '';
arr.forEach((word) => {
  if (maxWord.length < word.length) {
    maxWord = word;
  }
});

console.log(`Максимальное слово "${maxWord}", длина: ${maxWord.length}`);

let alphabet = {};
let notVowels = [
  `й`,
  `ц`,
  `к`,
  `н`,
  `г`,
  `ш`,
  `щ`,
  `з`,
  `х`,
  `ъ`,
  `ф`,
  `в`,
  `п`,
  `р`,
  `л`,
  `д`,
  `ж`,
  `ч`,
  `с`,
  `м`,
  `т`,
  `ь`,
  `б`,
];

let vowels = [`я`, `и`, `ю`, `ы`, `а`, `о`, `э`, `у`, `е`, `ё`];

let strLower = str2.toLowerCase();
let maxCountLit = 0;
let litWhoMaxCount = '';

// console.log(strLower);
for (let i = 0; i < strLower.length; i++) {
  if (alphabet.hasOwnProperty(strLower[i])) {
    alphabet[strLower[i]]++;
  } else {
    alphabet[strLower[i]] = 1;
  }
  if (maxCountLit < alphabet[strLower[i]]) {
    maxCountLit = alphabet[strLower[i]];
    litWhoMaxCount = strLower[i];
  }
}
console.log(alphabet);
console.log('чаще всего : ' + litWhoMaxCount + ' - ' + maxCountLit);

let ObjofArr = arr.map((e) => ({
  word: e,
  length: e.length,
  countVowels: e.split('').reduce((count, lit) => {
    if (vowels.includes(lit)) {
      return count + 1;
    } else {
      return count;
    }
  }, 0),
  countNoVowels: e.split('').reduce((count, lit) => {
    if (notVowels.includes(lit)) {
      return count + 1;
    } else {
      return count;
    }
  }, 0),
  countA: e.split('').reduce((count, lit) => {
    if (lit == 'а') {
      return count + 1;
    } else {
      return count;
    }
  }, 0),
  countI: e.split('').reduce((count, lit) => {
    if (lit == 'и') {
      return count + 1;
    } else {
      return count;
    }
  }, 0),

  uniqueLetters:
    e.split('').reduce((count, lit, i, arr) => {
      //console.log(typeof count);

      if (arr.indexOf(lit) == arr.lastIndexOf(lit)) {
        return count + 1;
      } else {
        return count;
      }
    }, 0) == e.length,

  print: function () {
    console.log(`  ${this.word}  [ гласных = ${this.countVowels} ]`);
  },
}));
console.log(
  'полученный объект: ++++++++++++++++++++++++++++++++++++++++++++++'
);
ObjofArr.forEach((e) => console.log(e));

ObjofArr.sort((word1, word2) => {
  if (word1.word > word2.word) {
    return 1;
  }
  if (word1.word < word2.word) {
    return -1;
  }
  return 0;
});

console.log(
  '\nСортировка по алфавиту: =============================================================='
);
ObjofArr.forEach((e) => e.print());

ObjofArr.sort((word1, word2) => word2.countVowels - word1.countVowels);
console.log(
  '\nСортировка по глассным : =============================================================='
);
ObjofArr.forEach((word) => word.print());

console.log(
  '\nСортировка по глассным ( через print): =============================================================='
);
ObjofArr.forEach((word) => word.print());

console.log(
  '\nЕсли больеш 2 "а" в слове : =============================================================='
);
ObjofArr.forEach((word) => {
  if (word.countA >= 2) {
    word.print();
  }
});

console.log(
  '\nстрока из первых букв слов в которых еть "и" : =============================================================='
);
let withI = '';
ObjofArr.forEach((word) => {
  if (word.countI > 0) {
    withI += word.word[0] + ' ';
  }
});
console.log(withI);

console.log(
  '\nБез повторных букв =============================================================='
);
ObjofArr.forEach((word) => {
  if (word.uniqueLetters) {
    word.print();
  }
});
