const { BlogPost } = require('../models');

const validateBlogsId = async (req, res, next) => {
  const result = await BlogPost.findByPk(req.params.id);
  if (!result) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  next();
};

const validatePostUser = async (req, res, next) => {
  const userId = req.user;
 const { id } = req.params;
  const result = await BlogPost.findOne({
  where: { userId, id },
  });
  if (!result) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

const canNotBeEdited = (req, res, next) => {
  const { categoryIds, title, content } = req.body;
  if (!title) {
    return res.status(400).json({ message: '"title" is required' });
  }
  if (!content) {
    return res.status(400).json({ message: '"content" is required' });
  }
  if (categoryIds) {
    return res.status(400).json({ message: 'Categories cannot be edited' });
  }
  next();
};

module.exports = { validateBlogsId, validatePostUser, canNotBeEdited };