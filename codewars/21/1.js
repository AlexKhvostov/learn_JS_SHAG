var runLengthEncoding = function(str){
    if (str==''){
        return [];
    }
    let arr = str.split('');
    let lit = [1 , arr[0]];
    let res = [];

    for (let i = 1; i<= arr.length-1;i++){
        if (arr[i]==lit[1]){
            lit[0]+=1;
        } else{
            res.push( Array.from(lit));
            lit[0]=1;
            lit[1] =arr[i];
        }
    }
    res.push( Array.from(lit));
    console.log(res);


    return res ;// << fix this
};

runLengthEncoding('helllo');