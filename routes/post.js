const express = require('express');

const router = express.Router();
const { verifyToken } = require('../auth/validateJWT');

const { 
getBlogPost, getBlogById, deleteBlogPost, putBlogPost,
} = require('../controllers/blogsController');

const {
 validateBlogsId, validatePostUser, canNotBeEdited, 
} = require('../middlewares/validateBlogs');

router.get('/', verifyToken, getBlogPost);
router.get('/:id', verifyToken, validateBlogsId, getBlogById);
router.get('/search');
router.delete('/:id', verifyToken, validateBlogsId, validatePostUser, deleteBlogPost);
router.put('/:id', verifyToken, canNotBeEdited, validatePostUser, putBlogPost);
router.post('/');

module.exports = router;