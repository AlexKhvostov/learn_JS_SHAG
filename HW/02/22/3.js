// Задача 3
// Создайте объект shape и его наследников circle, rectangle.

// Oбъект shape содержит метод draw()(выводит название фигуры и ее цвет) и переменную хранящую цвет.
// Oбъект rectangle содержит свойство хранящее длины двух его сторон
// Oбъект circle содержит свойство radius
// Oбъекты circle, rectangle содержат координаты точек.
// Создать массив содержащий эти фигуры.
// В цикле нарисовать их (вызвать метод draw).

"use strict";

let share = {
  color: "black",

  draw() {
    console.log(`x = ${this.x}, y = ${this.y}.`);
  },
};

let circle = Object.create(share);
let rectangle = Object.create(share);

rectangle.l1 = 40;
rectangle.l2 = 42;
rectangle.x = 1;
rectangle.y = 3;

circle.r = 32;
circle.x = 5;
circle.y = 66;

let arr = [rectangle, circle];

console.log(arr);

arr.forEach((share) => {
  share.draw();
});
