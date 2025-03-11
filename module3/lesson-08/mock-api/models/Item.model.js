const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const itemSchema = new Schema(
  {
   itemName: {type: String, required: [true, 'Item name is required.']},
   itemDescription: {type: String, required: [true, 'Item description is required.']},
   itemPrice: {type: Number, required: [true, 'Item price is required.']},
   itemCategory: {type: String, required: [true, 'Item category is required.']},
   itemImage: {type: String, required: [true, 'Item image is required.']},
   itemStock: {type: Number, required: [true, 'Item stock is required.']},
   itemRating: {type: Number, required: [true, 'Item rating is required.']},
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Item = model("Item", itemSchema);

module.exports = Item;
