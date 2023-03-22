const users = [];
const books = [];
const leasedBooks = [];

class User { // Burak
    constructor(fullName, gender, status = false){
        this.id = randomId()
        this.fullName = fullName
        this.gender = gender
        this.status = status
    }
    add() {
        
    }
    update(id) {

    }
    get() {
        // Tüm kullanıcıları getir.
    }
}

class Book {// Adem
    constructor(author, name, dailyPrice, status = false){
        this.id = randomId()
        this.author = author
        this.name = name
        this.dailyPrice = dailyPrice
        this.status = status
    }
    add() {
        
    }
    update(id) {
        // Status değişme
    }
    get() {
        // Tüm kitapları getir.
    }
}

class LeasedBooks { // Onur
    constructor(book, day, user){
        this.id = randomId()
        this.book = book
        this.day = day
        this.user = user
        this.totalPrice = book.price * day
    }
    add() {
        leasedBooks.push(this);
    }
    get() {
        // Tüm kiralanmış kitapları getir.
    }
}

function randomId() {
    // Random id üret.
    // 1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed
    let s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function addUser() { // Kullanıcı Kirala tıklandığında
    // Form kontrol: tüm inputlar dolu mu?
    // User oluştur. Tabloya Yazdır.
}

function addBook() { // Kitap Ekle tıklandığında
    // Form kontrol: tüm inputlar dolu mu?
}

function addRentABook() { // Kitap Kirala tıklandığında
    // kontrol: Kitap kiralanmış mı?, Kullanıcı kitap kiralamış mı?
}

function usersTableWrite(data) {
    // Datayı tabloya yaz.
}

function booksTableWrite(data) {
    // Datayı tabloya yaz.
}

function leasedBooksTableWrite(data) {
    // Datayı tabloya yaz.
}