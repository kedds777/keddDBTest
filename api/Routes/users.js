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
      let responseObj = {
        username: users[0].username,
        email: users[0].email,
        darkMode: users[0].darkMode,
        created: users[0].created
      }
      res.json(responseObj);
    } catch (err) {
      res.status(500).send('Server error: ' + err);
    }
  });

module.exports = router;
