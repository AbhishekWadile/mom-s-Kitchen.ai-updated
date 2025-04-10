const mongoose = require('mongoose');

const pantryItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, default: 'Custom' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PantryItem', pantryItemSchema);
