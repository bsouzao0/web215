const express = require('express');
const Transaction = require('../models/Transaction');
const auth = require('../middleware/auth');
const router = express.Router();

// Create
router.post('/', auth, async (req, res) => {
  const transaction = new Transaction({ ...req.body, user: req.user.id });
  await transaction.save();
  res.status(201).json(transaction);
});

// Read
router.get('/', auth, async (req, res) => {
  const transactions = await Transaction.find({ user: req.user.id });
  res.json(transactions);
});

// Delete
router.delete('/:id', auth, async (req, res) => {
  await Transaction.deleteOne({ _id: req.params.id, user: req.user.id });
  res.json({ message: 'Deleted' });
});

module.exports = router;
