// Задача 2
// Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов

// Удалите из массив все элементы title который больше 25 символов
// Каждуй первую букву слова из свойства body сделайте заглавной
// Отсортируйте массив по длине body
// Удалите из всех элементов свойство userId
// Выведите результат
// Преобразуйте результат в JSON строку и вывидите

"use strict";
const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/posts");

request.onload = function () {
  console.log("Onload");
  const result = request.response;

  const object = JSON.parse(result);
  // TODO: type code here
};

request.send();
console.log("Done");
