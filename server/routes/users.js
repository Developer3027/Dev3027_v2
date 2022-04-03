const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');
const bcrypt = require('bcrypt');

//update user
router.put('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
     const updatedUser = await User.findByIdAndUpdate(req.params.id, {
       $set: req.body
     }, { new: true })
     const { password, ...userData } = updatedUser._doc;
     res.status(200).json(userData);
    } catch (error) {
      res.status(500).json(error);
      console.log(error);
    }
  } else {
    res.status(401).json('Please sign into your account.')
  }
});

//get user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...userData } = user._doc;
    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json(error);
  }
})

//delete user
router.delete('/:id', async (req, res) => {
  if (req.body.userId === req.params.id) {
    const user = await User.findById(req.params.id);
    if(user) {
      try {
        await Post.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json('User and Posts were deleted.');
      } catch (error) {
        res.status(500).json(error);
        console.log(error);
      }
    } else {
      res.status(401).json('User not found');
    }
  } else {
    res.status(401).json('Please sign into your account.');
  }});

module.exports = router;
