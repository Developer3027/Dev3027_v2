const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

//register user
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
    const user = await newUser.save();
    const { password, ...data } = user._doc;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

//login a registered user
router.post('/login', async (req, res) => {
  const {username, password} = req.body
  const user = await User.findOne({username})


  try {
    if(user && (await bcrypt.compare(req.body.password, user.password))){
      const { password, ...other} = user._doc;
      res.status(200).json(other);
    } else {
      res.status(400).json('Check Credentials');
    }

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
})

module.exports = router
