// Задача на взаимодействие между классами. Разработать систему «Автобаза».
// Диспетчер распределяет заявки на Рейсы между Водителями и назначает для этого Автомобиль.
// Водитель может сделать заявку на ремонт.
// Диспетчер может отстранить Водителя от работы.
// Водитель делает отметку о выполнении Рейса и состоянии Автомобиля.
'use strict';
let reises = [];

function Reis(cityStart, cityFinish, driver = {}, auto = {}, manager = {}) {
  this.manager = manager;
  this.cityStart = cityStart;
  this.cityFinish = cityFinish;

  this.driver = driver;
  this.auto = auto;
  this.num = NaN;
  this.status = 'новая'; // ноаая , в дороге , таможня , завершена
  if (new.target) {
    reises.push(this);
  }
}

function Driver(name) {
  this.name = name;
  this.actual = true;
}

function Auto(num) {
  this.num = num;
  this.servise = false;
}

function Manager(name) {
  this.name = name;
}

let a = new Reis('Brest', 'кобрин');
let b = new Reis('minsk', 'moskow');

console.log(a);
console.log(b);
console.log('_--__-_____');

console.log(reises);
