const checkEvenOdd = (num) =>{
    if(num%2===0)
        console.log(`${num} is Even`);
    else
        console.log(`${num} is Odd`);
}
// checkEvenOdd(21);

// const squareNum = (num) =>{
//     return num * num;
// }

// let num = squareNum(4);
// console.log(num);

const maxTwoNum = (num1,num2) =>{
    if(num1>num2){
        console.log(`${num1} is Greatest`);
    }else{
        console.log(`${num2} is Greatest`);
    }
}
// maxTwoNum(12,23);

// const stringConcatenation =(str1,str2) =>{
//     return str1.concat(str2);
// }

// let str = stringConcatenation("aamir","majeed");
// console.log(str);

// Arrow Functions
// const sum = (num1,num2)=>{
//     return num1+num2;
// }
// console.log(sum(10,20));

const checkCharacter = (str,char) =>{
    if(str.includes(char)){
        return true;
    }
    else{
        return false;
    }
}

// console.log(checkCharacter('aamir','a'));

const product = (num1,num2=10)=>{
    return num1*num2;
}

// console.log(product(12,12));

// const greeting = (name,age=20) =>{
//     console.log(`Hello ${name} having age of ${age}`)
// }

// greeting('aamir',24)

// HOF

// const callHoc = ((func,index)=>{
//     for(let i=1;i<=index;i++){
//         func();
//     }
// })

// function func(){
//     console.log('Hello');
// }

// callHoc(func,3);


const composeFunc = (func1,func2,value) =>{
    return func1(func2(value));
}

function add(x){
    return x + 2;
}

function multiply(y){
    return y * 3;
}

console.log(composeFunc(add,multiply,4))