class Car {
    constructor(name, countC, wat ) {
        this.name = name;
        this.countC = countC;
        this.wat = wat;

    }

    print(){
        console.log('Print auto : ');
        for (let key in this){

            console.log( `  ${key} : ${this[key]}`);
        }
    }
}

class Truck extends Car {
    constructor(name, countC, wat,  payload ) {
        super(name, countC, wat);
        this.payload = payload;
    }
}

let aa = new Car( "mers", 4, 120);
let bb = new Truck( "volvo", 12, 1420, "12t");

aa.print();
bb.print();




