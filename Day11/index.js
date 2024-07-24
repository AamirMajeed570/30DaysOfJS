// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Promise was completed Succesfully after two seconds');
//         resolve(20);
//     },2000)
// })
// myPromise;

// const myNewPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("'Promise was rejected after two seconds delay...'")
//         reject(34);
//     })
// })

// myNewPromise.then(()=>{
//     console.log('Promise Fulfilled')
// }).catch((val)=>{
//     console.log('Promise rejected with a Value', val)
// })

// Async Await

// async function logResolvedValue(promise){
//     try {
//         const result = await promise;
//         console.log('Promise resolved---> ', result);
//     } catch (error) {
//         console.log('Error', error)
//     }
// }

// const examplePromise =  new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('This is the resolved value');
//     },2000)
// })
// logResolvedValue(examplePromise);

// Fetching Data from an API
// const fetchData = () => {
//   console.log('Hello')
//   const data = fetch('https://jsonplaceholder.typicode.com/posts/2')
//   .then(response => response.json()
//   .then(json => console.log(json))
//   )
// }

// fetchData()

// const fetchDataApi = async ()=>{
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await res.json();
//         console.log('Response from API', data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// fetchDataApi();

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30)
  }, 2000)
})
promise1.then(value => {
  console.log('Promise Resolved with a value -->', value)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(40)
  }, 2000)
})
promise2.then(value => {
  console.log('Promise Resolved with a value -->', value)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(50)
  }, 2000)
})
promise3.then(value => {
  console.log('Promise Resolved with a value -->', value)
})

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(60);
    reject(404)
  }, 2000)
})
promise4
  .then(value => {
    console.log('Promise Resolved with a value -->', value)
  })
  .catch(value => {
    console.log('Promise Failed to resolve ', value)
  })

//   Promise.all method returs the array of values that are fulfilled ;

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log('Values are ', values);
})
// .catch((value)=> console.log('Promise Failed ',value))

// Promise.race([promise1, promise2, promise3, promise4])
//   .then(val => console.log('The First Promise Resolved is --->', val))
//   .catch(data => console.log(data));
