function solution(number){
    if (number<=0){
        return 0;
    }
    let arr = [];
    for (let i = 0; i<number; i++){
        if ((i % 3==0 ) || (i % 5==0)) {
            arr.push(i);
        }
    }
    console.log(arr);
    return arr.reduce((s,a)=>{
       return s+=a;
    });
}


console.log(solution(10));
