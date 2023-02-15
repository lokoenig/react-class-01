import React from "react";
import { connect } from "react-redux";

import getFilteredExpenses from "./expenses";

export const expenseListTotal = (props) => {
    let runningTotal = 0;
        props.expenses.map( 
            (v)=>{
                runningTotal = runningTotal + v.amount;
            }
        );
    return runningTotal;
}

const mapStateToProps = (state) => {
    return {
        expenses: getFilteredExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(expenseListTotal);