const express = require('express');
const { verifyToken } = require('../auth/validateJWT');

const router = express.Router();
const m = require('../middlewares/validateUser');
const { userPost, getUser } = require('../controllers/userController');

router.post('/', m.emailAlreadyExist, m.emailRegx, m.validatePassword, m.validateDisplay, userPost);
router.get('/', verifyToken, getUser);

module.exports = router;