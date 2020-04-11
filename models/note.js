const orm = require("../config/orm.js")


class Note{
  
  getBookNotes(bookTitle){
    // from notes, inner join on ...id 
    return orm.innerJoin(["noteId", "note"], "notes", "books", "bookId","id", bookTitle);
   }

  createNote(note, bookId){
    return orm.createNote("note", note, bookId)
  }

  deleteNote(noteId){
    // return orm.deleteNote([noteId])
    return orm.deleteNote("note", noteId)
   }

};

module.exports = new Note();