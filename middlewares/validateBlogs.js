const { BlogPost } = require('../models');

const validateBlogsId = async (req, res, next) => {
  const result = await BlogPost.findByPk(req.params.id);
  if (!result) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  next();
};

module.exports = { validateBlogsId };