import React from "react";
import { connect } from "react-redux";
const ExpensesList = (props) => (
    <>
        <h2>List of Expenses</h2>
        <div>
        Filter by {props.filters.text}
        </div>
        <div> length:{props.expenses.length}
        </div>
    </>
);


const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpensesList);
