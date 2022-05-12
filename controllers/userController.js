const { getToken } = require('../auth/token');
const userService = require('../services/userService');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  await userService.createUser(displayName, email, password, image);
  const token = getToken(email, password);
  return res.status(201).json({ token });
};

const getUser = async (_req, res) => {
  const allUsers = await userService.getUser();
  return res.status(200).json(allUsers);
};

module.exports = {
    userPost,
    getUser,
};