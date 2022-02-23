'use strict';
let log = console.log;

function Person(name) {
  this.name = name;
  this.speak = function () {
    log("Hi, I'm " + this.name);
  };
}
Person.prototype.talk = function () {
  log('Hello, my name is ' + this.name);
};

let person1 = new Person('Alice');
let person2 = new Person('Peter');
person1.speak();
person2.talk();

let _wef = 3245;
log(_wef);

function Something(defaultFoo) {
  this._foo = defaultFoo;
}

Object.defineProperty(Something.prototype, 'foo', {
  get: function () {
    return this._foo;
  },
  set: function (value) {
    this._foo = value;
  },
});

var something = new Something('bar');
console.log(something.foo);
something.foo = 'baz';
console.log(something.foo);
console.log(something);
