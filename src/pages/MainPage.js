import { useEffect, useState } from "react";
import ExpenseTracker from "../components/ExpenseTracker";
import IncomeTracker from "../components/IncomeTracker";
import Navbar from "../components/Navbar";
import Visualization from "../components/Visualization";

function MainPage() {
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
            <h1 className='font-bold mt-5 text-2xl'>Budgeting</h1>
            <div className="tracker-container flex justify-around">
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
    )
}

export default MainPage;