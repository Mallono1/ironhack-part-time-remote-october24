const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    firstName: {type: String, required: [true, 'First name is required.']},
    lastName: {type: String, required: [true, 'Last name is required.']},
    email: {type: String, required: [true, 'Email is required.']},
    profession: {type: String, required: [true, 'Profession is required.']},
    age: {type: Number, required: [true, 'Age is required.']},
    gender: {type: String, required: [true]},
    profilePicture: {type: String, required: [true, 'Profile picture is required.']},
    receipts: [{type: Array, required: [true, 'Receipts is required']}] // ["item1", "item2", "item3"] or [{itemName, itemQuantity, itemPrice}, {itemName, itemQuantity, itemPrice}, {itemName, itemQuantity, itemPrice}]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
