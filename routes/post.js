const express = require('express');

const router = express.Router();
const { verifyToken } = require('../auth/validateJWT');

const { 
getBlogPost, getBlogById, deleteBlogPost, putBlogPost, searchTerm,
} = require('../controllers/blogsController');

const {
 validateBlogsId, validatePostUser, canNotBeEdited, 
} = require('../middlewares/validateBlogs');

router.get('/search', verifyToken, searchTerm);
router.get('/', verifyToken, getBlogPost);
router.get('/:id', verifyToken, validateBlogsId, getBlogById);
router.delete('/:id', verifyToken, validateBlogsId, validatePostUser, deleteBlogPost);
router.put('/:id', verifyToken, canNotBeEdited, validatePostUser, putBlogPost);
router.post('/');

module.exports = router;