// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// declare a class called Books
class Book {
 
  getAllbooks(){
    return orm.innerJoin("books")
  }

  getOneBook(){
    return orm.innerJoin("books")
  }

  addBook(){
    return orm.create("books")
  }
}
module.exports = new Book();