//importing mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//defining the objects types for bookschema
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: Array, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});
//passing schema object into variable
const Book = mongoose.model("Book", bookSchema);
//export book as module
module.exports = Book;
