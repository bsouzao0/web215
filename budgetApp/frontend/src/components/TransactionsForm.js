import React, { useState } from 'react';
import API from '../services/api';

export default function TransactionForm({ onAdd }) {
  const [form, setForm] = useState({ amount: '', type: 'expense', category: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/transactions', form);
    setForm({ amount: '', type: 'expense', category: '', description: '' });
    onAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Amount" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
      <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
      <button type="submit">Add</button>
    </form>
  );
}
