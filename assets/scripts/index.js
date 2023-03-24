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
		books.push({"id":this.id , "author":this.author , "name":this.name , "dailyPrice":this.dailyPrice , "status":this.status });
		
		
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
const  book = new Book(1 , "Ömer Seyfettin" , "Kaşağı" , 2 , "rented");
book.add();
}

function addRentABook() {

}