const categorieService = require('../services/categorieService');

const getCategorie = async (req, res) => {
  const getAll = await categorieService.getAllCategoires();
  return res.status(200).json(getAll);
};

module.exports = { getCategorie };