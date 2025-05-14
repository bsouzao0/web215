import React from 'react';
import API from '../services/api';

export default function TransactionList({ transactions, onDelete }) {
  const deleteTx = async (id) => {
    await API.delete(`/transactions/${id}`);
    onDelete();
  };

  return (
    <ul>
      {transactions.map((tx) => (
        <li key={tx._id}>
          {tx.type.toUpperCase()} - ${tx.amount} ({tx.category}) - {tx.description}
          <button onClick={() => deleteTx(tx._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
