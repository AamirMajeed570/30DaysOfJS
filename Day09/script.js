// console.log(document.getElementById('para').textContent)
// document.getElementById('para').textContent = 'This is a Dummy Text';
// document.getElementsByClassName('h1').style.fontSize = 25;
// let text = document.getElementsByClassName('h1');
// for(let i=0;i<text.length;i++){
//     text[i].style.backgroundColor = 'red';
// }

// let newDiv = document.createElement('div');
// newDiv.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur nihil accusantium explicabo';

// document.body.appendChild(newDiv);
// let ul = document.querySelector('ul');
// let li = document.createElement('li');
// li.innerHTML = 'Contact Us';
// let listItem = ul.appendChild(li);

// ul.removeChild(listItem)

// let btn = document.getElementById('submit');
// let todo = document.getElementById('todo');
// let ul = document.querySelector('ul');
// let deleteIcon = document.createTextNode(" X ");
// btn.addEventListener('click',function addTask(){
//     let value = todo.value;
//     let li = document.createElement('li');
//     li.textContent = value;
//     let listItem = ul.appendChild(li);
//     for(let i=0;i<listItem.clientHeight;i++){
//         li += " X ";
//     }
//     todo.value = ""

// })
let para = document.querySelector('p');
let btn = document.getElementById('btn');
btn.addEventListener('click',function changePara(){
    para.textContent = 'Warning: PowerShell detected that you might be using a screen reader and has disabled PSReadLine for compatibility purposes. If you want to re-enable it, run Import-Module PSReadLine'
})

para.addEventListener('mouseover',function(){
    para.style.borderColor = 'blue'
})
