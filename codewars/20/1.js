function myLanguages(results) {
    console.log("results:");

    console.log(results);
    let arr = Array.from(results);

    for (let key in results) {
        arr.push([key, results[key]]);
    }

    arr = arr.sort((l1, l2) => {
        return l2[1] - l1[1];
    }).filter(l => l[1] >= 60 ).map(l=>l[0]);
    console.log("arr:");

    console.log(arr);

    return arr;
}


myLanguages({"Java": 10, "Ruby": 80, "Python": 65});