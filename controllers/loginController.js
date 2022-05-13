const { getToken } = require('../auth/token');

const loginPost = (req, res) => {
  const { email } = req.body;
  const token = getToken(email);
  return res.status(200).json({ token });
};

module.exports = { loginPost };