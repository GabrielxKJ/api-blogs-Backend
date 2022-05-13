const {
   getAllPosts, findBlogById, deleteBlog, updateBlogs,
   } = require('../services/BlogPostService');

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

const putBlogPost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user;
  const { title, content } = req.body;
  const postUpdated = await updateBlogs(id, title, content, userId);
  return res.status(200).json(postUpdated);
};

module.exports = { getBlogPost, getBlogById, deleteBlogPost, putBlogPost };