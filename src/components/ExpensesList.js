import React from "react";
import { connect } from "react-redux";

import getFilteredExpenses from "../selectors/expenses";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

export const ExpensesList = (props) => {
    let template = (<div>No expenses in meet the search criteria.</div>);
    if (props.expenses.length !== 0) {
        template = (
            <><div className="expense-list">
                <div className="expense-list__column-header">
                    <span className="mobile-only expense-list__column-header--name">Expenses</span>
                    <span className="desktop-only expense-list__column-header--name">Expense</span>
                    <span className="desktop-only expense-list__column-header--amount">Amount</span>
                </div>
                <div className="expense-list__list">
                {
                    props.expenses.map((o, index) =>
                        <ExpenseItem
                            key={index}
                            {...o}
                        />
                    )
                }
                </div>
            </div></>
        );
    }
    return template;
};


const mapStateToProps = (state) => {
    return {
        expenses: getFilteredExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpensesList);
