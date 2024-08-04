import React,
{
    useState,
    useEffect
} from 'react';
import './App.css';
import ExpenseTracker from './components/ExpenseTracker';
import IncomeTracker from './components/IncomeTracker';
import Visualization from './components/Visualization';
import Navbar from './components/Navbar';
// Import your CSS file

function App() {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpenditure, setTotalExpenditure] = useState(0);
    const [remainingIncome, setRemainingIncome] = useState(0);
    const [percentageExpended, setPercentageExpended] = useState(0);

    useEffect(() => {
        // Calculate total income
        let total = 0;
        incomes.forEach(
            (income) =>
                (total += income.amount)
        );
        setTotalIncome(total);

        // Calculate total expenditure
        total = 0;
        expenses.forEach(
            (expense) =>
                (total += expense.amount)
        );
        setTotalExpenditure(total);

        // Calculate remaining income
        setRemainingIncome(totalIncome - totalExpenditure);

        // Calculate percentage expended
        if (totalIncome !== 0) {
            setPercentageExpended(
                (totalExpenditure / totalIncome) * 100
            );
        }
    }, [incomes, expenses, totalIncome, totalExpenditure]);

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    };

    const addIncome = (income) => {
        // Add the income and reset expenses for each income
        setIncomes([...incomes, income]);
        setExpenses([]);
    };

    return (
        <div className="App">
            <Navbar />
            <h1 className='font-bold mt-5'>Budgeting</h1>
            <div className="tracker-container">
                <ExpenseTracker onAddExpense={addExpense} />
                <IncomeTracker onAddIncome={addIncome} />
            </div>
            <Visualization
                expenses={expenses}
                incomes={incomes}
                remainingIncome={remainingIncome}
                totalExpenditure={totalExpenditure}
                percentageExpended={percentageExpended}
            />
        </div>
    );
}

export default App;