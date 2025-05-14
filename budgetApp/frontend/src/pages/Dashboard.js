import React, { useEffect, useState } from 'react';
import API from '../services/api';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import ExpenseChart from '../components/ExpenseChart';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const getData = async () => {
    const res = await API.get('/transactions');
    setTransactions(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <TransactionForm onAdd={getData} />
      <TransactionList transactions={transactions} onDelete={getData} />
      <ExpenseChart transactions={transactions} />
    </div>
  );
}
