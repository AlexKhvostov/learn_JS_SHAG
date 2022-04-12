function draw() {
    const canvas = document.getElementById('canvas');

let countStar = 5;
let colorArr = [`red`,`green`,`blue`];

for (let i = 1; i<= countStar; i++){
    let x = rand(100, 1000);
    let y = rand(100, 700);
    let maxR = rand(50, 150);
    let minR = rand(rand(20, maxR-20), maxR-10);
    let countPic = rand(4, 20);
    let border = rand(1, 10);
    let color = colorArr[rand(0, colorArr.length)];
    star(canvas,x,y,minR,maxR,countPic,border,color);
}

}

function star(canvas,x, y, minR,maxR,countPic,border,color){
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        ctx.beginPath();

        for (let i =0 ; i<countPic*2; i+=2){
            ctx.arc(x, y, minR, (Math.PI/countPic)*i, (Math.PI/countPic)*i, false);
            ctx.arc(x, y, maxR, (Math.PI/countPic)*(i+1), (Math.PI/countPic)*(i+1), false);
        }
        ctx.arc(x, y, minR, 0, 0, false);
        ctx.lineWidth = border;
        ctx.fillStyle = color;
        ctx.stroke();
        ctx.fill();
    }
}

function rand(min, max){
    return Math.round(Math.random()*(max -min))+min;
}

console.log (rand(100,300));
console.log (rand(400,800));
console.log (rand(1000,3000));