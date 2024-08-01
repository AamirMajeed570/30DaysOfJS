class Person{
    firstName ='Aamir';
    lastName = 'Khan';
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greetings(){
        console.log(`Welcome Your name is ${this.name} and ${this.age} years old`)
    }
    updateAge(age){
        this.age = age;
        console.log(`Updated Age of a ${this.name} is ${this.age}`);
    }
    get contactDetails(){
        console.log('Vlaue of this---->', this)
        return this.firstName + this.lastName;
    }
    set updateFirstNameDetails(firstName){
        this.firstName = firstName;
    }
    set updateLastNameDetails(lastName){
        this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName}  ${this.lastName}`
    }
    static greet(greetMessage){
        return `${greetMessage}`;
    }
}

// const p1 = new Person('Emmanuel',20);
// p1.greetings(); //Welcome Your name is Emmanuel and 20 years old
// p1.updateAge(30); //Updated Age of a Emmanuel is 30
// p1.greetings(); //Welcome Your name is Emmanuel and 30 years old

class Student extends Person{
    static count = 0;
    constructor(name,age,studentId){
        // this.constructor.count++;
        super(name,age);
        // console.log('Value of this is --->', this.constructor.count);
        this.constructor.count++; //Value of static variable incremented
        this.studentId = studentId;
    }
    display(){
        console.log(`Id of Student is ${this.studentId}`);
    }
    greetings(){
        console.log(`The name of Student is ${this.name} and ${this.age} years old holds and id ${this.studentId}`)
    }
    static staticCount(){
        console.log(`Number of Student Created is ${this.count}`)
    }
}

const s1 = new Student('Emmanuel',20,'11AX564');
const s2 = new Student('Emmanuel',20,'11AX564');
const s3 = new Student('Emmanuel',20,'11AX564');
const s4 = new Student('Emmanuel',20,'11AX564');
s1.display()
s1.greetings()
Student.staticCount()
// Static method
const p1 = new Person('Emmanuel',20);
console.log(Person.greet('Welcome'));
console.log(p1.contactDetails)
Person.updateFirstNameDetails = 'Faisal'
Person.updateLastNameDetails = 'Lone'
console.log(p1.getFullName())

// Task 5
class Account{
    #balance = 2000;
    #displayBalance(){
        return this.#balance;
    }
    #updateBalance(balance){
        this.#balance = balance;
    }
    display(){
        return this.#displayBalance();
    }
    updatedBalance(){
        console.log(this.#displayBalance);
        return this.#updateBalance(20000);
    }
}
const A1 = new Account()
console.log(A1.display())
console.log(A1.updatedBalance())