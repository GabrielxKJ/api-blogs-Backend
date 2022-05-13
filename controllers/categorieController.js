const categorieService = require('../services/categorieService');

const getCategorie = async (_req, res) => {
  const getAll = await categorieService.getAllCategoires();
  return res.status(200).json(getAll);
};

const postCategorie = async (req, res) => {
  const { name } = req.body;
  const result = await categorieService.createCategory(name);
  return res.status(201).json(result);
};

module.exports = { getCategorie, postCategorie };