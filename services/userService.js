const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

const getUser = async () => {
    const getAll = await User.findAll();
    return getAll;
};

const findUserById = async (id) => {
    const getById = await User.findByPk(id, {
        attributes: { exclude: ['passoword'] },
    });
    return getById;
};

// const updateUser = async () => {

// };

module.exports = { createUser, getUser, findUserById };