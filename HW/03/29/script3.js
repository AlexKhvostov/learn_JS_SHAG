setTimeout(() => {
    document.body.querySelector('.modal').modal('show');
}, 3000);


//
// const loadJs = (src, success, error) => {
//     const script = document.createElement('script');
//     script.onload = success;
//     script.onerror = error;
//     script.src = src;
//     document.body.append(script);
// };
//
//
//
// /**
//  * код для открытия модального окна нужно выполнить после загрузке bootstrap.bundle.min.js, а bootstrap.bundle.min.js следует загрузить только после загрузки jquery.min.js
//  */
//
// loadJs('https://code.jquery.com/jquery-3.2.1.slim.min.js',
//     () => {
//         loadJs('https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
//             () => {
//                 setTimeout(() => {
//                     document.body.querySelector('.modal').modal('show');
//                 }, 3000);
//             },
//             () => {
//                 console.error('Ошибка при загрузки скриптов!');
//             }
//         );
//     },
//     () => {
//         console.error('Ошибка при загрузки скриптов!');
//     }
// );


