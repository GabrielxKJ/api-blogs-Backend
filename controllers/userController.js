const userService = require('../services/userService');

const userPost = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const createUser = await userService.createUser(displayName, email, password, image);
  res.status(201).json(createUser);
};

const getUser = async (_req, res) => {
  const allUsers = await userService.getUser();
  console.log(allUsers);
  res.status(200).json(allUsers);
};

module.exports = {
    userPost,
    getUser,
};