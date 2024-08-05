// ExpenseTracker.js

import React,
{
    useState
} from 'react';

function ExpenseTracker({ onAddExpense }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleAddExpense = () => {
        if (!description || !amount) return;
        const newExpense = {
            description,
            amount: parseFloat(amount)
        };
        onAddExpense(newExpense);
        setDescription('');
        setAmount('');
    };

    return (
        <div className="tracker w-full max-w-2xl mt-10">
            <h2 className='font-bold'>Add Expense</h2>
            <div className="input-group mt-5">
                <input
                    type="text"
                    className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Description"
                    value={description}
                    onChange={
                        (e) =>
                            setDescription(e.target.value)
                    } />
                <input
                    type="number"
                    className="shadow appearance-none border border-black-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Amount"
                    value={amount}
                    onChange={
                        (e) =>
                            setAmount(e.target.value)
                    } />
                <button onClick={handleAddExpense} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Expense
                </button>
            </div>
        </div>
    );
}

export default ExpenseTracker;
