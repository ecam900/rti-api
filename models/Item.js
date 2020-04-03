const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['inventory part', 'assembly item'],
  },
  name: {
    type: String,
    required: [true, 'Please add an item name.'],
    unique: true,
    trim: true,
    maxlength: [100, 'Item name cannot be more than 100 characters'],
  },
  slug: String,
  rl_item: String,
  salesDescription: {
    type: String,
    required: [true, 'Please add an item description.'],
    maxlength: [500, 'Sales description cannot be more than 500 characters'],
  },
  salesPrice: Number,
  itemCost: Number,
  purchaseDescription: {
    type: String,
    maxlength: [500, 'Sales description cannot be more than 500 characters'],
  },
  quantityOnHand: Number,
  quantityOnSO: Number,
  quantityOnPO: Number,
  cubicFeet: Number,
  upc: Number,
  spanishDescription: String,
  length: Number,
  width: Number,
  height: Number,
  htsCode: String,
  boxesPerItem: Number,
  hotelAndRest: Boolean,
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
});

module.exports = mongoose.model('Item', ItemSchema);
