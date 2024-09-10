const express = require('express');
const router = express.Router();
const User = require("../Models/userModel");

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.delete('/users', async (req, res) => {
  try {
    const adminHeader = req.headers.admin;
    if(adminHeader !== "allowAllDelete"){
      res.status(401).send('Unauthorized - Please provide the correct admin header');
    }
    const users = await User.deleteMany();
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

router.get('/users/:id', async (req, res) => {
    try {
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
  const { username, email, darkMode } = req.body;
  try {
    let user = new User({ username, email, darkMode });
    user = await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
