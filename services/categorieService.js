const { Categorie } = require('../models');

const getAllCategoires = async () => {
  const allCateg = await Categorie.findAll();
  return allCateg;
};

const createCategory = async (name) => {
  const result = await Categorie.create({ name });
  return result;
};

module.exports = { getAllCategoires, createCategory };