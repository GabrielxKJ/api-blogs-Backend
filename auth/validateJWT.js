const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models');

const verifyToken = async (req, res, next) => {
  const { authotization } = req.headers;
  if (!authotization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(authotization, process.env.JWT_SECRET);
    const user = await User.findOne({ where: { email: decoded.data.email } });
    console.log(user, 'user');
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    } 
    req.user = user.datavalues.id;
    next();
  } catch (e) {
   return res.status(401).json({ message: e }); 
  }
};

module.exports = { verifyToken };