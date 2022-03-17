const form = document.forms[0];
const div = document.body.querySelector('#img');
const input = document.body.querySelector('#imgLink');
console.dir(input);
const img = document.createElement('img');
const pError = document.createElement('p');
pError.textContent = 'картинка не загрузилась';
pError.style.color = 'red';

form.addEventListener('submit', addImgUrl);

function addImgUrl(event) {
  event.preventDefault();
  console.dir(input);
  img.src = input.value;
  img.style.width = '200px';

  img.addEventListener('load', () => {
    div.innerHTML = '';
    div.append(img);
  });

  img.addEventListener('error', () => {
    div.innerHTML = '';
    div.append(pError);
  });
}
