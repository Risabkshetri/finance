import React, { useState, useEffect } from "react";
import data from "./data";
import { useDispatch} from "react-redux";
import {updateAllFinancialData } from "../Store/financeSlice";

function Calculator() {
  const dispatch = useDispatch();
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [totals, setTotals] = useState({ debitTotal: 0, creditTotal: 0, netWorth: 0 });

  // Calculate totals and dispatch to Redux whenever transactions change
 
  useEffect(() => {
    const calculateTotals = () => {
      const debitTotal = transactions
        .filter((t) => t.type === "debit")
        .reduce((sum, t) => sum + t.amount, 0);
      const creditTotal = transactions
        .filter((t) => t.type === "credit")
        .reduce((sum, t) => sum + t.amount, 0);
      const netWorth = creditTotal - debitTotal;
      setTotals({ debitTotal, creditTotal, netWorth });
      dispatch(updateAllFinancialData({ networth: netWorth, debit: debitTotal, credit: creditTotal }));
    };
      calculateTotals();
    
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions, dispatch]);
 

  const handleAddTransaction = () => {
    if (input && amount) {
      const lowercaseInput = input.toLowerCase();
      const type = data.debit
        .map((item) => item.toLowerCase())
        .includes(lowercaseInput)
        ? "debit"
        : data.credit.map((item) => item.toLowerCase()).includes(lowercaseInput)
        ? "credit"
        : null;
      if (type) {
        setTransactions([
          ...transactions,
          { type, description: input, amount: parseFloat(amount) },
        ]);
        setInput("");
        setAmount("");
        setError("");
      } else {
        setError("Please enter a valid transaction.");
      }
    }
  };

  const handleClearTransactions = () => {
    setTransactions([]);
    setInput("");
    setAmount("");
    setError("");
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Track your Transactions
      </h1>
      <div className="mb-6 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter transaction"
          className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full sm:w-24 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
        <button
          onClick={handleAddTransaction}
          className="w-full sm:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Debit</th>
              <th className="border border-gray-300 p-2">Credit</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">
                  {transaction.type === "debit"
                    ? `${transaction.description}: ₹${transaction.amount.toFixed(2)}`
                    : ""}
                </td>
                <td className="border border-gray-300 p-2">
                  {transaction.type === "credit"
                    ? `${transaction.description}: ₹${transaction.amount.toFixed(2)}`
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-6">
        <button 
          className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 ease-in-out"
          onClick={handleClearTransactions}
        >
          Clear All Transactions
        </button>
      </div>
      <div className="bg-gray-100 p-4 rounded-md shadow-inner">
        <h2 className="text-xl font-semibold mb-3">Totals</h2>
        <p className="mb-2">Debit Total: <span className="font-medium">₹{totals.debitTotal.toFixed(2)}</span></p>
        <p className="mb-2">Credit Total: <span className="font-medium">₹{totals.creditTotal.toFixed(2)}</span></p>
        <p className="text-lg font-semibold">Net Worth: <span className={`${totals.netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>₹{totals.netWorth.toFixed(2)}</span></p>
      </div>
    </div>
  );
}

export default Calculator;