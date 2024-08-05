// IncomeTracker.js

import React, { useState } from 'react';

function IncomeTracker({ onAddIncome }) {
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');

    const handleAddIncome = () => {
        if (!amount || !description) return;
        onAddIncome(
            {
                amount: parseFloat(amount),
                description
            });
        setAmount('');
        setDescription('');
    };

    return (
        <div className="income-tracker w-full max-w-2xl mt-10">
            <h2 className='font-bold'>Income Tracking</h2>
            <div className="input-group mt-5">
            <input
                type="number"
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Amount"
                value={amount}
                onChange={
                    (e) =>
                        setAmount(e.target.value)
                } />
            <input
                type="text"
                placeholder="Description"
                value={description}
                className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setDescription(e.target.value)} />
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleAddIncome}>
                Add income
            </button>
            </div>
        </div>
    );
}

export default IncomeTracker;
