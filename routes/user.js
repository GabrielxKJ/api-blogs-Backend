const express = require('express');
const { verifyToken } = require('../auth/validateJWT');

const router = express.Router();
const m = require('../middlewares/validateUser');
const { userPost, getUser, getUserById, deleteUser } = require('../controllers/userController');

router.post('/', m.emailAlreadyExist, m.emailRegx, m.validatePassword, m.validateDisplay, userPost);
router.get('/', verifyToken, getUser);

router.get('/:id', m.userNotExist, verifyToken, getUserById);

router.delete('/me', verifyToken, deleteUser);
module.exports = router;