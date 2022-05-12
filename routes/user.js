const express = require('express');

const router = express.Router();
const m = require('../middlewares/validateUser');
const { userPost } = require('../controllers/userController');
// getUser
router.post('/', m.emailAlreadyExist, m.emailRegx, m.validatePassword, m.validateDisplay, userPost);
// router.get('/', getUser);

module.exports = router;