function sortByBit(arr) {
   arr = arr.sort((a1,a2)=>{
       let n1 = (a1).toString(2).split('').reduce((s,a)=>s+=Number.parseInt(a),0);
       let n2 = (a2).toString(2).split('').reduce((s,a)=>s+=Number.parseInt(a),0);
       if (n1 == n2){
           return a1 - a2;
       } else {
           return n1 - n2;
       }
   });

}