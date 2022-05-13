const { getAllPosts, findBlogById, deleteBlog } = require('../services/BlogPostService');

const getBlogPost = async (_req, res) => {
  const allBlogs = await getAllPosts();
  return res.status(200).json(allBlogs);
};

const getBlogById = async (req, res) => {
  const { id } = req.params;
  const result = await findBlogById(id);
  return res.status(200).json(result);
};

const deleteBlogPost = async (req, res) => {
 const { id } = req.params;
 await deleteBlog(id);
 return res.status(204).end();
};

module.exports = { getBlogPost, getBlogById, deleteBlogPost };