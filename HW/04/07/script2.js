class Student {
    constructor(firstName, lastName, group,averageMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }
    getScholarship(min = 80, max  =100){
       (this.averageMark >=5)? console.log(`Cтепендия: ${max}`) : console.log(`Cтепендия: ${min}`);
    }

}


class Aspirant  extends Student {
    constructor(firstName, lastName, group,averageMark, work ) {
        super(firstName, lastName, group,averageMark);
        this.work = work;
    }

    getScholarship(min = 180, max  =200){
        super.getScholarship(min, max);
    }
}

const s  = [
    new Student('st1', "merfi1", 2, 6) ,
    new Student('st2', "merfi2", 1, 4),
    new Student('st3', "merfi3", 3, 5)
];

const a  = [
    new Aspirant('asp1', "merfi1", 2, 6, 'test 1') ,
    new Aspirant('asp2', "merfi2", 1, 4, 'test 2'),
    new Aspirant('asp3', "merfi3", 3, 5, 'test 3')
];

console.log(" == студенты:");
s.forEach(s => s.getScholarship());

console.log(" == аспиранты:");
a.forEach(a => a.getScholarship());

