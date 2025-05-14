import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

export default function ExpenseChart({ transactions }) {
  const expenses = transactions.filter(tx => tx.type === 'expense');
  const data = {
    labels: expenses.map(e => e.category),
    datasets: [{
      label: 'Expenses',
      data: expenses.map(e => e.amount),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }]
  };

  return <Bar data={data} />;
}
