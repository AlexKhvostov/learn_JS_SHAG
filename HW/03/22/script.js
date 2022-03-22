
//https://randomuser.me/api/?gender=female

let num =0;
let userInfo = {};
const btnNext = document.body.querySelector("#btnNext");
const btnAdd  = document.body.querySelector("#btnAdd");
const tbody   = document.body.querySelector("tbody");

const photoUser  = document.body.querySelector("#cardInfoPhoto");
const imgUser    = photoUser.firstElementChild;
const genderUser = document.body.querySelector("#cardInfoMale");
const nameUser   = document.body.querySelector("#cardInfoName");
const emailUser  = document.body.querySelector("#cardInfoEmail");
const phoneUser  = document.body.querySelector("#cardInfoPhone");

btnNext.addEventListener('click', loadNextUser);
btnAdd.addEventListener('click', addUserInList);

function loadNextUser(){
    num++;
    loadUser(num);
}

function loadUser(num){
    fetch(`https://randomuser.me/api/?page=${num}`)
        .then((response) => response.json())
        .then((json) => {
            userInfo.imgUrl = json.results[0].picture.thumbnail;
            userInfo.gender = json.results[0].gender;
            userInfo.name   = json.results[0].name.first + " " + json.results[0].name.last;
            userInfo.email  = json.results[0].email;
            userInfo.phone  = json.results[0].phone;
            addInfoUser();
        });
    // console.log(userInfo);
}

function addInfoUser(){
    imgUser.src            = userInfo.imgUrl;
    genderUser.textContent = userInfo.gender;
    nameUser.textContent   = userInfo.name;
    emailUser.textContent  = userInfo.email;
    phoneUser.textContent  = userInfo.phone;

}

function addUserInList(){
    const tr       = document.createElement('tr');
    const tdImg    = document.createElement('td');
    const img      = document.createElement('img');
    const tdGender = document.createElement('td');
    const tdName   = document.createElement('td');
    const tdEmail  = document.createElement('td');
    const tdPhone  = document.createElement('td');

    img.src              = userInfo.imgUrl;
    tdGender.textContent = userInfo.gender;
    tdName.textContent   = userInfo.name;
    tdEmail.textContent  = userInfo.email;
    tdPhone.textContent  = userInfo.phone;

    tbody.append(tr);
    tdImg.append(img);
    tr.append(tdImg);
    tr.append(tdGender);
    tr.append(tdName);
    tr.append(tdEmail);
    tr.append(tdPhone);
}


loadNextUser();