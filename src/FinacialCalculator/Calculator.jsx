import React, { useState, useEffect } from "react";
import data from "./data";

function Calculator() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem('transactions');
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [totals, setTotals] = useState(null);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = () => {
    if (input && amount) {
      const lowercaseInput = input.toLowerCase();
      const type = data.debit.map(item => item.toLowerCase()).includes(lowercaseInput) 
        ? "debit" 
        : data.credit.map(item => item.toLowerCase()).includes(lowercaseInput) 
          ? "credit" 
          : null;
      if (type) {
        setTransactions([...transactions, { type, description: input, amount: parseFloat(amount) }]);
        setInput("");
        setAmount("");
        setError("");
        setTotals(null);
      } else {
        setError("Please enter a valid transaction.");
      }
    }
  };

  const calculateTotals = () => {
    const debitTotal = transactions.filter(t => t.type === "debit").reduce((sum, t) => sum + t.amount, 0);
    const creditTotal = transactions.filter(t => t.type === "credit").reduce((sum, t) => sum + t.amount, 0);
    const netWorth = creditTotal - debitTotal;
    setTotals({ debitTotal, creditTotal, netWorth });
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Track your Transactions</h1>
      <div className="mb-4 flex space-x-2">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Enter transaction"
          className="flex-grow p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Amount"
          className="w-24 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={handleAddTransaction}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Debit</th>
            <th className="border border-gray-300 p-2">Credit</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{transaction.type === 'debit' ? `${transaction.description}: $${transaction.amount.toFixed(2)}` : ''}</td>
              <td className="border border-gray-300 p-2">{transaction.type === 'credit' ? `${transaction.description}: $${transaction.amount.toFixed(2)}` : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {transactions.length > 0 && (
        <div className="text-center">
          <button 
            onClick={calculateTotals}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
          >
            Calculate
          </button>
        </div>
      )}
      {totals && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Totals</h2>
          <p>Debit Total: ${totals.debitTotal.toFixed(2)}</p>
          <p>Credit Total: ${totals.creditTotal.toFixed(2)}</p>
          <p>Net Worth: ${totals.netWorth.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;