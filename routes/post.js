const express = require('express');

const router = express.Router();
const { verifyToken } = require('../auth/validateJWT');
const { getBlogPost, getBlogById } = require('../controllers/blogsController');
const { validateBlogsId } = require('../middlewares/validateBlogs');

router.get('/', verifyToken, getBlogPost);
router.get('/:id', validateBlogsId, verifyToken, getBlogById);
module.exports = router;