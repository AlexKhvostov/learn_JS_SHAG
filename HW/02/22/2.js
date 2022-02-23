// Задача 2
// (+) Создайте объект User c полями firstName, lastName, year(год рождения)
// (+) Реализуйте геттер, который возвращает полное имя пользователя
// (+) Реализутей геттер age на основе года рождения пользователя
// (+) Создайте массив из 10 пользователей
// (+) Добавьте возможность вывода пользователей старше определенного возраста n, упорядоченых в алфовитном порядке в обратном направлении
// (+) Добавьте возможность удаления пользователей младше определенного возраста n

'use strict';
let users = [];

function User(firstName, lastName, year) {
  (this.firstName = firstName), (this.lastName = lastName), (this.year = year);

  if (new.target) {
    users.push(this);
  }
}

Object.defineProperty(User.prototype, 'age', {
  get: function () {
    return 2022 - this.year;
  },
});

Object.defineProperty(User.prototype, 'name', {
  get: function () {
    return this.firstName + ' ' + this.lastName;
  },
});

for (let i = 1; i < 10; i++) {
  new User(`name ${i}`, `last  ${i}`, `198${i}`);
}

console.log(users);

users.forEach((e) => console.log(e.age + ' ' + e.name));

function oldUser(age) {
  return users.filter((e) => e.age > age);
}

console.log('-');
oldUser(38).forEach((e) => console.log(e.age + ' ' + e.name));

function delYang(age) {
  users = users.filter((e) => e.age > age);
}

console.log('-');

delYang(36);
users.forEach((e) => console.log(e.age + ' ' + e.name));
