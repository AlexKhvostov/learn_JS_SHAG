"use strict";
// (+) Отсортируйте все альбомы по заголовку
// (+) Найдите количество картинок ширина и высота которых больше 800px
// (+) Преобразуйте альбом
// (+) * Добавьте свойство user куда поместите объект соответствующего автора (id автора == id пользователя)
// (+) * Замените в массиве images (внутри альбома) цифры на картинки (объекты image) с соответсвующим id
// (+) Удалите альбомы в которых меньше 5 картинок

// 1. Создаём новый XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его
xhr.open("GET", "https://msheiko.github.io/js/dz/F1021/json/1.json");

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function () {
  console.log("Onload");
  const result = xhr.response; //  Получаем ответ, это JSON строка
  const object = JSON.parse(result); // Преобразуем строку в JS объект
  // Пишем код домашки ТУТ!!!
  /**
   * object.images
   * object.users
   * object.albums
   */
  let images = object.images.map((image) => {
    return {
      imageId: image.imageId, // 49,
      image: image.image, // "http://placeimg.com/640/480/abstract",
      width: image.width, // "448px",
      height: image.height, // "758px"
      countImgUp800: object.images.filter(
        (img) => parseInt(img.width) >= 800 && parseInt(img.height) >= 800
      ).length,
    };
  });

  let countImgUp800 = object.images.filter(
    (img) => parseInt(img.width) >= 800 && parseInt(img.height) >= 800
  ).length;

  console.log(images);
  console.log(`кол-во картинок разрешением больше 800: ${countImgUp800}`);

  let users = object.users.map((user) => {
    return {
      name: user.name, //"Shannon Bartell",
      username: user.username, //"Dylan.Hayes",
      email: user.email, //"Micheal_Hauck17@yahoo.com",
      phone: user.phone, //"1-792-883-4449 x3223",
      id: user.id, //1
    };
  });
  console.log(users);

  let albums = object.albums.map((album) => {
    return {
      title: album.title, //"aspernatur",
      imagesId: album.images, // стандатный нобор картинок в представленный числом ( id картинки )
      // заменяем в стандартном массиве картинок состоящим из чисел , числа на объекты картинок
      images: album.images.map((img) =>
        object.images.find((im) => im.imageId == img)
      ), //[45,35,12,39,36,29,22,44,49,24],
      authorId: album.authorId, //  id user
      user: object.users.find((user) => user.id === album.authorId), // добавляем объект юзера . ищем по authorId = id
    };
  });

  // выводим albums, предварительно сортируем по титулу и отфильтровывем только те, где картинок больше 5
  console.log(
    albums
      .sort((tit1, tit2) => {
        if (tit1 > tit2) {
          return 1;
        }
        if (tit1 < tit2) {
          return -1;
        }
        return 0;
      })
      .filter((images) => images.imagesId.length >= 5)
  );

  console.log(object); // Выводим результат по необходимости
};

// Этот код сработает если мы не получим ответ от сервера
xhr.onerror = function () {
  console.error("Запрос не удался");
};
