function deepCount(a){
   if (typeof a === "object"){
       return  a.length + a.reduce((s, e) => {
           return  s + deepCount(e);
       },0);
   }else{
       return 0;
   }
}

console.log( deepCount([1, 2, [3, 4, [5]]]));
console.log( deepCount([1, 2]));
console.log( deepCount([]));