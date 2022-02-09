"use strict";
const request = new XMLHttpRequest();

request.open("GET", "http://192.168.0.200:3000/1");

request.onload = function () {
  console.log("Onload");
  const result = request.response;

  const object = JSON.parse(result);
  let users = object.users; // присваиваем переменной users масив users из объекта переданного из json
  let posts = object.posts; // присваиваем переменной posts масив posts из объекта переданного из json

  // TODO: type code here
  const userList = users.map((user) => {
    // перебираем массив users по элементам и в переменную userList в качестве элементов передаем объект который создаем ниже в return
    return {
      name: user.name, // добавляем свойтво name
      id: user.id, // добавляем свойтво id
      posts: posts.filter((post) => post.userId === user.id), // посты в которых автор - тенкущий пользователь. то есть userId поста (posts) равен id пользователя(users).
      //Для этого фильтруем весь массив posts по условию "(e) => e.userId === user.id". получаем массив постов в которых userId равен id пользователя
    };
  });

  //добавить в пост автора поста
  posts.forEach((post) => {
    //двигаемся по списку постов ( по массиву posts ). и в каждый пост (элемент массива) добавляем свойство user и для получения его значения ищим пользователя с id ==  userIв поста.
    post.user = users.find((user) => user.id === post.userId).name; // берем массив пользователей и с помощью find ищем в нем элемент в котором id пользователя (user.id) равно userId поста (post.userId)
  });

  console.log(userList); // выводим начальный список пользователй
  console.log("users у которых нет постов:");
  console.log(userList.filter((e) => e.posts == 0)); // выводим обновленный список пользователей
  console.log("посты с юзерами:");
  console.log(posts); // выводим список постов
};

request.send();
console.log("Done");
