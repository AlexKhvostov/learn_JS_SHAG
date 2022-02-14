'use strict';
// Аквариум

// Опишите объект fish

// имя
// цвет
// хищник (да или нет)
// размер
// скорость

// Опишите объект aquarium

// (v) массив рыбок
// (v) вывод списка рыбок Name: Имя, Color: Цвет, Size: размер, Speed: скорость, Predator: (да или нет) (соответсвенно)
// (v) добавление рыбок
// (v) смерть рыбки по имени
// (v) вывод всех рыбок чья скорость выше определенной
// (v) вывод только хищных рыб
// (v) сортировка рыбок по имени
// (v) сортировка рыбок по размеру

function Aquarium(fishList = []) {
  Aquarium.arrayAquarium = [];

  this.fishList = fishList;
  this.cuont = this.fishList.length;

  this.fastSpeed = function (minSpeed) {
    return this.fishList
      .filter((e) => e.speed > minSpeed)
      .forEach((e) => e.print());
  };

  this.predator = function () {
    return this.fishList
      .filter((e) => e.predator == true)
      .forEach((e) => e.print());
  };

  this.sortOfName = function () {
    this.fishList
      .sort((e1, e2) => {
        if (e1.name > e2.name) {
          return 1;
        }
        if (e1.name < e2.name) {
          return -1;
        }
        return 0;
      })
      .forEach((e) => e.print());
  };
  this.sortOfSize = function () {
    this.fishList
      .sort((e1, e2) => {
        if (e1.size > e2.size) {
          return 1;
        }
        if (e1.size < e2.size) {
          return -1;
        }
        return 0;
      })
      .forEach((e) => e.print());
  };

  this.death = function (name) {
    console.log(`|=  Поиск рыбки для убийства:`);
    this.fishList.forEach((e, i) => {
      console.log(`|=  ${i + 1}-я рыбка :`);
      if (e.name == name) {
        e.life = false;
        console.log(`|= <;;;;;}==  (нашли и убили)  :`);
      }
    });
  };

  this.delDeth = function () {
    this.fishList = this.fishList.filter((e) => e.life !== false);
  };

  this.print = function () {
    this.fishList.forEach((e) => {
      e.print();
    });
  };
  this.printLife = function () {
    this.fishList.forEach((e) => {
      if (e.life) {
        e.print();
      }
    });
  };

  if (new.target) {
    Aquarium.arrayAquarium.push(this);
  }
}

function Fish(name, color, size, speed, predator, aquarium = '', life = true) {
  this.name = name;
  this.color = color;
  this.size = size;
  this.speed = speed;
  this.predator = predator;
  this.life = life;

  this.print = function () {
    console.log(
      `${this.name}, цвет: ${this.color}, размер  ${this.size}, скорость : ${this.speed}, хищник : ${this.predator}, жива: ${this.life} `
    );
  };

  if (new.target) {
    if (aquarium !== '') {
      aquarium.fishList.push(this);
    }
  }
}

let aquarium1 = new Aquarium(); // аквариум № 1
let aquarium2 = new Aquarium(); // аквариум № 2

let fish1 = new Fish(`Name1`, `red`, `211`, `6`, true, aquarium1);
let fish3 = new Fish(`Name3`, `green`, `171`, `9`, false, aquarium1);
let fish7 = new Fish(`Name9`, `Gray`, `171`, `9`, false, aquarium2); // Рыбка из 2го аквариума
let fish2 = new Fish(`Name2`, `blue`, `131`, `2`, true, aquarium1);
let fish4 = new Fish(`Name4`, `white`, `101`, `9`, false, aquarium1);
let fish5 = new Fish(`Name5`, `black`, `112`, `7`, true, aquarium1);

console.log(`1й аквариум : `);
aquarium1.print();
console.log(`2й аквариум : `);
aquarium2.print();

console.log(` ==== удаляем элемент с именем Name1 ==== `);
aquarium1.death('Name1');

console.log(`Убили первую рыбку : ${fish1.life}`);
console.log(` === только живые === `);
aquarium1.printLife();

console.log(` Аквариум до и после `);
console.log(` =========== `);
console.log(`Аквариум 1 до удаления мертвых рыбок :`);
aquarium1.print();
console.log(`== Удаляем мертвых из аквариума == ( done ) `);
aquarium1.delDeth();
console.log(`Аквариум 1 после удаления:`);
aquarium1.print();

console.log(` =========== `);
console.log(`|`);
console.log(` === скорость больше заданной == `);
aquarium1.fastSpeed(7);

console.log(` =========== `);
console.log(`|`);
console.log(` === только хищники == `);
aquarium1.predator();

console.log(` =========== `);
console.log(`|`);
console.log(` === сортировка по имени == `);
aquarium1.sortOfName();

console.log(` =========== `);
console.log(`|`);
console.log(` == сортировка по размеру == `);
aquarium1.sortOfSize();

console.log(Aquarium.arrayAquarium.forEach((e) => e.print()));
