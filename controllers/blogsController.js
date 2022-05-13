const { getAllPosts, findBlogById } = require('../services/BlogPostService');

const getBlogPost = async (_req, res) => {
  const allBlogs = await getAllPosts();
  return res.status(200).json(allBlogs);
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  const result = await findBlogById(id);
  return res.status(200).json(result);
};
module.exports = { getBlogPost, getBlogById };