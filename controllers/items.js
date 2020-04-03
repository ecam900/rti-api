const Item = require('../models/Item');

// @desc    Get all items
// @route   GET /api/v1/items
// @access  Public
exports.getItems = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all items',
  });
};

// @desc    Get single item
// @route   GET /api/v1/items/:id
// @access  Public
exports.getItem = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get item ${req.params.id}`,
  });
};

// @desc    Create a single item
// @route   POST /api/v1/items
// @access  Private
exports.createItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);

    res.status(201).json({
      success: true,
      data: item,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
  }
};

// @desc    Update single item
// @route   PUT /api/v1/items/:id
// @access  Private
exports.updateItem = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update item ${req.params.id}`,
  });
};

// @desc    Delete single item
// @route   DELETE /api/v1/items/:id
// @access  Private
exports.deleteItem = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete item ${req.params.id}`,
  });
};
