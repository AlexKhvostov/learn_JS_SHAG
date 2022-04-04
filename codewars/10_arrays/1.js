function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays==undefined ||  arrayOfArrays== null || arrayOfArrays.length == 0 || arrayOfArrays.includes(null)){
        return 0;
    }

    if (arrayOfArrays.length > 1) {
        arrayOfArrays.sort((a1, a2) => a1.length - a2.length);
    }

    if (arrayOfArrays[0].length==0 || arrayOfArrays[0]== null ) {
        // console.log(arrayOfArrays.length[0])
        return 0;
    }
    //
    // console.log(arrayOfArrays);
    for (let i=0; i<arrayOfArrays.length;i++){
      if(arrayOfArrays[i+1].length-arrayOfArrays[i].length>1){
          return arrayOfArrays[i].length+1;
      }
    }
}

console.log(getLengthOfMissingArray([ [ 1 ], [ 1, 2 ], [ 4, 5, 1, 1 ], [ 5, 6, 7, 8, 9 ] ]));
console.log(getLengthOfMissingArray([ [ 1 ], [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 5, 6, 7, 8, 9 ] ]));
console.log(getLengthOfMissingArray( [ [ null ], [ null, null, null ] ]));
console.log(getLengthOfMissingArray([ [ 'a' ],    [ 'a', 'a' ],    [ 'a', 'a', 'a' ],    [ 'a', 'a', 'a', 'a' ],    [ 'a', 'a', 'a', 'a', 'a', 'a' ] ]    [ [ 1, 1 ], [ 5, 2, 9 ], [ 5, 6, 7, 8, 9 ], [ 4, 5, 1, 1, 5, 6 ] ]));