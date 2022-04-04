function duplicateEncode(word) {
    return word.toLowerCase().split('').map((ch, i, arr) => {
        if (arr.indexOf(ch) == arr.lastIndexOf(ch)) {
            return "(";

        } else {
            return ")";
        }
    }).join('');
}

console.log( duplicateEncode("wordr"));