'use strict';
let user = {
  name: 'ivan',
  b: 2,
  print: function () {
    console.log(this.user + '   ' + this.b);
  },
};

Object.defineProperty(user, 'age', {
  value: 30,
  writable: false,
});

Object.defineProperties

console.log(user.age);

user.age = 50;

console.log(user.age);
