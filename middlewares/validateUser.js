const { getUser } = require('../services/userService');

const validateDisplay = (req, res, next) => {
  const { displayName } = req.body;
    if (displayName.length <= 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password === undefined) {
    console.log(password);
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  } 
  next();
};
const emailAlreadyExist = async (req, res, next) => {
  const { email } = req.body;
  const allUsers = await getUser();
  const verifyEmailInDB = allUsers.some((u) => u.email === email);
  if (verifyEmailInDB) {
    return res.status(409).json({ message: 'User already registered' });
  }
next();
};

const emailRegx = async (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  const validate = re.test(email);
  if (!email) return res.status(400).json({ message: '"email" is required' });
  if (!validate) {
    return res.status(400)
    .json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = { validateDisplay, emailAlreadyExist, emailRegx, validatePassword };