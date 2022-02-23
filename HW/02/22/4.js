// Задача 4
// Реализуйте функции конструктор для Student и Aspirant, аспирант отличается от студента наличием некой научной работы.

// Student содержит свойства:

// firstName
// lastName
// group
// averageMark (содержащую среднюю оценку).
// Aspirant имеет дополнительное свойство work

// Создать метод getScholarship() для Student, который возвращает сумму стипендии. Если средняя оценка студента больше или равна 5, то сумма 100, иначе 80.

// Переопределить этот метод в Aspirant. Если средняя оценка аспиранта равна 5, то сумма 200, иначе 180.

// Создать несколько объектов типа Student и Aspirant. Создать массив содержащий объекты Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.

'use strict';
let log = console.log;
let students = [];

function Student(firstName, lastName, group, averageMark) {
  this.firstName = firstName || 'no name';
  this.lastName = lastName || 'no name';
  this.group = group || 0;
  this.averageMark = averageMark || 0;

  this.getScholarship = function () {
    if (averageMark >= 5) {
      return 100;
    } else {
      return 80;
    }
  };

  if (new.target) {
    students.push(this);
  }
}

function Aspirant(firstName, lastName, group, averageMark, work) {
  this.work = work;
  this.getScholarship = function () {
    if (averageMark >= 5) {
      return 200;
    } else {
      return 180;
    }
  };

  Object.setPrototypeOf(
    this,
    new Student(firstName, lastName, group, averageMark)
  );

  if (new.target) {
    students.push(this);
  }
}

let pers1 = new Aspirant('stud1', 'last1', 4, 5.5, 'тема работы 1');
let pers2 = new Aspirant('stud2', 'last2', 2, 3.5, 'тема работы 2');
let pers3 = new Aspirant('stud3', 'last3', 5, 6.5, 'тема работы 3');
let pers4 = new Aspirant('stud4', 'last4', 8, 7.5, 'тема работы 4');

log(students);

students.forEach((e) => log(e.getScholarship()));
