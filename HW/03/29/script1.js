const request = (url, success, error) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () => {
        xhr.status === 200 ? success(xhr.response) : error(xhr.statusText);
    };
    xhr.onerror = () => error(xhr.statusText);
    xhr.send();
};

document.querySelector('#get-text').onclick = () => {
    request('https://itchief.ru/examples/ajax/01.html', data => {
        document.querySelector('#result').innerHTML = data;
    }, error => {
        console.error(error);
    });
};

// const request = url => {
//     return new Promise((success, error) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.onload = () => {
//             xhr.status === 200 ? success(xhr.response) : error(xhr.statusText);
//         };
//         xhr.onerror = () => error(xhr.statusText);
//         xhr.send();
//     });
// };
//
//
// document.querySelector('#get-text').onclick = () => {
//     request('https://itchief.ru/examples/ajax/01.html')
//         .then(data => {
//             document.querySelector('#result').innerHTML = data;
//         })
//         .catch(error => {
//             console.error(error);
//         });
//
// };


