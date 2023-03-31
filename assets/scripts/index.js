const users = [];
const books = [];
const leasedBooks = [];

class User {
    constructor(fullName, gender, status = false) {
        this.id = randomId();
        this.fullName = fullName;
        this.gender = gender;
        this.status = status;
    }
    add() {
        //Add a new user
        users.push(this);
    }
}

class Book {
    constructor(author, name, dailyPrice, status = false) {
        this.id = randomId();
        this.author = author;
        this.name = name;
        this.dailyPrice = dailyPrice;
        this.status = status;
    }
    add() {
        //add a book
        books.push(this);
    }
    update() {
        // change status using id
        return (this.status = !this.status);
    }
}

class LeasedBooks {
    // Onur
    constructor(book, day, user) {
        this.id = randomId();
        this.book = book.name;
        this.day = day;
        this.user = user.fullName;
        this.totalPrice = book.dailyPrice * day;
    }
    add() {
        leasedBooks.push(this);
    }
}
const bookDropdown = document.getElementById("book");
const userDropdown = document.getElementById("user");

function createLeaseABookForm() {
    // Get the book dropdown element

    // Populate the book dropdown
    bookDropdownUpdate()
    // Populate the user dropdown
    userDropdownUpdate()
}

function bookDropdownUpdate() {
    books.forEach((book) => {
        const option = document.createElement("option");
        option.value = book.name;
        option.text = book.name;
        bookDropdown.appendChild(option);
    });
}

function userDropdownUpdate() {
    users.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.fullName;
        option.text = user.fullName;
        userDropdown.appendChild(option);
    });
}

function addRentABook(event) {
    // create a leasedBook if it's status is false
    // User shouldn't already leased a book
    event.preventDefault();

    const book = books.find((book) => book.name === bookDropdown.value);
    if (!book) {
        toastify("lütfen bir kitap seçiniz",type="error")
        return console.log(`Book '${bookDropdown.value}' not found`);
    }

    if (book.status) {
        toastify(`'${bookDropdown.value}' kiralanmış durumda`,type="error");
        return console.log(`Book '${bookDropdown.value}' is already leased`);
    }

    const user = users.find((user) => user.fullName === userDropdown.value);
    if (!user) {
        toastify("lütfen bir kullanıcı seçiniz",type="error");
        return console.log(`User '${userDropdown.value}' not found`);
    }

    if (user.status) {
        toastify(`'${userDropdown.value}' zaten bir kitap kiralamış durumda`,type="error");
        return console.log(`User '${userDropdown.value}' is already leased a book`);
    }

    const day = document.getElementById("day").value;

    if(!day || day < 1){

       return toastify("Lütfen gün giriniz",type="error");
    }

    const leasedBook1 = new LeasedBooks(book, day, user);
    leasedBook1.add();
    console.log(leasedBooks);
    book.status = !book.status;
    user.status = !book.status;
    toastify("Kitap başarıyla kiralandı.");
    leasedBooksTableWrite();
}

function addUser() {
    //Create a new user
    const userFullName = $("#userFullName").val();
    const useGender = $("input[name^='gender']:checked").val();
    if (!userFullName || !useGender) return toastify("Lütfen boş alan bırakmayınız.", "error");

    const user = new User(userFullName, useGender, false);
    user.add();
    toastify("Kullanıcı başarıyla eklendi.", "success");
    $("#userFullName").val("");
    $("input:radio[name='gender']:checked").each(function (i) {
        this.checked = false;
    });
    usersTableWrite()
    userDropdownUpdate()
}

function addBook() {
    var title = $("#bookTitle").val();
    var author = $("#authorName").val();
    var dailyPrice = $("#dailyPrice").val();

    if (!title || !author || !dailyPrice) return toastify("Lütfen boş alan bırakmayınız.", "error");
    const book = new Book(author, title, dailyPrice);
    
    book.add();
    booksTableWrite();
    bookDropdownUpdate();

    toastify("Kitap başarıyla eklendi.", "success");
    $("#bookTitle").val("");
    $("#authorName").val("");
    $("#dailyPrice").val("");
}

function usersTableWrite() {
    // Datayı tabloya yaz.
    if (users.length == 0) {
        $("#users-table").append(`
        <tr>
            <th scope="row" colspan="4">Kullanıcı bulunamadı.</th>
        </tr>
        `);
        return;
    }

    $("#users-table").html("");
    users.map((user, index) => {
        $("#users-table").append(`
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${user.fullName}</td>
            <td>${user.gender[0].toUpperCase() + user.gender.substring(1)}</td>
            <td>${user.status ? "Evet" : "Hayır"}</td>
        </tr>
        `);
    })
}

function booksTableWrite() {
    $("#book_table").html("");
    books.map((book, index) => {
        $("#book_table").append(`
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.dailyPrice}</td>
        <td>${book.rented ? "Evet" : "Hayır"}</td>
        </tr>
        `);
    })
}

function leasedBooksTableWrite() {
    const tableBody = document.getElementById("leasedTable");
    tableBody.innerHTML = "";

    if (leasedBooks.length === 0) {
        const row = document.createElement("tr");
        const messageCell = document.createElement("td");
        messageCell.textContent = "Kiralanmış bir kitap bulunamadı.";
        row.appendChild(messageCell);
        tableBody.appendChild(row);
    } else {
        leasedBooks.forEach((leasedBook) => {
            const row = document.createElement("tr");

            const bookCell = document.createElement("td");
            bookCell.textContent = leasedBook.book;

            const userCell = document.createElement("td");
            userCell.textContent = leasedBook.user;

            const dayCell = document.createElement("td");
            dayCell.textContent = leasedBook.day;

            const priceCell = document.createElement("td");
            priceCell.textContent = leasedBook.totalPrice;

            row.appendChild(bookCell);
            row.appendChild(userCell);
            row.appendChild(dayCell);
            row.appendChild(priceCell);

            tableBody.appendChild(row);
        });
    }
}

leasedBooksTableWrite();


function randomId() {
    let s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    return (s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4()
    );
}

function toastify(message, type = "success") {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #ff5f6d, #ffc371)",
            borderRadius: "5px",
            fontWeight: "bold",
        }
    }).showToast();
}

function loadPage() {
    const form = document.getElementById("leasedBookForm");
    form.addEventListener("submit", addRentABook);
    createLeaseABookForm();
}