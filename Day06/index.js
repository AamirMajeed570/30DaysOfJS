let arr = [1,2,3,4,5];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[arr.length-1]);
// arr.push(6);
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.unshift(1)
// console.log(arr);

let newArr = arr.map((data)=>{
    return data+2;
})

// console.log(newArr);

// console.log(arr.filter(data => data%2===0));
// console.log(arr.reduce((acc,index)=>{
//     return acc + index;
// }))

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// arr.forEach((data)=>{
//     console.log(data);
// })

let twoDarr = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
]
// console.log(twoDarr.flat())
console.log(twoDarr[0][2]);