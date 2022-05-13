const { Categorie } = require('../models');

const getAllCategoires = async () => {
  const allCateg = await Categorie.findAll();
  return allCateg;
};

module.exports = { getAllCategoires };