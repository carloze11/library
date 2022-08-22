const container = document.querySelector('.container');

let myLibrary = [];


function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read}`
  }
}

function addBookToLibrary(){
    let titleitle = prompt('Enter a book title: ');
    let newAuthor = prompt('Enter the author: ');
    let newPages = prompt('Enter number of pages: ');
    let newRead = prompt('Have you read this book?');

    myLibrary.push(new Book(title, author, pages, read))
}

const loopLibrary = myLibrary.forEach(x => alert(x));