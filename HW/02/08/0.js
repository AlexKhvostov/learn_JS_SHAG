"use strict";

// выяснить разницу между унарным плюсом Number.isInteger и isInteger!!!

const request = new XMLHttpRequest();

request.open("GET", "https://jsonplaceholder.typicode.com/users");

request.onload = function () {
  console.log("Onload");
  const result = request.response;

  const object = JSON.parse(result);
  // TODO: type code here

  const f = object.map((user) => {
    return {
      name: user.name,
      city: user.address.city,
      street: user.address.street,
      email: user.email.slice(user.email.indexOf("@") + 1),
      phone: user.phone
        .replaceAll("x", "-")
        .replaceAll(".", "-")
        .replaceAll(" ", ""),
      sumGeo:
        Number.parseInt(user.address.geo.lat) +
        Number.parseInt(user.address.geo.lng),
      numPhone: user.phone
        .split("")
        .map((i) => (Number.isInteger(+i) ? +i : "++")),

      sumNumPhone: user.phone.split("").reduce((s, i) => {
        if (Number.isInteger(+i)) {
          return (s += +i);
        } else {
          return (s += 0);
        }
      }, 0),
    };
  });

  console.log(f.filter((e) => e.phone.includes("0")));
  console.log(`=`);
  console.log(f.filter((e) => !e.phone.includes("0")));
};

request.send();
console.log("Done");
