const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: { type: String, enum: ['income', 'expense'] },
  category: String,
  description: String,
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Transaction', transactionSchema);
