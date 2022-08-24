const container = document.querySelector('.container');
const grid = document.querySelector('.grid');
const btn = document.createElement('button');
const newBtn = document.querySelector('.new-btn');
const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('form');
const fieldset = document.querySelector('fieldset');
const div = document.createElement('div');

let myLibrary = [];


function Book(title, author, pages, read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
  
    myLibrary.push(new Book(title, author, pages, read))
}


const loopLibrary = () => {
  myLibrary.forEach((x,i) => {
    let card = div.cloneNode();
    for (const property in x) {
      let clone = div.cloneNode();
      card.appendChild(clone);
      clone.textContent = x[property];
    }   
    
    
    card.classList.add('card');
    card.setAttribute('id', i);
    card.setAttribute('data-index', i);
    
    let removeBtn = btn.cloneNode();
    let readStatus = btn.cloneNode();
    removeBtn.textContent = "Remove";
    readStatus.textContent = "Read/Unread";
    card.appendChild(removeBtn);
    card.appendChild(readStatus);
    
    grid.appendChild(card);
    
    //Remove book button
    removeBtn.addEventListener('click', () => {
    let remBook = removeBtn.parentElement.getAttribute('data-index');
      myLibrary = myLibrary.filter((x,i) => +remBook !== i)
    grid.replaceChildren();
    loopLibrary();
    })
    
    // Change a book's status to read/unread
      readStatus.addEventListener('click', () => {
        let indexNum = readStatus.parentElement.getAttribute('data-index');
        if (myLibrary[indexNum].read === 'read'){
          myLibrary[indexNum].read = 'unread'
        } else if (myLibrary[indexNum].read === 'unread') {
          myLibrary[indexNum].read = 'read'
        } else {
          myLibrary[indexNum].read = 'unread'
        }
        grid.replaceChildren();
        loopLibrary();
      });
    
  });
}


// Event listeners 
newBtn.addEventListener('click', () => {
  fieldset.toggleAttribute('hidden')
});


// create a new card and replace any existing cards when submit is clicked 

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  grid.replaceChildren();
  loopLibrary();
  document.getElementById("book-form").reset();
  fieldset.toggleAttribute('hidden');
})
 

