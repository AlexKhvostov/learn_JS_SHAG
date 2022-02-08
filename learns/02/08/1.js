// Задача 2
// Получите по адресу https://jsonplaceholder.typicode.com/posts массив объектов

// (->) Удалите из массив все элементы title который больше 25 символов
// Каждуй первую букву слова из свойства body сделайте заглавной
// Отсортируйте массив по длине body
// Удалите из всех элементов свойство userId
// Выведите результат
// Преобразуйте результат в JSON строку и вывидите

'use strict';
const request = new XMLHttpRequest();

request.open('GET', 'http://192.168.0.200:3000/1');

request.onload = function () {
  console.log('Onload');
  const result = request.response;

  const object = JSON.parse(result);
  let users = object.users;
  let posts = object.posts;
  // TODO: type code here

  const userList = users.map((user) => {
    return {
      name: user.name,
      id: user.id,
      posts: posts.filter((e) => e.userId === user.id),
    };
  });

  posts.forEach((p) => {
    p.user = users.find((u) => u.id === p.userId).name;
  });

  console.log(userList);
  console.log('users у которых нет постов:');
  console.log(userList.filter((e) => e.posts == 0));
  console.log('посты с юзерами:');
  console.log(posts);
};

request.send();
console.log('Done');
