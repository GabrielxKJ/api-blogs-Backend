const { Op } = require('sequelize');
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

const updateBlogs = async (id, title, content) => {
  const updateBlog = await BlogPost.findByPk(id, { include: [
    { model: Categorie, as: 'categories', through: { attributes: [] } },
  ] });

  updateBlog.set({ title, content });
  await updateBlog.save();

  return updateBlog;
};

const deleteBlog = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const queryPost = async (query) => {
  const { q } = query;
  const search = await BlogPost.findAll({
    where: {
      [Op.or]: {
        title: { [Op.like]: `%${q}%` },
        content: { [Op.like]: `%${q}%` },
      },
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });
 return search;
};

module.exports = { getAllPosts, findBlogById, deleteBlog, updateBlogs, queryPost };