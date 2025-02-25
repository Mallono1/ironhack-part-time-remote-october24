const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
   name: String,
   isAlive: Boolean,
   booksWritten: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book"
   }], // can you import the Book model here
   lastPublished: String
  });

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;