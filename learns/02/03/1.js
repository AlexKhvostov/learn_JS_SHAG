'use strict';

const request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/users');

request.onload = function () {
  console.log('Onload');
  const result = request.response;

  const object = JSON.parse(result);
  // TODO: type code here
};

request.send();
console.log('Done');
