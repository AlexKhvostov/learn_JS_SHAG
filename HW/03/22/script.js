
//https://randomuser.me/api/?gender=female

let num =1;
loadUser(num);
const btnNext = document.body.querySelector("#btnNext");
const btnAdd = document.body.querySelector("#btnAdd");

const tbody = document.body.querySelector("tbody");

const photoUser = document.body.querySelector("#cardInfoPhoto");
const imgUser = photoUser.firstElementChild;
const genderUser = document.body.querySelector("#cardInfoMale");
const nameUser = document.body.querySelector("#cardInfoName");
const emailUser = document.body.querySelector("#cardInfoEmail");
const phoneUser = document.body.querySelector("#cardInfoPhone");

btnNext.addEventListener('click', loadNextUser);
function loadNextUser(){
    num++;
    loadUser(num);
}


function loadUser(num){
fetch(`https://randomuser.me/api/?page=${num}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        console.log(json.results[0].picture.large);

        imgUser.src = json.results[0].picture.thumbnail;
        genderUser.textContent = json.results[0].gender;
        nameUser.textContent = json.results[0].name.first;
        emailUser.textContent = json.results[0].email;
        phoneUser.textContent = json.results[0].phone;

        btnAdd.addEventListener('click', addUserInList);

        function addUserInList(){
            const tr = document.createElement('tr');
            const tdImg = document.createElement('td');
            const img = document.createElement('img');
            const tdGender = document.createElement('td');
            const tdName = document.createElement('td');
            const tdEmail = document.createElement('td');
            const tdPhone = document.createElement('td');

            img.src = json.results[0].picture.thumbnail;
            tdGender.textContent = json.results[0].gender;
            tdName.textContent = json.results[0].name.first;
            tdEmail.textContent = json.results[0].email;
            tdPhone.textContent = json.results[0].phone;

            tdImg.append(img);
            tr.append(tdImg);
            tr.append(tdGender);
            tr.append(tdName);
            tr.append(tdEmail);
            tr.append(tdPhone);
            tbody.append(tr);


        }

    });
    }

