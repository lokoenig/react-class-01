import React from "react";
import { expenseListTotal } from "../selectors/expenseListTotal";


export const ExpensesListHeader = (props) =>{
    const runningTotal = expenseListTotal(props);
    const numberOfExpenses = props.expenses.length;
    const exWord = 'Expense' + (1 === numberOfExpenses ? '' : 's');
    return (
        <>
        <h2>List of Expenses</h2>
        <div className="expense-list-header">
        <div>
            Description
        </div>
                <div>{numberOfExpenses} {exWord} for  <span className="total-amount" title="Total Expenses Amount">
            {new Intl.NumberFormat(
                'en-US',
                { style: 'currency', currency: 'USD' }
            ).format(runningTotal / 100)}
            </span>
                </div> 
            <div>
                Date Posted
            </div>
        </div>
        </>
    )
}

export default ExpensesListHeader;