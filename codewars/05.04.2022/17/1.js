function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    // checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true  ddtltyys
    // checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
    //  введенный Код, правильный Код, текущая Дата, срок годности
    console.log(enteredCode, correctCode, currentDate, expirationDate);
    if (enteredCode !== correctCode) {
        return false;
    } else {
       return  actual(currentDate, expirationDate);
    }
    return  'poopoopoo';
}

function actual(currentDate, expirationDate) {
    console.log(currentDate);
    console.log(expirationDate);
    let month = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    currentDate = currentDate.replace(',','').split(' ');
    expirationDate = expirationDate.replace(',','').split(' ');
    console.log(currentDate);
    console.log(expirationDate);

    currentDate[0] = month.indexOf(currentDate[0]);
    currentDate[1] = Number.parseInt(currentDate[1]);
    currentDate[2] = Number.parseInt(currentDate[2]);
    expirationDate[0] = month.indexOf(expirationDate[0]);
    expirationDate[1] = Number.parseInt(expirationDate[1]);
    expirationDate[2] = Number.parseInt(expirationDate[2]);

    console.log(currentDate);
    console.log(expirationDate);

    currentDate = new Date(currentDate[2], currentDate[0], currentDate[1]);
    expirationDate = new Date(expirationDate[2], expirationDate[0], expirationDate[1]);
    console.log(currentDate);
    console.log(expirationDate);

     return  currentDate < expirationDate ;
}



// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015");
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));