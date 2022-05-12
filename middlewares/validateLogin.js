const { getUser } = require('../services/userService');

const emailValidate = (req, res, next) => {
  const { email } = req.body;
  if (email === undefined) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (email === '') {
    return res.status(400).json({ message: '"email" is not allowed to be empty' });
  }
  next();
};

const passwordValidate = (req, res, next) => {
  const { password } = req.body;
  if (password === undefined) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  next();
};

const userExist = async (req, res, next) => {
  const { email, password } = req.body;
  const allUsers = await getUser();
  const someUser = allUsers.some((u) => u.email === email && u.password === password);
  if (!someUser) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = { emailValidate, passwordValidate, userExist };