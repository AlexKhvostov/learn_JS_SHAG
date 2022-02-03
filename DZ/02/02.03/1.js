'use strict';

// (v) Объект Покупатель:

// (v) Фамилия,
// (v)  Имя,
// (v) Отчество,
// (v) Адрес,
// (v) Номер кредитной карточки,
// (v) Номер банковского счета;
// (v) Создать массив из 5 покупателей.

// (v) Вывести список покупателей в алфавитном порядке

//(v)  Вывести покупателей, у которых номер кредитной карточки находится в заданном диапазоне. (между 2 числами, задаете вы сами или спрашиваете через prompt)

function Shop(buyers = []) {
  this.buyers = buyers;

  this.sort = function () {
    this.buyers.sort((e1, e2) => {
      if (e1.fname > e2.fname) {
        return 1;
      }
      if (e1.fname < e2.fname) {
        return -1;
      }
      return 0;
    });
    this.buyers.sort((e1, e2) => {
      if (e1.firstname > e2.firstname) {
        return 1;
      }
      if (e1.firstname < e2.firstname) {
        return -1;
      }
      return 0;
    });
    this.buyers.sort((e1, e2) => {
      if (e1.lastname > e2.lastname) {
        return 1;
      }
      if (e1.lastname < e2.lastname) {
        return -1;
      }
      return 0;
    });
  };

  this.cardFound = function (nMin, nMax) {
    return this.buyers.filter((e) => +nMin < +e.numCard && +e.numCard < +nMax);
  };

  this.print = function () {
    this.buyers.forEach((e) => e.print());
  };
}

function Buyer(lastname, firstname, fname, address, numCard, numScore) {
  this.lastname = lastname;
  this.firstname = firstname;
  this.fname = fname;
  this.address = address;
  this.numCard = numCard;
  this.numScore = numScore;

  this.print = function () {
    console.log(
      `${this.lastname} ${this.firstname} ${this.fname}, ${this.address}, ${this.numCard}, ${this.numScore}`
    );
  };

  if (new.target) {
    shop1.buyers.push(this);
  }
}

let shop1 = new Shop();

let buyer5 = new Buyer(
  'lastname5',
  'firstname8',
  'fname5',
  'address5',
  3425,
  1234567890235
);
let buyer2 = new Buyer(
  'lastname2',
  'firstname7',
  'fname2',
  'address2',
  1342,
  1893567340333
);
let buyer3 = new Buyer(
  'lastname5',
  'firstname6',
  'fname3',
  'address3',
  1423,
  4434567890235
);
let buyer1 = new Buyer(
  'lastname1',
  'firstname9',
  'fname1',
  'address1',
  1341,
  1191567340311
);

let buyer4 = new Buyer(
  'lastname4',
  'firstname11',
  'fname4',
  'address4',
  12343,
  1234367890235
);



shop1.print();
console.log('--------');
shop1.sort();
shop1.print();
console.log('--------');
console.log(`покупатели с картами из диапазона `);
shop1.cardFound(8888, 100000).forEach((e) => e.print());
