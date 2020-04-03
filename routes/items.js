const express = require('express');
const {
  getItem,
  getItems,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/items');

const router = express.Router();

router
  .route('/')
  .get(getItems)
  .post(createItem);

router
  .route('/:id')
  .get(getItem)
  .put(updateItem)
  .delete(deleteItem);

module.exports = router;
