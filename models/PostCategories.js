module.exports = (sequelize, _DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie', {}, {
    timestamps: false,
  });
  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: 'PostsCategories',
      as: 'categories',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: 'PostsCategories',
      as: 'posts',
    });
  };
  return PostsCategorie;
};