// src/components/ExpenseForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ExpenseForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch  = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      onSubmit({ name, amount: parseFloat(amount) });
      setName('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}  className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <label className='block mb-2 text-xl font-xl text-white dark:text-white'>Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"' 
        />
      </div>
      <div>
        <label className='block mb-2 text-xl font-xl text-white dark:text-white'>Amount</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <button className='text-white bg-custom-dark hover:bg-custom-light focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  my-3' type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
