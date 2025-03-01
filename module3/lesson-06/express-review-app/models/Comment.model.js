const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 
// CREATE SCHEMA
// Schema - describes and enforces the structure of the documents
const commentSchema = new Schema({
  body: String,
  authorId: {                                           // <== UPDATE
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // "Author" is the model to which we are creating a reference relationship
    required: true
  },
  petId: {                                           // <== UPDATE
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet", // "Author" is the model to which we are creating a reference relationship
    required: true
  }
});
 
//                          "Book" --> "books"
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;