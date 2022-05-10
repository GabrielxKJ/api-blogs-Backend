const express = require('express');

const router = express.Router();

const { userPost } = require('../controllers/userController');

router.post('/user', userPost);
