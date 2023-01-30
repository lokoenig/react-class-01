import React from "react";
import { connect } from "react-redux";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
    let template = (<p>No expenses entered</p>);
    if (props.expenses.length !== 0) {
        template = (
            <div>
                <h2>List of Expenses</h2>
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
        expenses: state.expenses,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpensesList);
