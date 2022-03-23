const form = document.forms[0];
let result = {};
const email = document.body.querySelector('#inputEmail3');
const pas = document.body.querySelector('#inputPassword3');
const rPas = document.body.querySelector('#inputRepPassword3');
const div = document.body.querySelector('.done');

// const chekBox = document.body.querySelector('#gridCheck1');
const radio = document.body.querySelectorAll('input[name="gridRadios"]');
console.log('radio ', radio);

console.dir(result);
form.addEventListener('submit', push);

function push(event) {
  event.preventDefault();
  div.innerHTML = '';
  result.email = email.value;
  result.password = pas.value;
  result.repeatPassword = rPas.value;
  radio.forEach((r) => {
    if (r.checked) {
      result.radio = r.value;
    }
  });

  console.dir(email);
  console.dir(result);

  fetch('http://192.168.0.200:3000/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      const pError = document.createElement('p');
      pError.textContent = json.status;
      if (json.status == 'success') {
        pError.style.color = 'green';
      } else {
        pError.style.color = 'red';
      }
      div.append(pError);
    });
}

// Предлагаю для начала запретить критику и обсуждение высказанных идей и их авторов (не для этого этот чат).
// Идеи не могут быть правильными или не правильными. Они либо есть, либо их нет.

// Как следствие авторы будут чуть смелее. 
// Цель же в генерации идей, а не в их оценке.