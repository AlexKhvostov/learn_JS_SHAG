'use strict';

let guest = {
  name: 'alex',
};

let user = {
  name: 'user',
  age: 19,
  citu: 'brest',
};

let authUser = {
  name: 'authUser',
  pasword: 123,
  email: 'Lf@FileSystem.ru', 
};

function Admin(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = true;
}
Admin.prototype = authUser;

Object.setPrototypeOf(user, guest);
Object.setPrototypeOf(authUser, user);

let admin = new Admin('artur', 14);

console.log(admin);
