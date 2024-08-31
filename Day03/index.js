// const checkNum = (num) =>{
//     if(num===0){
//         return "Number is Zero";
//     }else if(num<0){
//         return "Number is Negative";
//     }else{
//         return "Number is Positive"
//     }
// }
// console.log(checkNum(0));

// const checkEligibility = (num)=>{
//     if(num<18){
//         return "Person is not Eliginle to Vote"
//     }else{
//         return "Person is Eliginle to Vote"
//     }
// }

// console.log(checkEligibility(10))

// const checkLargest = (num1,num2,num3) =>{
//     if(num1>num3 && num1>num2){
//         console.log(`${num1} is Largest`);
//     }
//     else if(num2>num1 && num2>num3){
//         console.log(`${num2} is Largest`)
//     }else{
//         console.log(`${num3} is Largest`)
//     }
// }
// checkLargest(20,30,28);

// const weekDays = num => {
//   switch (num) {
//     case 1:
//       console.log('Monday')
//       break
//     case 2:
//       console.log('Tuesday')
//       break
//     case 3:
//       console.log('Wednesday')
//       break
//     case 4:
//       console.log('Thursday')
//       break
//     case 5:
//       console.log('Friday')
//       break
//     case 6:
//       console.log('Saturday')
//       break
//     case 7:
//       console.log('Sunday')
//       break
//     default:
//       console.log('Inavlid: Week contains only seven Days')
//   }
// }

// weekDays(4);
// let num=5;
// console.log(num%2===0?'Number is Even':'Number is Odd');

// const checkLeapYear = (num) =>{
//     if(num %4===0 || num %100 !== 0 && num %400 === 0){
//         console.log('Leap Year')
//     }
//     else{
//         console.log('Not a Leap Year');
//     }
// }
// checkLeapYear(2016)

// This is new Comment

let url = "http://localhost:3000/dev/admin/tutor/fetch";
function urlBreakDown(url){
    console.log(url)
}

urlBreakDown(url)