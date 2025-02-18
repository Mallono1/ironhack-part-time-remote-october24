const express = require('express') // imports package 'express'
const logger = require('morgan');
const app = express() // starts the express server
const port = 3000 // define the gateway for HTTP client requests

// Setup the request logger to run on each request   // <== ADD
app.use(logger('dev'));  // middleware used for logging incoming request
app.use(express.static(`${__dirname}/public`)) // middleware which tells my express server where to look for static files
// JSON middleware to parse incoming HTTP requests that contain JSON    // <== ADD
app.use(express.json())


app.get('/', (request, response) => { // defines the response for the '/' path
    // console.log('req.ip', request.ip)
    // console.log(__dirname)
    response.sendFile(`${__dirname}/views/index.html`)
})

app.get('/about', (request, response) => { // defines the response for the '/' path
    response.sendFile(`${__dirname}/views/about.html`)
})

app.get('/contact', (request, response) => { // defines the response for the '/' path
    response.send('<h1> Welcome to the Contact page </h1>')
})

app.post("/",(req, res)=>{
    console.log(req.body)
    
    const user = {
        name: "Jane Doe",
        age: 33,
        profession: "Developer"
      };
     
      // Send JSON data in the response
      res.json(user);
})

app.listen(port, () => { // this makes our server listen to incoming HTTP requests via the port
    console.log(`Example app listening on port ${port}`)
})