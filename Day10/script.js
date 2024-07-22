// let p = document.querySelector('p');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click',function changeContent(){
//     p.innerHTML = 'Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run Import-Module PSReadLine.'
// })

// const card = document.querySelector('.container');
// card.addEventListener('dblclick',()=>{
//     console.log('hello');
//     card.classList.add('resize');
// })

// const card = document.querySelector('.container');
// const p = document.querySelector('p');

// p.addEventListener('mouseover',()=>{
//     card.style.backgroundColor = 'blue'
// })

// p.addEventListener('mouseout',()=>{
//     card.style.backgroundColor = '#fe9'
// })

// const txt = document.querySelector('#txt');
// const span = document.querySelector('span');
// txt.addEventListener('keydown',(e)=>{
//     console.log(e.code);
//     span.innerHTML += ` ${e.code}`
// })
// txt.addEventListener('keyup',(e)=>{
//     console.log(e.code);
//     span.innerHTML += ` ${e.code}`
// })

// const btn = document.querySelector('#btn');
// btn.addEventListener('onsubmit',(e)=>{
//     e.preventDefault();
//     console.log(e);
// })

const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        console.log(event.target);
    })
})