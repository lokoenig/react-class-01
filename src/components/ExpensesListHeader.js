import React from "react";
import { connect } from "react-redux";

import getFilteredExpenses from "../selectors/expenses";
import { expenseListTotal } from "../selectors/expenseListTotal";

import "./ExpensesListHeader.scss";

export const ExpensesListHeader = (props) => {
    const runningTotal = expenseListTotal(props);
    const numberOfExpenses = props.expenses.length;
    const exWord = 'Expense' + (1 === numberOfExpenses ? '' : 's');
    return (
        <header>
            <div className="expense-list-header">
                <div>Viewing <span className="expense-list-header__qantity">{numberOfExpenses}</span> {exWord} totalling  <span className="total-amount" title="Total Expenses Amount">
                    {new Intl.NumberFormat(
                        'en-US',
                        { style: 'currency', currency: 'USD' }
                    ).format(runningTotal / 100)}
                </span>
                </div>
            </div>
        </ header>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: getFilteredExpenses(state.expenses, state.filters)
    };
};
export default connect(mapStateToProps)(ExpensesListHeader);
