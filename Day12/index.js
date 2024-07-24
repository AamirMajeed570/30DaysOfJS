// let num = 4;
// function checkForError(num){
//     if(num!==4){
//         throw new Error('This is an Error');
//     }else{
//         console.log('The Value is ---> ', num);
//     }
// }
// try {
//     checkForError();
// } catch (error) {
//     console.log('Error checked Succesfully-->', error.message);
// }

// Question No 2

// function checkDivisibility(num1,num2){
//     let result ;
//     if(num2===0){
//         throw new Error('Denominator is Zero');
//     }else{
//         result = num1/num2;
//         console.log(`The result of two divisible numbers ${num1} and ${num2} is ${result}`);
//     }
// }

// try {
//     checkDivisibility(4,0);
// } catch (error) {
//     console.log('Error', error.message);
// }

// let num = 4;
// function finallyBlock(){
//     try {
//         if(num===4){
//             throw new Error('This is an Error');
//         }
//     } catch (error) {
//         console.log('Error ocurred in catch block --->', error?.message)
//     }finally{
//         console.log('CleanUp function Finally block');
//     }
// }
// try {
//     finallyBlock()
// } catch (error) {
//     console.log('Error in finallyBlock method ---> ', error);
// }finally{
//     console.log('Its Done')
// }

// Custom Error in JS

// class MyError extends Error{
//     constructor(message){
//         super(message);
//     }
// }

// function checkDivisibility(num1,num2){
//     let result;
//     try {
//         if(num2===0){
//             throw new MyError('Cannot Divide by Zero')
//         }else{
//             result = num1/num2;
//             console.log('Result is --->', result);
//         }
//     } catch (error) {
//         console.log('Error in catch block--->', error?.message);
//     }
// }

// try {
//     checkDivisibility(4,0);
// } catch (error) {
//     console.log('Error ---> ', error?.message);
// }

// let name = '';

// function validateUserInput(name){
//     try {
//         if(name.length===0){
//             throw new MyError('Name is Empty');
//         }else{
//             console.log(`${name} you are Welcomed`)
//         }
//     } catch (error) {
//         console.log('Error in validateUserInput ---> ',error?.message);
//     }
// }

// try {
//     validateUserInput(name);
// } catch (error) {
//     console.log('Error ocurred ---> ',error?.message);
// }

// Handling Error in Promises

// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(40);
//     },2000)
// })

// myPromise.then(data => console.log('Promise Resolves with a Value --->',data)).catch(val=> console.log('Promise rejected with a value --->', val));

// async function fetchApi(){
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/2')
//         const data = await res.json();
//         return data;

// }
// fetchApi().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log('Some Error Occurred ---> ',err?.message);
// })

function fetchInvalidApi () {
  fetch('https://jsonplaceholder.typice.com/posts/2')
    .then(res => {
      return res.json();
    })
    .then(data => console.log(data))
    .catch(err => {
      console.log('Some Error Occurred ---> ', err?.message)
    })
}
fetchInvalidApi()