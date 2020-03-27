const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Show all items'
  });
});

router.post('/', (req, res) => {
  res.status(200).json({
    success: true,
    msg: 'Create new item.'
  });
});

router.get('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Get item ${req.params.id}`
  });
});

router.put('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Update item ${req.params.id}`
  });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({
    success: true,
    msg: `Delete item ${req.params.id}`
  });
});

module.exports = router;
