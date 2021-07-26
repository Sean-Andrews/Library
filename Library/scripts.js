// Initial Query Selectors
const addBookBtn = document.querySelector('#add-book');
const inputForm = document.querySelector('#input-form');
const submitBtn = document.querySelector('#submit-btn');
const shelf = document.querySelector('#shelf');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${title} by ${author}, ${pages} long, ${read}.`
    }
}

function createCard(book) {
    let card = document.createElement("div");
    card.classList.add('card');
    card.innerHTML = `<p>Title: ${book.title}</p><p>Author: ${book.author}</p><p>Pages: ${book.pages}</p><p>Read: ${book.read}</p>`;
    shelf.appendChild(card);

}

function addBookToLibrary(book) {
    myLibrary.push(book);
    createCard(book);
}

function createBook() {
    let title = inputForm.querySelector('#title').value;
    let author = inputForm.querySelector('#author').value;
    let pages = inputForm.querySelector('#pages').value;
    let read = inputForm.querySelector('#read').value;
    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
    inputForm.classList.add('hidden');
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tokien', '295 pages', 'not read yet');
const theShining = new Book("The Shining", "Stephen King", "447 pages", "read");
const theHuntForRedOctober = new Book("The Hunt for Red October", "Tom Clancy", "387 pages", "read");
const harryPotter1 = new Book("Harry Potter and the Sorceror's Stone", "J.K. Rowling", "226 pages", "read");

// addBookToLibrary(theHobbit);
// addBookToLibrary(theShining);
// addBookToLibrary(theHuntForRedOctober);
// addBookToLibrary(harryPotter1);

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.table(myLibrary[i]);
    }
}




// Event Listeners
addBookBtn.addEventListener('click', (e) => {
    inputForm.classList.remove('hidden');
});

submitBtn.addEventListener('click', createBook);



