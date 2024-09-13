const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");

// @route   GET api/login

// @access  Public

//////////
/*POST*/
//////////

router.post('/signup', async (req, res) => {
    const { username, email, darkMode, firstName, lastName, password } = req.body;
    ///Do some validating here

    //If it all passes
    try {
      let user = new User({ username, email, darkMode,firstName, lastName, password });
      user = await user.save();
      res.json(user);
    } catch (err) {
      res.status(500).send('Server error' + err);
    }
  });


  


module.exports = router;
