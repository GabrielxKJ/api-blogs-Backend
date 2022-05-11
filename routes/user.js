const express = require('express');

const router = express.Router();
const m = require('../middlewares/validateUser');
const { userPost, getUser } = require('../controllers/userController');

router.post('/', m.emailAlreadyExist, m.emailRegx, m.validatePassword, m.validateDisplay, userPost);
router.get('/', getUser);

module.exports = router;