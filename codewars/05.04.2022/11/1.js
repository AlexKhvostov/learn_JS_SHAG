function numberOfPairs(gloves) {
    let glove = {};
    let result = 0;

    gloves.forEach(g => {
        if (glove.hasOwnProperty(g)){
            glove[g] = glove[g]  + 1;
        }else {
            glove[g] = 1;
        }
    });

    for (let key in glove){
        result += Math.floor(glove[key]/2);
    }


    console.log(glove);

    return result;
}

console.log(numberOfPairs(['gray', 'black','black', 'purple', 'purple', 'gray', 'black']));