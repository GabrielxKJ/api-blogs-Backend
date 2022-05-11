const { getUser } = require('../services/userService');

const passwordAndName = (req, res, next) => {
  const { displayName, password } = req.body;
  if (displayName.length <= 8 && displayName !== 'string') {
    return res.status(422).json({ message: 'DisplayName must be at least 8 chars' });
  } if (password.length !== 6) {
    return res.status(422).json({ message: 'Password must be 6 chars' });
  }
next();
};

const emailAlreadyExist = async (req, res, next) => {
  const { email } = req.body;
  const allUsers = await getUser();
  const verifyEmailInDB = allUsers.some((u) => u.email === email);
  if (verifyEmailInDB) {
    return res.status(401).json({ message: 'User already registered' });
  }
next();
};

const emailRegx = async (req, res, next) => {
  const { email } = req.body;
  const re = /\S+@\S+\.\S+/;
  const validate = re.test(email);
  if (!email) return res.status(400).send({ message: 'The fild "email" is required' });
  if (!validate) {
    return res.status(400)
    .json({ message: 'The "email" must have be this shape "email@email.com"' });
  }
  next();
};
module.exports = { passwordAndName, emailAlreadyExist, emailRegx };