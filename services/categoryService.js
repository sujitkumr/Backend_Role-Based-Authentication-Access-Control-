const Category = require('../models/mongo/Partner');

exports.getAllCategories = async () => {
  return await Category.getAll();
};

exports.createCategory = async (name) => {
  return await Category.create(name);
};

exports.updateCategory = async (id, name) => {
  return await Category.update(id, name);
};

exports.deleteCategory = async (id) => {
  return await Category.delete(id);
};
