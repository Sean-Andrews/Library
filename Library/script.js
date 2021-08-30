// initial query selectors
const addBookBtn = document.querySelector('#add-book');
const inputForm = document.querySelector('.input-form');
const shelf = document.querySelector('#shelf');

let myLibrary = [];

// Book constructor

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(e) {
    e.preventDefault();
    const title = this.querySelector(`[name=title]`).value;
    const author = this.querySelector(`[name=author]`).value;
    const pages = this.querySelector(`[name=pages]`).value;
    const read = this.querySelector(`[name=read]`).checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    createCard(myLibrary, shelf);
    inputForm.classList.add('hidden');
}

function createCard(myLibrary, bookList) {
    bookList.innerHTML = myLibrary.map((book, i) => {
        for (let i = 0; i < myLibrary.length; i++) {
            if (book.read) {
                return`
                <div class="card data-book${[i]}">
                <p>Title: <label for=item${i}>${book.title}</label></p>
                <p>Author: <label for=item${i}>${book.author}</label></p>
                <p>Number of Pages: <label for=item${i}>${book.pages}</label></p>
                <label for=item${i} class="switch">
                <input for=item${i} id ="read-toggle" type="checkbox" checked>
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
                <input for=item${i} id ="read-toggle" type="checkbox">
                <span for=item${i} class="slider round"></span>
                </label>
                </div>
                `;    
            }
        }    
    });
    addDeleteBtn();
}

function addDeleteBtn() {
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



addBookBtn.addEventListener('click', (e) => {
    inputForm.classList.remove('hidden');
})

inputForm.addEventListener('submit', addBookToLibrary);