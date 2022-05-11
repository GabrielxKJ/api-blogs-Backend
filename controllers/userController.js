const userService = require('../services/userService');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const createUser = await userService.createUser(displayName, email, password, image);
  res.status(201).json(createUser);
};

module.exports = {
    userPost,
};