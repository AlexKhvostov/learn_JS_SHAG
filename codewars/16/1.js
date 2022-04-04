function createSecretHolder(secret) {
    console.log("secret");
    console.log(secret);

    function Obj(secret) {
        this.value = secret;
        this.getSecret = () => {
            // геттер, срабатывает при чтении obj.propName
            console.log(this.value);
            return this.value;
        };

        this.setSecret = (secret) => {
            console.log(secret);
            this.value = secret;
            // сеттер, срабатывает при записи obj.propName = value
        };
    }


    return new Obj(secret);
}

let obj = createSecretHolder(4);
obj.getSecret();  //# returns 4
obj.setSecret(2);
obj.getSecret();  // # returns 2

let obj2 = createSecretHolder(7);
obj2.getSecret();  //# returns 7
obj2.setSecret(5);
obj2.getSecret();  // # returns 5
console.log('--- ');
obj.getSecret();  // # returns 2
console.log(obj);
console.dir(obj2);
