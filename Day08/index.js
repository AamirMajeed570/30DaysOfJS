let name = 'john doe';
let age = 20;
console.log(`Name is ${name} and age of ${age}`)

// Destructuring
// let arr = [1,2,3,4,5];
// let [a,b,c] = arr;
// console.log(a,b,c);

// const obj = {
//     title:"Lorem",
//     author:"Aamir"
// }

// const {title,author} = obj;
// console.log(title,author);

let arr = [1,2,3,4,5,6];
let newArr = [...arr,7,8,9,10]
// console.log(newArr)

function sum(...arr){
    let sum = 0;
    for(const args of arr){
        sum += args;
    }
    return sum;
}
// console.log(sum(1,2,3,4));

const product = function (a,b=10) {
    return a*b;
}
// console.log(product(2));

const person = {
    name : 'john doe',
    age: 30,
    address: '123 Main Street',
    greet: function(){
        console.log('Hello, my name is ' + this.name);
    }
}

person.greet()

// An object is like a house.
// An object literal is like a blueprint for a house.