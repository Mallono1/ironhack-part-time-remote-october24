const router = require("express").Router();
const User = require("../models/User.model");

router.get("/users", async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
});

router.post("/users", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  }
  catch (error) {
    console.error(error);
  }
})

router.put("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id,req.body, {new: true});
    res.json(user);
    } 
    catch (error) {
      console.error(error);
    }
})

router.delete("/users/:id", async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        console.error(error);
    }
})

router.put("/users/:id/receipts", async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {$push: {receipts: req.body}}, {new: true});
        res.json({receipts: user.receipts});
    } catch (error) {
        console.error(error);
    }
})

module.exports = router;
