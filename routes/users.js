const router = require('express').Router();
const User = require('../models/User');

//reg
router.post('/register', async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    //save user and respond
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('wrong credentials');

    // const validPassword = await bcrypt.compare(
    //   req.body.password,
    //   user.password
    // );
    if (req.body.password == user.password) {
      res.status(200).json(user);
    }

    // !validPassword && res.status(400).json('wrong credentials');
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
