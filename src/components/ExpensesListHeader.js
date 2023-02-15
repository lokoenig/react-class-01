import React from "react";
import { expenseListTotal } from "../selectors/expenseListTotal";


export const ExpensesListHeader = (props) =>{
    const runningTotal = expenseListTotal(props);
    return (
        <>
        <h2>List of Expenses</h2>
        <div className="expense-list-header">
        <span>
            Description
        </span>
            <span className="total-amount">
            {new Intl.NumberFormat(
                'en-US',
                { style: 'currency', currency: 'USD' }
            ).format(runningTotal / 100)}
            </span>
            <span>
                Date Posted
            </span>
        </div>
        </>
    )
}

export default ExpensesListHeader;