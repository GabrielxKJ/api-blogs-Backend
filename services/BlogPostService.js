const { BlogPost, User, Categorie } = require('../models'); 

const getAllPosts = async () => {
  const allpost = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
  ] });
  return allpost;
};

const findBlogById = async (id) => {
  const result = await BlogPost.findOne({ 
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
  ] });
  return result;
};

const deleteBlog = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = { getAllPosts, findBlogById, deleteBlog };