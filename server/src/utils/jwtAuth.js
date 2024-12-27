const jwt=require("jsonwebtoken");
require("dotenv").config();

const generateToken = (userData) => {
    const payload = {
      userId: userData.id,
      email: userData.email
    };
    
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  };
  
  const verifyToken = (token) => {
    try {
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return null;
    }
  };
  
  module.exports = { generateToken, verifyToken };
