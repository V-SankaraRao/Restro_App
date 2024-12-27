const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwtAuth');
const User = require('../models/userModel'); 

// Login function
exports.login = async (req, res) => {
  try {
    const email=req.body.username;
    const password=req.body.password;
    //const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.signUp = async (req, res) => {
    try {
      const { password, name } = req.body;
      const email=req.body.username;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        email,
        password: hashedPassword,
        name,
      });
  
      await newUser.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
