require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const User = require('./models/User.model');
const Pet = require('./models/Pet.model');
const Comment = require('./models/Comment.model');

app.use(express.json()); // allows the body of HTTP requests to be JSON
app.use(express.static('public')); // allows the use of static files in the public folder
// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
//   })

  mongoose.connect(process.env.MONGODB_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

app.get('/', (req, res) => {
    console.log('GET request');
    // res.send('<h1>Hello World</h1>');
    res.json({message: 'Hello World'});

})

app.get('/users', async (req, res) => {
try {
  const users = await User.find().populate('petId commentId');
  res.json(users);
} catch (error) {
  console.error(error);
  
}

})

app.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      console.error(error);
    }
})

app.get('/users/:userId', async(req, res) => {
    try {
      const user = await User.findById(req.params.userId); // user {} or null
      
      if (!user) {
        return res.status(404).json({message: 'User not found'});
      }
      else {
        res.json(user);
      }
    } catch (error) {
      console.error(error);
    }
})

app.put('/users/:userId', async (req, res) => {
  // req.body = {firstName: 'John'}
  // req.params.userId = '12345'
   try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});
      res.json(user);
   } catch (error) {
     console.error(error);
   }
})

app.delete('/users/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);
    res.json(user);
  } catch (error) {
    console.error(error);
  }
})

app.post('/pets', async (req, res) => {
  try {
    const pet = await Pet.create(req.body);
    const updateUser = await User.findByIdAndUpdate(req.body.ownerId, {$push: {petId: pet._id}}, {new: true});
    res.json({pet, user: updateUser});
  } catch (error) {
    console.error(error);
  }
})

app.delete('/pets/:petId', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(req.params.petId);
    const updateUser = await User.findByIdAndUpdate(pet.ownerId, {$pull: {petId: pet._id}}, {new: true}); // remove the pet from the user's petId array
    const updateComments = await Comment.deleteMany({petId: req.params.petId});// delete all comments associated with the pet
    res.json({pet, user: updateUser, comments: updateComments});
  } catch (error) {
    console.error(error);
  }
})

app.post('/comments', async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    const updatePet = await Pet.findByIdAndUpdate(req.body.petId, {$push: {commentId: comment._id}}, {new: true});
    const updateUser = await User.findByIdAndUpdate(req.body.authorId, {$push: {commentId: comment._id}}, {new: true});
    res.json({comment, pet: updatePet, user: updateUser});
  } catch (error) {
    console.error(error);
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})