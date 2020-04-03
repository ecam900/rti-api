// @desc    Get all items
// @route   GET /api/v1/items
// @access  Public
exports.getItems = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Show all items'
  });
};

// @desc    Get single item
// @route   GET /api/v1/items/:id
// @access  Public
exports.getItem = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Get item ${req.params.id}`
  });
};

// @desc    Create a single item
// @route   POST /api/v1/items
// @access  Private
exports.createItem = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: 'Create new item.'
  });
};

// @desc    Update single item
// @route   PUT /api/v1/items/:id
// @access  Private
exports.updateItem = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update item ${req.params.id}`
  });
};

// @desc    Delete single item
// @route   DELETE /api/v1/items/:id
// @access  Private
exports.deleteItem = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete item ${req.params.id}`
  });
};
