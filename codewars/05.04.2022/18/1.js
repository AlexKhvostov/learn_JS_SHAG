function unluckyDays(year){
    let count = 0;
    for(let i =0; i<=11; i++) {
        let d = new Date(year, i ,13);
        console.log(d);
        if ((d).getDay()==5) {
            console.log("пятница ",d);
            count++;
        }
    }
    return count;


}

unluckyDays(2065);