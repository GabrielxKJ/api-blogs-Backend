const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const getToken = (email) => jwt.sign({ email }, secret, jwtConfig);

module.exports = { getToken };