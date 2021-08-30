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

function createCard(myLibrary = [], booksList, read) {
    booksList.innerHTML = myLibrary.map((book, i) => {
        if (book.read) {
            return`
        <div class="card data-book${[i]}">
            <p>Title: <label for=item${i}>${book.title}</label></p>
            <p>Author: <label for=item${i}>${book.author}</label></p>
            <p>Number of Pages: <label for=item${i}>${book.pages}</label></p>
            <label for=item${i} class="switch">
            <input for=item${i} id ="unread" type="checkbox" checked>
            <span for=item${i} class="slider round"></span>
          </label>
        </div>
        `;
        } else {
        return`
        <div class="card data-book${[i]}">
            <p>Title: <label for=item${i}>${book.title}</label></p>
            <p>Author: <label for=item${i}>${book.author}</label></p>
            <p>Number of Pages: <label for=item${i}>${book.pages}</label></p>
            <label for=item${i} class="switch">
            <input for=item${i} id ="unread" type="checkbox">
            <span for=item${i} class="slider round"></span>
          </label>
        </div>
        `;
        }
    });
    addDeleteButton();
    addReadToggle();
}

// Function for delete button

function addDeleteButton() {
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

function deleteBook(e) {
    let index = e.target.getAttribute('data');
    myLibrary.splice(index, 1);
    createCard(myLibrary, shelf);
}

// Add Read Toggle Function

function addReadToggle() {
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read) {
            document.getElementById('unread').checked = true;
        } else {
            console.log(myLibrary[i]);
        }            
    }
}

function bookInfo(e) {
    e.preventDefault();
    const title = (this.querySelector(`[name=title]`)).value;
    const author = (this.querySelector(`[name=author]`)).value;
    const pages = (this.querySelector(`[name=pages]`)).value;
    const read = ((this.querySelector(`[name=read]`)).checked);
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    createCard(myLibrary, shelf, read);
    inputForm.classList.add('hidden');
}

// Event Listeners

addBookBtn.addEventListener('click', (e) => {
    inputForm.classList.remove('hidden');
});

inputForm.addEventListener('submit', bookInfo);







