const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 
// CREATE SCHEMA
const petSchema = new Schema({
  petName: String,
  species: String,
  age: Number,
  about: String,
  ownerId: {                                           // <== UPDATE
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // "Author" is the model to which we are creating a reference relationship
    required: true
  },
  commentId: [{                                           // <== UPDATE
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment", // "Author" is the model to which we are creating a reference relationship
  }]
});
 

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;