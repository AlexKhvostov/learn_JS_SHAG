function launchAll(launchMissile) {
    for(var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(launchMissile[i]);
        }, i * 1000);
    }
}

let launchMissile = {
    0 : "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",

};

launchAll(launchMissile);