function explode(s) {
    let arr = s.split('');
    let res=[];
    arr.forEach(num =>{
        for (let i = 1; i<=Number.parseInt(num); i++) {
            res.push(num);
        }
    });
    s = res.join('');
    console.log(s);

    return s;
}

explode('234');