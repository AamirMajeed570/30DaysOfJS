const bookObj = {
  title: String,
  author: String,
  year: String,
  bookDetails: function () {
    console.log(`${this.author} has wrote a book with title ${this.title}`)
  },
  updateYear: function (year) {
    this.year = year
  }
}

bookObj.title = 'MERN Chat APP'
bookObj.author = 'Aamir'
bookObj.year = 2024

// console.log(bookObj)
// console.log(bookObj.title)
// console.log(bookObj.author)
// bookObj.bookDetails();
// bookObj.updateYear(2025);
// console.log(bookObj)

// Nested Objects
const library = {
  name: String,
  books: [
    { author: 'Aamir', title: 'MERN Stack' },
    { author: 'Faisal', title: 'Data Analyst' },
    { author: 'Hanan', title: 'Software QA' }
  ]
}
library.books.map(data => {
  // console.log(data.author ,"and", data.title);
})

// Activity 4
// const book = {
//     name:'MERN Stack',
//     author:'Aamir',
//     bookDetails: function(){
//         return `${this.author} and ${this.name}`
//     }
// }
// console.log(book.bookDetails());
// Iterartion over Objects

const object = { a:1, b:2, c:3}
// for(const key in object){
//     console.log(`${key}: ${object[key]}`);
// }

console.log(Object.keys(object));  //['a','b','c'];
console.log(Object.values(object)); // [1,2,3];