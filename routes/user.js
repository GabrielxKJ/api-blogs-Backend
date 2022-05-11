const express = require('express');

const router = express.Router();

const { userPost } = require('../controllers/userController');

router.post('/', userPost);

module.exports = router;