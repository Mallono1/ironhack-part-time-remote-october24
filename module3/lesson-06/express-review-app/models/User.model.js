const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
 
// CREATE SCHEMA
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  profileUrl: String,
  dateOfBirth: Date,
  gender: String,
  about: String,
  petId: [{                                          
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pet", 
  }],
  commentId: [{                                          
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment", // "Author" is the model to which we are creating a reference relationship
  }]
});
 

const User = mongoose.model("User", userSchema);

module.exports = User;