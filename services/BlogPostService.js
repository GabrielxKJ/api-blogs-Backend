const { BlogPost, User, Categorie } = require('../models');

const getAllPosts = async () => {
  const allpost = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
  ] });
  return allpost;
};

module.exports = { getAllPosts };