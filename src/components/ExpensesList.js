import React from "react";
import { connect } from "react-redux";

import getFilteredExpenses from "../selectors/expenses";
import ExpensesListHeader from "./ExpensesListHeader";
import ExpenseItem from "./ExpenseItem";
export const ExpensesList = (props) => {
    let template = (<p>No expenses in meet the search criteria.</p>);
    if (props.expenses.length !== 0) {
        template = (
            <div>
            <ExpensesListHeader 
                    expenses={props.expenses}
            />
            {
                    props.expenses.map( (o, index) => 
                    <ExpenseItem 
                    key={index} 
                    {...o}
                    />
                )
            }
            </div>
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
