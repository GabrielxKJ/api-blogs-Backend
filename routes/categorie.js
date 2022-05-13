const express = require('express');
const { getCategorie } = require('../controllers/categorieController');
const { verifyToken } = require('../auth/validateJWT');

const router = express.Router();

router.get('/', verifyToken, getCategorie);

module.exports = router;