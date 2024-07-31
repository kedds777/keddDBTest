const express = require('express');
const router = express.Router();
const User = require("../Models/userModel");

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/users', async (req, res) => {
  try {
    console.log("Getting users...");
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/users/:id', async (req, res) => {
    try {
      console.log("ID passed: " + req.params.id);
      const users = await User.find({_id: req.params.id});
      res.json(users);
    } catch (err) {
      res.status(500).send('Server error: ' + err);
    }
  });

// @route   POST api/users
// @desc    Create a new user
// @access  Public
router.post('/users', async (req, res) => {
  const { username, email } = req.body;
  try {
    let user = new User({ username, email });
    user = await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
