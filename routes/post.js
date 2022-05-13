const express = require('express');

const router = express.Router();
const { verifyToken } = require('../auth/validateJWT');
const { getBlogPost } = require('../controllers/blogsController');

router.get('/', verifyToken, getBlogPost);

module.exports = router;