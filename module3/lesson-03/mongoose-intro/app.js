require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const Book = require("./models/Book.model");
const Author = require("./models/Author.model");
 
const app = express();
 
// MIDDLEWARE
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));


mongoose
  .connect(process.env.MONGO_URI)
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));
 
 
// ROUTES
app.get('/', (req, res) => {
  console.log(req);
});

app.get("/books", (req, res) => {
    Book.find({})
      .then((books) => {
        console.log("Retrieved books ->", books);
      
        res.status(200).json(books);
      })
      .catch((error) => {
        console.error("Error while retrieving books ->", error);
        res.status(500).json({ error: "Failed to retrieve books" });
      });
});
app.get("/books/:bookId", (req, res)=>{
    const { bookId } = req.params;

    Book.findById(bookId)
        .then(book => {
            console.log('Single book', book)
            res.json(book)
        })
        .catch((error) => {
            console.error("Error while retrieving books ->", error);
            res.status(500).json({ error: "Failed to retrieve books" });
        });
})
app.post("/books", (req, res) => {
    // req.body contains the data sent by the client. 
    // This must match the structure defined in our Book schema.
    console.log(req.body)
    // Book.create(req.body)
    // // OR
    Book.create({
        title: req.body.title,
      year: req.body.year,
      codeISBN: req.body.codeISBN,
      quantity: req.body.quantity,
      genre: req.body.genre,
      author: req.body.author,
    })
      .then((createdBook) => {
          console.log("Book created ->", createdBook);
          res.status(201).json(createdBook);
    })
      .catch((error) => {
        console.error("Error while creating the book ->", error);
        res.status(500).json({ error: "Failed to create the book" });
      });
  });

  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
   
    Book.findByIdAndUpdate(bookId, req.body, { new: true })
      .then((updatedBook) => {
        console.log("Updated book ->", updatedBook);    
      
        res.status(201).json(updatedBook);
      })
      .catch((error) => {
        console.error("Error while updating the book ->", error);
        res.status(500).json({ error: "Failed to update the book" });
      });
  });
 
  app.delete("/books/:id", (req, res) => {
    Book.findByIdAndDelete(req.params.id)
      .then((result) => {
        console.log("Book deleted!");
        res.status(204).send(); // Send back only status code 204 indicating that resource is deleted
        })
      .catch((error) => {
        console.error("Error while deleting the book ->", error);    
          res.status(500).json({ error: "Deleting book failed" })
        });
  });

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));