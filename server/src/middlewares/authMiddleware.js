const jwt = require('jsonwebtoken');
const { verifyToken } = require('../utils/jwt');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Authentication token is required.' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }

  req.user = decoded; // Attach user data to the request
  next();
};

module.exports = authMiddleware;
