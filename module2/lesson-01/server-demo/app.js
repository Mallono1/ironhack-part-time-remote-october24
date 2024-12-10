const myColors = require('colors/safe');
const express = require('express') // importing the express package 
const app = express() // initialize my server
const port = 3000

app.get('/', (req, res) => { // defines what happens if a request comes at '/'
  res.send('Home page') // sends a response string to the computer that made the request
})

app.get('/about', (req, res) => {// defines what happens if a request comes at '/about'
    res.send('About page')
  })

  app.get('/contact', (req, res) => { // defines what happens if a request comes at '/contact'
    res.send('Contact page')
  })

app.listen(port, () => { //listens to requests from computers via the internet on port 3000
  console.log(myColors.rainbow(`Example app listening on port ${port}`))
})