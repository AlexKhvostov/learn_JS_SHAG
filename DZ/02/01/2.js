'use strict';
// Создайте структуру с именем train, содержащую поля: название пункта назначения, номер поезда, время отправления.

// Ввести данные в массив из пяти элементов типа train
// Упорядочить элементы по номерам поездов.
// Добавить возможность вывода информации о поезде, номер которого введен пользователем.
// Добавить возможность сортировки массив по пункту назначения,
// (* причем поезда с одинаковыми пунктами назначения должны быть упорядочены по времени отправления)

function Train(point, num, timeStart) {
  this.point = point;
  this.num = num;
  this.timeStart = timeStart;

  this.print = function () {
    console.log(`${this.num} - ${this.timeStart} - ${this.point}`);
  };

  this.alert = function () {
    alert(`${this.num} - ${this.timeStart} - ${this.point}`);
  };
}

let train8 = new Train('Moskow', 511, 1233);
let train9 = new Train('Minsk', 744, 1022);
let train3 = new Train('Kiev', 784, 2233);
let train12 = new Train('Gomel', 987, 1911);
let train5 = new Train('Vitebsk', 645, 1440);
let train6 = new Train('Voronezh', 696, 1359);
let train7 = new Train('Brest', 211, 1131);
let train11 = new Train('Brest', 541, 1631);
let train1 = new Train('Brest', 521, 1331);
let train2 = new Train('Voronezh', 666, 2359);
let train10 = new Train('Voronezh', 643, 2259);
let train4 = new Train('Voronezh', 611, 2159);

let trains = [
  train1,
  train2,
  train3,
  train4,
  train5,
  train6,
  train7,
  train8,
  train9,
  train10,
  train11,
  train12,
];

trains.sort((a, b) => a.num - b.num).forEach((a) => a.print());

let strOfNumTrain = trains.map((e) => e.num);
let numSearch = prompt(`Искомый один из номеров поезда : ${strOfNumTrain}`);
// let numSearch = 645;
// console.log(' Поиск поезда под номер numSearch = 645');
// trains.filter((e) => e.num == numSearch).forEach((a) => a.print());

// function trainSearch(num) {
//   trains.filter((e) => e.num == num).forEach((a) => a.print());
// }
// let itog = trainSearch(numSearch);

trains.filter((e) => e.num == numSearch).forEach((a) => a.alert());

function trainstSortPoint() {
  trains.sort((a, b) => {
    if (a.point > b.point) {
      return 1;
    } else if (a.point < b.point) {
      return -1;
    } else if (a.point == b.point) {
      return 0;
    }
  });
}

function trainstSortTimeStart() {
  trains.sort((a, b) => a.timeStart - b.timeStart);
}
trainstSortTimeStart();
trainstSortPoint();

console.log('сортировка по времени и городу ');
trains.forEach((e) => e.print());
