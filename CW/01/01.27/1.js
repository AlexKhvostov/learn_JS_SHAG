'use strict';

'промесы - ожидание ';

/**
 * Создайте структуру с именем student, содержащую поля: фамилия и инициалы, номер группы, успеваемость (массив из пяти элементов).
 * Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
 * Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
 *
 */

// function Student(firstName, lastName, groupNamber, raiting) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.groupNamber = groupNamber;
//   this.raiting = raiting;
//   this.print = function () {
//     console.log(`${this.lastName} - ${this.groupNamber}`);
//   };
//   this.

// }

// const student1 = new Student('vasa', 'sidorov', 24, [1, 2, 43, 4, 5]);
// const student2 = new Student('коля', 'sidorov', 44, [1, 25, 3, 4, 5]);
// const student3 = new Student('игорь', 'sidorov', 24, [1, 2, 36, 4, 5]);
// const student4 = new Student('оля', 'kiva', 43, [1, 27, 3, 4, 5]);
// const student5 = new Student('alex', 'hvost', 33, [1, 2, 3, 4, 85]);
// let arr = [student1, student2, student3, student4, student5];

// console.log(arr[0].print());

function Student(firstName, lastName, groupNumber, rating) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.groupNumber = groupNumber;
  this.rating = rating;

  this.print = function () {
    console.log(this.lastName + ' -  ' + this.groupNumber);
  };

  this.middleRating = function () {
    return this.rating.reduce((r1, r2) => r1 + r2) / this.rating.length;
  };
  this.isPerfect = function () {
    return this.rating.every((r) => r >= 4);
  };
}

const student1 = new Student('Vasya1', 'Pupkin1', 12, [20, 4, 4, 5, 6]);
const student2 = new Student('Vasya2', 'Pupkin2', 22, [4, 30, 4, 5, 6]);
const student3 = new Student('Vasya3', 'Pupkin3', 32, [2, 3, 4, 5, 6]);
const student4 = new Student('Vasya4', 'Pupkin4', 52, [2, 3, 40, 5, 6]);
const student5 = new Student('Vasya5', 'Pupkin5', 22, [2, 3, 4, 5, 6]);
const student6 = new Student('Vasya6', 'Pupkin6', 132, [2, 3, 4, 5, 6]);
const student7 = new Student('Vasya7', 'Pupkin7', 1112, [2, 3, 4, 5, 6]);

const students = [
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
];
const best = students.filter((s) => s.isPerfect());
best.forEach((s) => s.print());
const sortedStudents = students.sort(
  (s1, s2) => s1.middleRating() - s2.middleRating()
);

console.log(sortedStudents);

sortedStudents.forEach((e) => {
  e.print();
});
