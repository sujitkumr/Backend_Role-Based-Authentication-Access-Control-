const categoryService = require('../services/categoryService');
const { sendResponse } = require('../utils/responseUtil');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.getAllCategories();
    sendResponse(res, 200, true, 'Categories fetched', { categories });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body.name);
    sendResponse(res, 201, true, 'Category created', { category });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const updated = await categoryService.updateCategory(req.params.id, req.body.name);
    if (!updated) return sendResponse(res, 404, false, 'Category not found');
    sendResponse(res, 200, true, 'Category updated', { category: updated });
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.id);
    sendResponse(res, 200, true, 'Category deleted');
  } catch (err) {
    sendResponse(res, 500, false, err.message);
  }
};
