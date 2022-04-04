function nthFibo(n) {
let a0=0;
let a1=1;
let f= a0+a1;
if (n == 1){
    return 0;
}else {
    if (n == 2) {
      return 1;
    }else{
        for (let i =3; i<n;i++){
               a0=a1;
               a1=f;
                f=a1+a0;
        }
        return f;
    }
}
}

console.log( nthFibo(6));