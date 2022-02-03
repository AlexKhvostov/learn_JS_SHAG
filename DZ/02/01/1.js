'use strict';
// Описать объект, представляющий треугольник. Предусмотреть методы для создания объектов, вычисления площади и периметра

function Triangle(a, b, c) {
  this.a = +a;
  this.b = +b;
  this.c = +c;

  // this.isReal = function () {
  //   if (
  //     this.a + this.b > this.c &&
  //     this.a + this.c > this.b &&
  //     this.c + this.b > this.a
  //   ) {
  //     //console.log(        `Треугольник со сторонами ${this.a}, ${this.b} и ${this.c} существоет. `      );
  //     return true;
  //   } else {
  //     console.log(
  //       `Треугольника со сторонами ${this.a}, ${this.b} и ${this.c} не существоет. `
  //     );
  //     return false;
  //   }
  // };

  this.isReal = function () {
    return (
      this.a + this.b > this.c &&
      this.a + this.c > this.b &&
      this.c + this.b > this.a
    );
  };

  this.print = function () {
    console.log(`
     a : ${this.a},
     b : ${this.b}, 
     c : ${this.c};`);
  };

  this.square = function () {
    if (this.isReal()) {
      let p = this.perimeter() / 2;

      // console.log(p * (p - this.a) * (p - this.b) * (p - this.c));
      // console.log(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
      return (
        Math.round(
          Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100
        ) / 100
      );
    } else {
      // return 'треугольника не существует';
    }
  };

  this.perimeter = function () {
    if (this.isReal()) {
      //console.log(`периметр ${+this.a + this.b + this.c}`);
      return this.a + this.b + this.c;
    } else {
      // return 'треугольника не существует';
    }
  };

  this.random = function () {
    return new Triangle(
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 20)
    );
  };
}

const treug1 = new Triangle(
  Math.round(Math.random() * 20) + 10,
  Math.round(Math.random() * 20) + 10,
  Math.round(Math.random() * 20) + 10
);

treug1.print();

console.log(`периметр ${treug1.perimeter()}`);
console.log(`площадь ${treug1.square()}`);

// let a = Triangle.random();
// console.log(a);
