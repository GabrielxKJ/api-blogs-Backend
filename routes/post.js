const express = require('express');

const router = express.Router();
const { verifyToken } = require('../auth/validateJWT');
const { getBlogPost, getBlogById, deleteBlogPost } = require('../controllers/blogsController');
const { validateBlogsId, validatePostUser } = require('../middlewares/validateBlogs');

router.get('/', verifyToken, getBlogPost);
router.get('/:id', verifyToken, validateBlogsId, getBlogById);
router.delete('/:id', verifyToken, validateBlogsId, validatePostUser, deleteBlogPost);

module.exports = router;