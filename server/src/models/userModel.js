const mongoose = require('mongoose');

// Create a new schema for the User model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  password: {
    type: String,
   
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
