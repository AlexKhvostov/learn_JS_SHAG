const input1 = document.body.querySelector('#validationCustom01');

input1.addEventListener('input', () => {
  console.log(input1.value);
  if (input1.value.includes(' ')) {
    console.log('error');
    input1.classList.add('is-invalid');
    input1.classList.remove('is-valid');
  } else {
    console.log('good');
    input1.classList.remove('is-invalid');
    input1.classList.add('is-valid');
  }
});

const inputZip = document.body.querySelector('#validationCustom05');

inputZip.addEventListener('input', () => {
  console.log(inputZip.value);
  if (inputZip.value === Number.parseInt(inputZip.value).toString()) {
    console.log('good');
    console.log(inputZip.value);
    inputZip.classList.remove('is-invalid');
    inputZip.classList.add('is-valid');
  } else {
    console.log('error');
    inputZip.classList.add('is-invalid');
    inputZip.classList.remove('is-valid');
  }
});

const select = document.body.querySelector('#validationCustom04');
console.dir(select);

select.addEventListener('change', () => {
  console.dir(select);
  if (select.value !== 'second') {
    select.classList.remove('is-invalid');
    select.classList.add('is-valid');
  } else {
    select.classList.add('is-invalid');
    select.classList.remove('is-valid');
  }
});

const form = document.forms[0];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.dir(event);

  if (select.value !== '') {
    select.classList.remove('is-invalid');
    select.classList.add('is-valid');
  } else {
    select.classList.add('is-invalid');
    select.classList.remove('is-valid');
  }
});
