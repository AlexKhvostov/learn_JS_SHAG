const form = document.forms[0];
const input = document.body.querySelector('#inputText');
const ul = document.body.querySelector('ul');
const select = document.body.querySelector('select');

form.addEventListener('submit', addLi);

function addLi(event) {
  event.preventDefault();
  if (input.value.length < 10) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
  } else {
    const li = document.createElement('li');
    li.textContent = input.value;
    li.classList.add('list-group-item');

    if (select.value == '1') {
      select.classList.remove('is-invalid');
      select.classList.add('is-valid');
      li.classList.add('list-group-item-secondary');
    }
    if (select.value == '2') {
      select.classList.remove('is-invalid');
      select.classList.add('is-valid');
      li.classList.add('list-group-item-warning');
    }
    if (select.value == '3') {
      select.classList.remove('is-invalid');
      select.classList.add('is-valid');
      li.classList.add('list-group-item-danger');
    }
    if (select.value == 'Open this select menu') {
      li.classList.add('list-group-item-danger');
      select.classList.remove('is-valid');
      select.classList.add('is-invalid');
      return;
    }

    console.dir(select);

    input.classList.remove('is-invalid');
    input.classList.add('is-valid');

    ul.append(li);
  }
}
