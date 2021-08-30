// Initial Query Selectors
const addBookBtn = document.querySelector('#add-book');
const inputForm = document.querySelector('.input-form');
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

// Function to create card using book information

function createCard(myLibrary = [], booksList) {
    booksList.innerHTML = myLibrary.map((book, i) => {
        return`
        <div class="card data-book${[i]}">
            <p>Title: <label for=item${i}>${book.title}</label></p>
            <p>Author: <label for=item${i}>${book.author}</label></p>
            <p>Number of Pages: <label for=item${i}>${book.pages}</label></p>
           
        </div>
        `;
    });
    let eachBook = document.getElementsByClassName('card');
    for (i = 0; i < eachBook.length; i++) {
        const oneBook = eachBook[i];
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.setAttribute('data', [i]);
        deleteBtn.textContent = "Delete Book";
        oneBook.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', deleteBook); 
    }
}

// Function for delete button

function deleteBook(e) {
    let index = e.target.getAttribute('data');
    myLibrary.splice(index, 1);
    createCard(myLibrary, shelf);
}

function addBookToLibrary(book) {
    // myLibrary.push(book);
    // createCard(book);
}

function bookInfo(e) {
    e.preventDefault();
    const title = (this.querySelector(`[name=title]`)).value;
    const author = (this.querySelector(`[name=author]`)).value;
    const pages = (this.querySelector(`[name=pages]`)).value;
    const book = new Book(title, author, pages);
    myLibrary.push(book);
    createCard(myLibrary, shelf);
    inputForm.classList.add('hidden');
    // addBookToLibrary(book);
    // displayBooks();
    // inputForm.classList.add('hidden');

    // let title = inputForm.querySelector('#title').value;
    // let author = inputForm.querySelector('#author').value;
    // let pages = inputForm.querySelector('#pages').value;
    // let read = inputForm.querySelector('#read').value;
    // const newBook = new Book(title, author, pages, read);
    // addBookToLibrary(newBook);
    // displayBooks();
    // inputForm.classList.add('hidden');
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

inputForm.addEventListener('submit', bookInfo);







