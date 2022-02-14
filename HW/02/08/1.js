// Задача 1
// Получите по адресу https://jsonplaceholder.typicode.com/users массив объектов

// Преобразуйте их в массив объектов вида
//   [
//       {
//           id: 1, // соответсвующий id из JSON
//           name: 'FIRSTNAME', //Возьмите только имя (часть строки до первого пробела), сделайте все буквы заглавными
//           phone: 'номер телефона', // Удалите все кроме цифр
//           location: {
//               street: 'Улица',
//               index: 'Почтовый индекс',
//               number: 'Номер suite' // Оставьте только цифры ("suite": "Apt. 950" => number: 950 (число))
//           }
//       },
//       ....
//   ]

// (!) Полученный массив преобразуйте заменив phone на сумму ТОЛЬКО четных цифр из этого же свойства
// (!) Отсортируйте массив по name
// (!) Удалите из массив всех в номере дома которых есть цифра 1
// (!) Разделите индекс всех на 2 и округлите результат до целого вверх
// (!) Выведите результат
'use strict';
const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users');

request.onload = function () {
  console.log('Onload');
  const result = request.response;

  const object = JSON.parse(result);

  const f = object.map((user) => {
    return {
      id: user.id,

      name: user.name.slice(0, user.name.indexOf(' ')).toUpperCase(), // 'FIRSTNAME', //Возьмите только имя (часть строки до первого пробела), сделайте все буквы заглавными
      phoneStr: user.phone,
      phoneNum: user.phone
        .split('')
        .filter((e) => Number.isInteger(parseInt(e)))
        .join(''), // 'номер телефона', // Удалите все кроме цифр
      phoneSumEvenIntem: user.phone
        .split('')
        .filter((e) => Number.isInteger(parseInt(e)))
        .reduce((s, e, i) => (s += e * (i % 2)), 0),

      location: {
        street: user.address.street, //'Улица',
        index: user.address.zipcode, //'Почтовый индекс',
        index2: Math.ceil(
          user.address.zipcode
            .split('')
            .filter((e) => Number.isInteger(parseInt(e)))
            .join('') / 2
        ), //'Почтовый индекс',
        number: user.address.suite
          .split('')
          .filter((e) => Number.isInteger(parseInt(e)))
          .join(''), // 'Номер suite' // Оставьте только цифры ("suite": "Apt. 950" => number: 950 (число))
      },
    };
  });
  console.log(
    f
      .sort((e1, e2) => {
        if (e1.name > e2.name) {
          return 1;
        }
        if (e1.name < e2.name) {
          return -1;
        }
        return 0;
      })
      .filter((e) => e.location.number.indexOf('1') < 0)
  );
};

request.send();
console.log('Done');
