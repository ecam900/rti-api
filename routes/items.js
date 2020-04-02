const express = require('express');
const router = express.Router();

// @desc    Get all items
// @route   GET /api/v1/items
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all items'
  });
});

// @desc    Get all items
// @route   GET /api/v1/items
// @access  Public
router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Create new item.'
  });
});

// @desc    Get all items
// @route   GET /api/v1/items
// @access  Public
router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get item ${req.params.id}`
  });
});

// @desc    Get all items
// @route   GET /api/v1/items
// @access  Public
router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update item ${req.params.id}`
  });
});

// @desc    Get all items
// @route   GET /api/v1/items
// @access  Public
router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete item ${req.params.id}`
  });
});

module.exports = router;
