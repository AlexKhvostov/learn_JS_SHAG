function formatDuration(seconds) {
    // Complete this function
    // The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

    let arr = ["years", "days", "hours", "minutes", "seconds"];
    let res = [];
    if (seconds === 0 ){
        return "now";
    }

    let time = {
        seconds: seconds - Math.floor(seconds/60)*60,
        minutes: Math.floor(seconds/60-Math.floor(seconds/60/60)*60),
        hours: Math.floor(seconds/60/60 - Math.floor(seconds/60/60/24)*24),
        days: Math.floor(seconds/60/60/24-Math.floor(seconds/60/60/24/365)*365),
        years: Math.floor(seconds/60/60/24/365)
    };
    console.log(time);

    res = arr.map(t =>{
       if(time[t] > 0){
           if (time[t]==1 ){
               return (time[t] +' '+ t).slice(0,-1);
           } else {
               return time[t] +' '+ t;
           }

       } else {
           return "";
       }
    }).filter(t=>t!=='');

    console.log(res);
let mezh =[];
    if (res.length>1){
        for (let i =3; i<=res.length; i++){
            mezh.push(', ');
        }
        mezh.push(" and ");
    }

    console.log(mezh);
    let result = res[0];
    mezh.forEach((m,i)=>{
        result+=  m +res[i+1];
    });

    console.log(result);
    return result;

}
formatDuration(3662);