function draw() {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext){
        const ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(75,75,50,0,Math.PI*2,true); // Внешняя окружность
        ctx.moveTo(110,75);
        ctx.arc(75,75,35,0,Math.PI,false);  // рот (по часовой стрелке)
        ctx.moveTo(65,65);
        ctx.arc(60,65,5,0,Math.PI*2,true);  // Левый глаз
        ctx.moveTo(95,65);
        ctx.arc(90,65,5,0,Math.PI*2,true);  // Правый глаз
        ctx.stroke();
    }


let [x,y,minR,maxR,countPic,border] = [200,200, 100, 50 ,8,2];

    star(canvas,x,y,minR,maxR,countPic,border);
}

function star(canvas,x, y, minR,maxR,countPic,border){
    if (canvas.getContext){
        let ctx = canvas.getContext('2d');
        ctx.beginPath();

        for (let i =0 ; i<countPic*2; i+=2){
            ctx.arc(x, y, minR, (Math.PI/countPic)*i, (Math.PI/countPic)*i, false);
            ctx.arc(x, y, maxR, (Math.PI/countPic)*(i+1), (Math.PI/countPic)*(i+1), false);
        }
        ctx.arc(x, y, minR, 0, 0, false);

        ctx.lineWidth = 2;
        ctx.fillStyle = "#FFA500";

        ctx.stroke();
        ctx.fill();

    }
}