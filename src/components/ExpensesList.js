import React from "react";
import { connect } from "react-redux";
import getFilteredExpenses from "../selectors/expenses";
import ExpenseItem from "./ExpenseItem";
export const ExpensesList = (props) => {
    let template = (<div>No expenses in meet the search criteria.</div>);
    if (props.expenses.length !== 0) {
        template = (
            <div>
            
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
