class Person {
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }

    introduceSelf(){
        return `My name is ${this.name}`;
    }
}

class Professor extends Person {
    constructor(name, gender, age, teaches){
        super(name, gender) // Person(name) --> this.name = name && introduceSelf(){}
        this.age = age;
        this.teaches = teaches;
    }
    // introduceSelf(){
    //     return `My name is Professor ${this.name}, I am ${this.age} years old and I will be your ${this.teaches} professor.`
    // }
}

const walsh = new Professor("Walsh", 'male', 45, "Psychology");
const lillian = new Professor("Lillian", 'female', 37, "Poetry");

class Student extends Person {
    constructor(name, gender, subjects){
        super(name, gender);
        this.subjects = subjects;
    }

    introduceSelf(){
        return `My name is ${this.name} and I study ${this.subjects}`;
    }
}

const walter = new Student("Walter", 'male', ["Engineering","Robotics"])

console.log('walsh teaches', walsh.introduceSelf())
console.log('lilian teaches', lillian.introduceSelf())

console.log('walter introduction', walter.introduceSelf())