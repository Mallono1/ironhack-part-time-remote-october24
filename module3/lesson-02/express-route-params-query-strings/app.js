const express = require("express");
const logger = require("morgan");
 
const app = express();
const port = 3000; 

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.static("public"));
 

// ROUTES
 app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`)
 })
// Example - Query Strings (?)
app.get("/search", (req, res) => {
    const cities = [
        { name: "Amsterdam", date: "2025-03-01" },
        { name: "Milan", date: "2025-04-15" },
        { name: "Ibiza", date: "2025-06-20" },
        { name: "Tokyo", date: "2025-09-10" },
        { name: "New York", date: "2025-11-05" }
      ];

  console.log(req.query);
  const city = cities.find(city => city.name.toLowerCase() === req.query.city.toLowerCase())
  console.log('city', city)
  res.json(city);
});
  
// Example - Route Parameters (:)
app.get("/accounts/:username", (req, res) => {
console.log(req.params)
const users = [
        { username: "john_doe", email: "john@example.com", age: 28 },
        { username: "alice_wonder", email: "alice@example.com", age: 25 },
        { username: "mike_92", email: "mike@example.com", age: 32 },
        { username: "sara_sunshine", email: "sara@example.com", age: 29 },
        { username: "tech_guru", email: "guru@example.com", age: 35 }
      ];
  
      const user = users.find(user => user.username === req.params.username)
  res.json(user);
});
 
app.listen(port, () => console.log(`App listening on port ${port}!`));