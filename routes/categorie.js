const express = require('express');
const { getCategorie, postCategorie } = require('../controllers/categorieController');
const { verifyToken } = require('../auth/validateJWT');
const { validateName } = require('../middlewares/validateCategorie');

const router = express.Router();

router.get('/', verifyToken, getCategorie);
router.post('/', verifyToken, validateName, postCategorie);
module.exports = router;