// Задача 2
// Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов

// (->) Удалите из массив все элементы title который больше 25 символов
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

  const f = object.map((user) => {
    return {
      userId: user.userId,
      id: user.id,
      title: user.title,
      body: user.body
        .split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" "),
      bodyLength: user.body.length,
    };
  });

  console.log(f);
  // (->) Удалите из массив все элементы title который больше 25 символов
  console.log(
    "Удалите из массив все элементы title который больше 25 символов"
  );
  console.log(f.filter((e) => e.title.length < 25));
  //   Отсортируйте массив по длине body
  console.log("Отсортируйте массив по длине body");
  console.log(
    f
      .filter((e) => e.title.length < 25)
      .sort((e1, e2) => e1.body.length - e2.body.length)
  );
  // Удалите из всех элементов свойство userId
  console.log("// Удалите из всех элементов свойство userId");
  console.log(
    delUserId(
      f
        .filter((e) => e.title.length < 25)
        .sort((e1, e2) => e1.body.length - e2.body.length)
    )
  );
  console.log("// Преобразуйте результат в JSON строку и вывидите");
  console.log(
    JSON.stringify(
      delUserId(
        f
          .filter((e) => e.title.length < 25)
          .sort((e1, e2) => e1.body.length - e2.body.length)
      )
    )
  );
};

function delUserId(odj = {}) {
  odj.forEach((e) => delete e.userId);
  return odj;
}

request.send();
console.log("Done");
