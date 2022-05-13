const { getAllPosts } = require('../services/BlogPostService');

const getBlogPost = async (_req, res) => {
  const allBlogs = await getAllPosts();
  return res.status(200).json(allBlogs);
};

module.exports = { getBlogPost };