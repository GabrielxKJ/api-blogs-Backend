const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

const getUser = async () => {
    const getAll = await User.findAll();
    return getAll;
};

module.exports = { createUser, getUser };