require('dotenv').config()
const mongoose = require("mongoose");
const Author = require("../models/Author.model"); // Importing the Book model

const authors = [
  {
    name: "George R.R. Martin",
    isAlive: true,
    booksWritten: [],
    lastPublished: "2018-11-20",
  },
  {
    name: "J.K. Rowling",
    isAlive: true,
    booksWritten: [],
    lastPublished: "2023-09-15",
  },
  {
    name: "J.R.R. Tolkien",
    isAlive: false,
    booksWritten: [],
    lastPublished: "1977-09-15",
  },
  {
    name: "Agatha Christie",
    isAlive: false,
    booksWritten: [],
    lastPublished: "1976-10-06",
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .then(() => {
    Author.create(authors)
      .then((authors) => {
        console.log("Authors created ->", authors);
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error("Error while creating authors ->", error);
        mongoose.connection.close();
      });
  })
module.exports = authors;