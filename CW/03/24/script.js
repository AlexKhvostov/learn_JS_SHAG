// function delay(ms) {
//     return new Promise((good, error)=> {
//         setTimeout(()=>{good();},ms);
//     });
// }
//
// delay(3000).then(()=> alert("выполнилась"));

const pic = [
    "https://ss.metronews.ru/userfiles/materials/159/1599945/858x540.jpg",
    "https://klike.net/uploads/posts/2019-06/medium/1561011184_2.jpg"
];


const picProm = pic.map((p)=>{return new Promise((good,error)=> {
    const img = document.createElement("img");
    img.src = p;
    img.onload = () => {
        good(img);
    };
    img.onerror = () => {
        error();
    };
    });
}
);

console.log(picProm);

Promise.any(picProm).then(image => {
    document.body.append(image);
});