import React from "react";
import { connect } from "react-redux";
import {useNavigate } from 'react-router-dom';
import { removeExpense } from "../actions/expenses";

const DeleteExpenseButton = (props) => {
    const navigate = useNavigate();
    return (
<button 
    onClick={
        ()=> {
            props.dispatch(removeExpense(props.expenseID));
            navigate(props.destination.length ?  props.destination : '/');
        }
    }
    >delete
    </button>
)};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(DeleteExpenseButton);
