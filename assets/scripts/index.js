const users = [];
const books = [];
const leasedBooks = [];

class User {
    constructor(id,fullName,gender,status){
        this.id = id
        this.fullName = fullName
        this.gender = gender
        this.status = status
    }
    add() {
        // Burak
    }
}

class Book {
    constructor(id,author,name, dailyPrice,status){
        this.id = id
        this.author = author
        this.name = name
        this.dailyPrice = dailyPrice
        this.status = status
    }
    add() {
        // Adem
    }
}

class LeasedBooks {
    constructor(id,book,day,user){
        this.id = id
        this.book = book
        this.day = day
        this.user = user
        this.totalPrice = book.price * day
    }
    add() {
        leasedBooks.push(this);
    }
}

function addUser() {

}

function addBook() {

}

function addRentABook() {

}