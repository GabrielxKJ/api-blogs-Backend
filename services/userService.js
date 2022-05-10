const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
    const newUser = await User.create(displayName, email, password, image);
    return newUser;
};

module.exports = { createUser };

// {
//     "displayName": "Brett Wiltshire",
//     "email": "brett@email.com",
//     "password": "123456",
//     "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
//   }