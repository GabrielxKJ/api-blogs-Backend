require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    console.log(decoded);
    const user = await User.findOne({ where: { email: decoded.email } });
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user.dataValues.id;
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
}; 

module.exports = { verifyToken };