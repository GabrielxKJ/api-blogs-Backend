const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const getToken = (email, password) => jwt.sign({ email, password }, secret, jwtConfig);

module.exports = { getToken };