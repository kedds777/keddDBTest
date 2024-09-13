const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");

// @route   GET api/login

// @access  Public

//////////
/*POST*/
//////////

router.post('/signup', async (req, res) => {
    const { username, email, preferences, firstName, lastName, password } = req.body;
    const {darkMode, searchHistory} = preferences;
    ///Do some validating here

    //If it all passes
    try {
      let user = new User({ username: username, 
                            email: email, 
                            preferences: {
                                darkMode: darkMode,
                                searchHistory: searchHistory
                            }, 
                            firstName: firstName, 
                            lastName: lastName, 
                            password: password 
                        });
      user = await user.save();
      res.json(user);
    } catch (err) {
      res.status(500).send('Server error' + err);
    }
  });

  router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    ///Do some validating here

    //If it all passes
    try {
      let user = await User.find({email: email});
      //Need to do some encryption here, but for now...
      if(!user || password !== user[0].password){
        throw Error("Email or password is incorrect.");
      }
      res.json(user);
      
    } catch (err) {
      res.status(500).send('Server error' + err);
    }
  })





module.exports = router;
