import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const DeleteExpenseButton = (props) => (
<button 
    onClick={
        ()=> {
            props.dispatch(removeExpense(props.expenseID));
            console.log('delete2', props);
        }
    }
    >delete
    </button>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(DeleteExpenseButton);
